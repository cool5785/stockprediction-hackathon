var inputData = require("./input");
var Upstox = require("upstox");
var config = require("config");
var moment = require("moment");
var async = require("async");
const synaptic = require("synaptic");
var input
// const candles = 50;

const express = require("express"),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/neuralNet", (req, res) => {
    if (req.query.data) {
        req.query.data = JSON.parse(req.query.data)
    }
    res.send("server is up and running");
});

app.get("/postNegNetWork", (req, res) => {
    if (req.query.data) {
        req.query.data = JSON.parse(req.query.data)
    }
    res.send("server is up and running");
});

app.get("/percNetwork", (req, res) => {
    if (req.query.data) {
        req.query.data = JSON.parse(req.query.data)
    }
    res.send("server is up and running");
});

app.listen(8000);

var upstox = new Upstox(config.get("api-key"));
var loginUrl = upstox.getLoginUri(config.get("your_redirect_uri"));

console.log("Your login uri is ::" + loginUrl);

// process.exit();

var params = config.get("params");

//
// upstox.getAccessToken(params)
//     .then(function (response) {
//         accessToken = response.access_token;
//         console.log(accessToken);
//         upstox.setToken(accessToken);
//     })
//     .catch(function (err) {
//         // handle error
//     })


upstox.setToken(config.get("accessToken"));

let Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

function fetchData() {

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
            "symbol": "SBIN",
            "interval": "1MINUTE",
            "start_date": item["dayStart"],
            "end_date": item["dayEnd"]
        }
    });

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
            return item;
        });
        parseData(results)
    });
}


function parseData(candleArray) {
    var finalResult = {
        "MATCH": 0,
        "NO MATCH": 0
    };
    // let candleInterval = [180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230];
    let candleInterval = [180];
    // let candleInterval = [240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290 ]s;
    // let candleInterval = [300, 305, 310, 315, 320, 325, 330, 335];
    candleInterval.forEach((candle) => {
        let parsedCandles = candleArray.map((response) => {

            // console.log(response);
            // let result = response.data[candle - 1].close <= response.data[candle].close ? 1 : 0;
            let result = (response.data[candle - 1].close - response.data[candle - 1].open);
            let parsedOb = {
                "input": response.data.slice(0, candle).map((item) => {
                    return item.close - item.open >= 0 ? 1 : 0
                }),
                "output": result  >= 0 ? [1, 0] : [0, 1]
            };
            return parsedOb;
        });
        console.log(`DAYS :: ${parsedCandles.length}`)
        // console.log(`${JSON.stringify(parsedCandles)}`)
        try {
            var result = neuralize(parsedCandles, candle);
            console.log(result);
        } catch (exception) {
            console.log("Oh shit error aaaya", exception);
        }
        // if (result === "MATCH") {
        //     finalResult["MATCH"] += 1;
        // } else {
        //     finalResult["NO MATCH"] += 1;
        // }
    });
    console.log(`${JSON.stringify(finalResult)}`);
}

/**
 * Test neural network for prediction of 181 th candle after 180 candle input
 * @param data
 * @param candles
 * @returns {Array}
 */
function neuralize(data, candles) {

    console.log(`Chalo candle banaye..Candles :: ${candles}`);
    // let inputLayer = new Layer(candles);
    // let hiddenLayer = new Layer(candles + 1);
    // let outputLayer = new Layer(2);
    //
    // inputLayer.project(hiddenLayer);
    // hiddenLayer.project(outputLayer);
    //
    // let myNetwork = new Network({
    //     input: inputLayer,
    //     hidden: [hiddenLayer],
    //     output: outputLayer
    // });

    const anotherNetwork = new Architect.Perceptron(candles, candles - 50, candles - 100, 2);
    var anotherTrainer = new Trainer(anotherNetwork);
    const trainOptions = {
        rate: 0.1,
        iterations: 20000,
        error: 0.005,
        shuffle: true,
        log: 100,
        cost: Trainer.cost.MSE
    };

    console.log('data.length =>>' , data.length);

    const data2 = data.slice(0, data.length - 1);

    let trainingRes = anotherTrainer.train(data2, trainOptions);
    console.log('Model train ho gaya', trainingRes);

    let res = [];

    res.push(anotherNetwork.activate(data[0].input));
    res.push(data[0].output);
    res.push('--------');
    res.push(anotherNetwork.activate(data[10].input));
    res.push(data[10].output);
    res.push('--------');
    res.push(anotherNetwork.activate(data[15].input));
    res.push(data[15].output);

    // res.push(anotherNetwork.activate(data[data.length - 1].input));
    // res.push(data[data.length - 1].output);

    console.log('Ye le result', JSON.stringify(res));
    return res;
    // train the network - learn XOR
    // let learningRate = .3;
    //
    // for (let i = 0; i < data.length - 1; i++) {
    //     // 0,0 => 0
    //     myNetwork.activate(data[i].test);
    //     myNetwork.propagate(learningRate, [data[i].result]);
    // }

    // console.log("My Result :: " + data[data.length - 1].result);
    // console.log(myNetwork.activate(data[data.length - 1].test));
    // return `${data[data.length - 1].result}, ${Math.round(myNetwork.activate(data[data.length - 1].test))}`
    // return data[data.length - 1].result === Math.round(myNetwork.activate(data[data.length - 1].test)) ? "MATCH" : "NO MATCH"
}

//fetchData();
// neuralNet();
// postNegNetWork();
percNetwork();


/**
 * Test neural network for XOR
 */
