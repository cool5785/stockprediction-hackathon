let Upstox = require("upstox");
let config = require("config");
let moment = require("moment");
let async = require("async");
const synaptic = require("synaptic");

let upstox = new Upstox(config.get("api-key"));
let loginUrl = upstox.getLoginUri(config.get("your_redirect_uri"));

console.log("Your login uri is ::" + loginUrl);

// process.exit();

let params = config.get("params");

let Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

upstox.setToken(config.get("accessToken"));

let STOCK_NAME = "RELIANCE";

function fetchData() {

    console.log(`STOCK NAME ==> ${STOCK_NAME}`)

    let current_date = new Date();
    let currentDayStart = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate())
    let currentDayEnd = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate() + 1)
    let msInDay = 24 * 60 * 60 * 1000;


    let timeStampList = [];

    for (var i = 0; i < 30; i++) {
        timeStampList.push({
            "dayStart": moment(new Date(currentDayStart - (i * msInDay))).format("DD-MM-YYYY"),
            "dayEnd": moment(new Date(currentDayEnd - (i * msInDay))).format("DD-MM-YYYY")
        })
    }


    let requestArr = timeStampList.map((item) => {
        return {
            "exchange": "nse_eq",
            "symbol": STOCK_NAME,
            "interval": "1MINUTE",
            "start_date": item["dayStart"],
            "end_date": item["dayEnd"]
        }
    })

    requestArr = requestArr.reverse();
    // console.log(requestArr);


    async.map(requestArr, function (item, callback) {
        upstox.getOHLC(item)
            .then(function (response) {
                try {
                    if (response.data.length === 0) {
                        return callback(null, null);
                    }
                    return callback(null, response);
                }
                catch (err) {
                    return callback(null, null);
                }

            })
            .catch(function (err) {
                console.log(err);
                return callback(null, item);
            });
    }, function (err, results) {
        results = results.filter((item) => {
            if (!item) {
                return false;
            }
            return true;
        })
        return parseDataNew(results)
    });

}

function parseDataNew(candleArray) {

    let candleInterval = [180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230];
    // let candle = 180;
    let resultArray = [];

    console.log(`DAYS :: ${candleArray.length}`)

    candleInterval.forEach(function (candle) {

        let parsedCandles = candleArray.map((response) => {
            // console.log(JSON.stringify(response));
            // let result = response.data[candle - 1].close <= response.data[candle].close ? 1 : 0;
            let result = (response.data[candle - 1].close - response.data[candle - 1].open) >= 0 ? 1 : 0
            let parsedOb = {
                "input": response.data.slice(0, candle).map((item) => {
                    return item.close - item.open >= 0 ? 1 : 0
                }),
                "output": [result]
            };
            return parsedOb;
            // console.log(`${JSON.stringify(parsedCandles)}`)
        })
        let result = modelTrainer(parsedCandles, candle);
        // console.log(result);
        resultArray.push(result);
    })
    console.log(`${JSON.stringify(resultArray)}`);
    return resultArray;
}

function modelTrainer(parsedCandles, candles) {

    let inputLayer = new Layer(candles);
    let hiddenLayer = new Layer(candles + 1);
    let outputLayer = new Layer(1);


    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    let myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    let trainer = new Trainer(myNetwork)

    let trainingSet = parsedCandles.slice(0, parsedCandles.length - 1);

    let res = trainer.train(trainingSet, {
        rate: .1,
        iterations: 1000,
        error: .005,
        shuffle: true,
        log: 1000,
        cost: Trainer.cost.CROSS_ENTROPY
    })

    let perceptonResult = myNetwork.activate(parsedCandles[parsedCandles.length - 1].input);
    let perceptronRoundedResult = Math.round(perceptonResult);
    let resultText = parsedCandles[parsedCandles.length - 1].output[0] === Math.round(myNetwork.activate(parsedCandles[parsedCandles.length - 1].input)) ? "MATCH" : "NO MATCH"
    // return parsedCandles[parsedCandles.length - 1].output[0] === Math.round(myNetwork.activate(parsedCandles[parsedCandles.length - 1].input)) ? "MATCH" : "NO MATCH";
    let result = {
        interval: candles,
        output: parsedCandles[parsedCandles.length - 1].output[0],
        predictedOutput: perceptronRoundedResult,
        porbability: perceptonResult,
        result: resultText
    }
    return result;
}

fetchData();