function neuralNet() {

    var data = [
        {
            input: [0,0],
            output: [0]
        },
        {
            input: [0,1],
            output: [1]
        },
        {
            input: [1,0],
            output: [1]
        },
        {
            input: [1,1],
            output: [0]
        },
    ];

    const trainOptions = {
        rate: 0.1,
        iterations: 20000,
        error: 0.003,
        // shuffle: true,
        log: 100,
        // cost: Trainer.cost.MSE
    };

    const anotherNetwork = new Architect.Perceptron(2, 5, 1);
    var anotherTrainer = new Trainer(anotherNetwork);

    anotherTrainer.train(data, trainOptions);

    console.log(anotherNetwork.activate([0,0]));
    console.log(anotherNetwork.activate([0,1]));
    console.log(anotherNetwork.activate([1,0]));
    console.log(anotherNetwork.activate([1,1]));
}


/**
 * Predict whether bank nifty will be positive or negative based on ICICI, Axis and HDFC bank input
 */
function postNegNetWork() {

    // got positive-neg data, create input and output

    // let Neuron = synaptic.Neuron,
    //     Layer = synaptic.Layer,
    //     Network = synaptic.Network,
    //     Trainer = synaptic.Trainer,
    //     Architect = synaptic.Architect;

    const trainOptions = {
        rate: 0.1,
        iterations: 20000,
        error: 0.003,
        // shuffle: true,
        log: 1000,
        // cost: Trainer.cost.MSE
    };

    const anotherNetwork = new Architect.Perceptron(6, 4, 1);
    var anotherTrainer = new Trainer(anotherNetwork);

    var data = inputData.data;

    data = data.slice(0, inputData.data.length - 7);


    anotherTrainer.train(data, trainOptions);
    console.log('Model is ready..', data, 'Total Data' ,data.length);


    console.log('Show time!!!');

    // Now test the model
    for(let i = inputData.data.length - 20; i < inputData.data.length; i++) {
        console.log(inputData.data[i].input, ' -> AI: ' , anotherNetwork.activate(inputData.data[i].input), ' -> Actual: ', inputData.data[i].output);
    }

}

/**
 * Get relative % change of BankNifty from 3 stocks
 */
function percNetwork() {

    const trainOptions = {
        rate: 0.1,
        iterations: 20000,
        error: 0.003,
        shuffle: true,
        log: 1000,
        // cost: Trainer.cost.MSE
    };

    const anotherNetwork = new Architect.Perceptron(12, 8, 4);
    var anotherTrainer = new Trainer(anotherNetwork);

    var data = inputData.percData;

    console.log('Ye lo data', data);

    data = data.slice(0, inputData.percData.length - 2);

    // console.log('Model is ready..', data, 'Total Data' ,data.length);
    console.log('Show time!!!');
    anotherTrainer.train(data, trainOptions);
    console.log('Model is ready..', data, 'Total Data' ,data.length);


    console.log('Show time!!!');

    // // Randomly testing
    // var arrTest = [108,95,65, 89, 135, 125];
    // arrTest.forEach((i) => {
    //     var arrRes = anotherNetwork.activate(inputData.percData[i].input);
    //
    //     arrRes = arrRes.map((val) => {
    //         return Math.round(val);
    //     });
    //
    //     console.log(inputData.percData[i].input, ' -> ' , arrRes , ' -> ', inputData.percData[i].output);
    //     console.log('AI: value < ',  inputData.getNumberFromQuant(arrRes), 'Actual: ' , inputData.actual[i]["BankNifty"])
    // });

    // Now test the model, 108, 95,65, 135,,,, , 89,125 is wrong
    // let i = 108;

    // Sequential testing , [affected by less data and sequential bias]
    for(let i = inputData.percData.length - 2; i < inputData.percData.length; i++) {
        var arrRes = anotherNetwork.activate(inputData.percData[i].input);

        arrRes = arrRes.map((val) => {
            return Math.round(val);
        });

        console.log(inputData.percData[i].input, ' -> ' , arrRes , ' -> ', inputData.percData[i].output);
        console.log('AI: value < ',  inputData.getNumberFromQuant(arrRes), 'Actual: ' , inputData.actual[i]["BankNifty"])
    }
}

/**
 * Trying to get actual price range rather than binary quantization
 * FAILED: Didn't work
 */
// function tryActual() {
//     const trainOptions = {
//         rate: 0.01,
//         iterations: 20000,
//         error: 0.0003,
//         shuffle: true,
//         log: 1000,
//         // cost: Trainer.cost.MSE
//     };
//
//     const anotherNetwork = new Architect.Perceptron(3, 5, 1);
//     var anotherTrainer = new Trainer(anotherNetwork);
//
//     var data = inputData.rawArr;
//
//     console.log('Ye lo data', data);
//
//     data = data.slice(0, inputData.rawArr.length - 10);
//
//     // console.log('Model is ready..', data, 'Total Data' ,data.length);
//     console.log('Show time!!!');
//     anotherTrainer.train(data, trainOptions);
//     console.log('Model is ready..', data, 'Total Data' ,data.length);
//
//     console.log('Show time!!!');
//
//
//     // Now test the model
//     // let i = 0;
//     for(let i = inputData.rawArr.length - 30; i < inputData.rawArr.length; i++) {
//         console.log(inputData.rawArr[i].input, ' -> AI: ' , anotherNetwork.activate(inputData.rawArr[i].input), ' -> Actual: ', inputData.rawArr[i].output);
//     }
// }


