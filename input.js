const inputData = [
    {
        "BankNifty": 0.37,
        "Axis": 1.68,
        "Axis-bn": 4.54,
        "ICICI": 0.97,
        "ICICI-bn": 2.62,
        "HDFC": -0.6,
        "HDFC-bn": -1.62
    },
    {
        "BankNifty": -0.8,
        "Axis": -0.47,
        "Axis-bn": 0.59,
        "ICICI": -1.3,
        "ICICI-bn": 1.63,
        "HDFC": -0.37,
        "HDFC-bn": 0.46
    },
    {
        "BankNifty": 1.26,
        "Axis": 1.09,
        "Axis-bn": 0.87,
        "ICICI": 2.45,
        "ICICI-bn": 1.94,
        "HDFC": 0.06,
        "HDFC-bn": 0.05
    },
    {
        "BankNifty": 0.82,
        "Axis": -0.62,
        "Axis-bn": -0.76,
        "ICICI": 0.35,
        "ICICI-bn": 0.43,
        "HDFC": 0.63,
        "HDFC-bn": 0.77
    },
    {
        "BankNifty": 0.12,
        "Axis": -0.54,
        "Axis-bn": -4.5,
        "ICICI": 0.21,
        "ICICI-bn": 1.75,
        "HDFC": 0.13,
        "HDFC-bn": 1.08
    },
    {
        "BankNifty": 0.67,
        "Axis": -1.19,
        "Axis-bn": -1.78,
        "ICICI": 0.58,
        "ICICI-bn": 0.87,
        "HDFC": 1.6,
        "HDFC-bn": 2.39
    },
    {
        "BankNifty": 2.28,
        "Axis": 1.4,
        "Axis-bn": 0.61,
        "ICICI": 1.73,
        "ICICI-bn": 0.76,
        "HDFC": 1.62,
        "HDFC-bn": 0.71
    },
    {
        "BankNifty": 0.23,
        "Axis": 0.35,
        "Axis-bn": 1.52,
        "ICICI": 1.38,
        "ICICI-bn": 6,
        "HDFC": 0.08,
        "HDFC-bn": 0.35
    },
    {
        "BankNifty": 0.2,
        "Axis": 3.87,
        "Axis-bn": 19.35,
        "ICICI": -0.11,
        "ICICI-bn": -0.55,
        "HDFC": -0.2,
        "HDFC-bn": -1
    },
    {
        "BankNifty": 0.97,
        "Axis": 0.94,
        "Axis-bn": 0.97,
        "ICICI": 0.47,
        "ICICI-bn": 0.48,
        "HDFC": 1.23,
        "HDFC-bn": 1.27
    },
    {
        "BankNifty": -0.15,
        "Axis": 2.08,
        "Axis-bn": -13.87,
        "ICICI": -0.33,
        "ICICI-bn": 2.2,
        "HDFC": -0.73,
        "HDFC-bn": 4.87
    },
    {
        "BankNifty": 0.51,
        "Axis": 0.27,
        "Axis-bn": 0.53,
        "ICICI": 0.02,
        "ICICI-bn": 0.04,
        "HDFC": 0.33,
        "HDFC-bn": 0.65
    },
    {
        "BankNifty": -0.21,
        "Axis": -0.96,
        "Axis-bn": 4.57,
        "ICICI": 0.47,
        "ICICI-bn": -2.24,
        "HDFC": -0.51,
        "HDFC-bn": 2.43
    },
    {
        "BankNifty": -1.59,
        "Axis": -6.83,
        "Axis-bn": 4.3,
        "ICICI": -2.32,
        "ICICI-bn": 1.46,
        "HDFC": 0,
        "HDFC-bn": 0
    },
    {
        "BankNifty": 0.12,
        "Axis": -1.28,
        "Axis-bn": -10.67,
        "ICICI": -2.24,
        "ICICI-bn": -18.67,
        "HDFC": 0.67,
        "HDFC-bn": 5.58
    },
    {
        "BankNifty": 0.96,
        "Axis": 1.4,
        "Axis-bn": 1.46,
        "ICICI": -0.16,
        "ICICI-bn": -0.17,
        "HDFC": 1.84,
        "HDFC-bn": 1.92
    },
    {
        "BankNifty": 2.36,
        "Axis": 2.73,
        "Axis-bn": 1.16,
        "ICICI": 1.09,
        "ICICI-bn": 0.46,
        "HDFC": 1.82,
        "HDFC-bn": 0.77
    },
    {
        "BankNifty": 1.21,
        "Axis": 2.01,
        "Axis-bn": 1.66,
        "ICICI": 4.64,
        "ICICI-bn": 3.83,
        "HDFC": 0.1,
        "HDFC-bn": 0.08
    },
    {
        "BankNifty": -0.62,
        "Axis": -0.2,
        "Axis-bn": 0.32,
        "ICICI": -0.44,
        "ICICI-bn": 0.71,
        "HDFC": -0.54,
        "HDFC-bn": 0.87
    },
    {
        "BankNifty": -0.36,
        "Axis": -1.25,
        "Axis-bn": 3.47,
        "ICICI": -0.68,
        "ICICI-bn": 1.89,
        "HDFC": 0.13,
        "HDFC-bn": -0.36
    },
    {
        "BankNifty": 2.59,
        "Axis": 2.07,
        "Axis-bn": 0.8,
        "ICICI": 4.48,
        "ICICI-bn": 1.73,
        "HDFC": 1.48,
        "HDFC-bn": 0.57
    },
    {
        "BankNifty": 0.25,
        "Axis": 1.45,
        "Axis-bn": 5.8,
        "ICICI": 1.71,
        "ICICI-bn": 6.84,
        "HDFC": -0.54,
        "HDFC-bn": -2.16
    },
    {
        "BankNifty": 0.63,
        "Axis": 1.69,
        "Axis-bn": 2.68,
        "ICICI": -1.49,
        "ICICI-bn": -2.37,
        "HDFC": 0.95,
        "HDFC-bn": 1.51
    },
    {
        "BankNifty": 0.87,
        "Axis": 1.55,
        "Axis-bn": 1.78,
        "ICICI": 3.11,
        "ICICI-bn": 3.57,
        "HDFC": 0.23,
        "HDFC-bn": 0.26
    },
    {
        "BankNifty": -0.22,
        "Axis": -0.98,
        "Axis-bn": 4.45,
        "ICICI": -0.76,
        "ICICI-bn": 3.45,
        "HDFC": -0.53,
        "HDFC-bn": 2.41
    },
    {
        "BankNifty": -0.4,
        "Axis": -1.18,
        "Axis-bn": 2.95,
        "ICICI": -0.8,
        "ICICI-bn": 2,
        "HDFC": -0.11,
        "HDFC-bn": 0.27
    },
    {
        "BankNifty": -0.47,
        "Axis": -0.48,
        "Axis-bn": 1.02,
        "ICICI": -0.28,
        "ICICI-bn": 0.6,
        "HDFC": -0.61,
        "HDFC-bn": 1.3
    },
    {
        "BankNifty": 0.31,
        "Axis": 0.75,
        "Axis-bn": 2.42,
        "ICICI": -1.19,
        "ICICI-bn": -3.84,
        "HDFC": 0.46,
        "HDFC-bn": 1.48
    },
    {
        "BankNifty": 0.19,
        "Axis": 0.29,
        "Axis-bn": 1.53,
        "ICICI": 0.02,
        "ICICI-bn": 0.11,
        "HDFC": 0.51,
        "HDFC-bn": 2.68
    },
    {
        "BankNifty": 0.03,
        "Axis": -0.69,
        "Axis-bn": -23,
        "ICICI": 1.07,
        "ICICI-bn": 35.67,
        "HDFC": 0.07,
        "HDFC-bn": 2.33
    },
    {
        "BankNifty": -0.47,
        "Axis": 0.27,
        "Axis-bn": -0.57,
        "ICICI": -1.37,
        "ICICI-bn": 2.91,
        "HDFC": 0.85,
        "HDFC-bn": -1.81
    },
    {
        "BankNifty": 0.4,
        "Axis": 1.01,
        "Axis-bn": 2.52,
        "ICICI": -0.69,
        "ICICI-bn": -1.72,
        "HDFC": 0.43,
        "HDFC-bn": 1.07
    },
    {
        "BankNifty": 1.52,
        "Axis": -0.82,
        "Axis-bn": -0.54,
        "ICICI": 1.51,
        "ICICI-bn": 0.99,
        "HDFC": 3.7,
        "HDFC-bn": 2.43
    },
    {
        "BankNifty": 0.61,
        "Axis": -1.65,
        "Axis-bn": -2.7,
        "ICICI": -0.23,
        "ICICI-bn": -0.38,
        "HDFC": 2.33,
        "HDFC-bn": 3.82
    },
    {
        "BankNifty": 0.89,
        "Axis": 4.84,
        "Axis-bn": 5.44,
        "ICICI": 0.87,
        "ICICI-bn": 0.98,
        "HDFC": 0.46,
        "HDFC-bn": 0.52
    },
    {
        "BankNifty": 0.04,
        "Axis": 4.15,
        "Axis-bn": 103.75,
        "ICICI": 0.47,
        "ICICI-bn": 11.75,
        "HDFC": -1.16,
        "HDFC-bn": -29
    },
    {
        "BankNifty": 0.04,
        "Axis": 0.54,
        "Axis-bn": 13.5,
        "ICICI": -0.58,
        "ICICI-bn": -14.5,
        "HDFC": -0.35,
        "HDFC-bn": -8.75
    },
    {
        "BankNifty": -1.26,
        "Axis": -3.64,
        "Axis-bn": 2.89,
        "ICICI": -1.99,
        "ICICI-bn": 1.58,
        "HDFC": -0.05,
        "HDFC-bn": 0.04
    },
    {
        "BankNifty": -0.03,
        "Axis": -0.45,
        "Axis-bn": 15,
        "ICICI": -0.9,
        "ICICI-bn": 30,
        "HDFC": -0.25,
        "HDFC-bn": 8.33
    },
    {
        "BankNifty": 0.86,
        "Axis": 1.33,
        "Axis-bn": 1.55,
        "ICICI": 1,
        "ICICI-bn": 1.16,
        "HDFC": 0.11,
        "HDFC-bn": 0.13
    },
    {
        "BankNifty": -1.08,
        "Axis": -1.38,
        "Axis-bn": 1.28,
        "ICICI": -0.16,
        "ICICI-bn": 0.15,
        "HDFC": -0.83,
        "HDFC-bn": 0.77
    },
    {
        "BankNifty": -0.31,
        "Axis": 1.3,
        "Axis-bn": -4.19,
        "ICICI": -0.97,
        "ICICI-bn": 3.13,
        "HDFC": -0.22,
        "HDFC-bn": 0.71
    },
    {
        "BankNifty": 0.82,
        "Axis": 1.12,
        "Axis-bn": 1.37,
        "ICICI": 0.29,
        "ICICI-bn": 0.35,
        "HDFC": 0.27,
        "HDFC-bn": 0.33
    },
    {
        "BankNifty": -0.17,
        "Axis": -1.32,
        "Axis-bn": 7.76,
        "ICICI": -0.27,
        "ICICI-bn": 1.59,
        "HDFC": 0.39,
        "HDFC-bn": -2.29
    },
    {
        "BankNifty": 0.24,
        "Axis": -0.32,
        "Axis-bn": -1.33,
        "ICICI": -0.58,
        "ICICI-bn": -2.42,
        "HDFC": 0.43,
        "HDFC-bn": 1.79
    },
    {
        "BankNifty": 0.22,
        "Axis": 1.23,
        "Axis-bn": 5.59,
        "ICICI": -0.33,
        "ICICI-bn": -1.5,
        "HDFC": 0.14,
        "HDFC-bn": 0.64
    },
    {
        "BankNifty": 0.03,
        "Axis": -0.1,
        "Axis-bn": -3.33,
        "ICICI": -1.08,
        "ICICI-bn": -36,
        "HDFC": 0.42,
        "HDFC-bn": 14
    },
    {
        "BankNifty": 1.81,
        "Axis": -0.97,
        "Axis-bn": -0.54,
        "ICICI": 6.17,
        "ICICI-bn": 3.41,
        "HDFC": 0.76,
        "HDFC-bn": 0.42
    },
    {
        "BankNifty": 0.26,
        "Axis": 0.16,
        "Axis-bn": 0.62,
        "ICICI": -0.73,
        "ICICI-bn": -2.81,
        "HDFC": 0.42,
        "HDFC-bn": 1.62
    },
    {
        "BankNifty": 0.43,
        "Axis": 0.38,
        "Axis-bn": 0.88,
        "ICICI": -0.23,
        "ICICI-bn": -0.53,
        "HDFC": 0.05,
        "HDFC-bn": 0.12
    },
    {
        "BankNifty": -0.35,
        "Axis": 0.68,
        "Axis-bn": -1.94,
        "ICICI": -1.37,
        "ICICI-bn": 3.91,
        "HDFC": 0.6,
        "HDFC-bn": -1.71
    },
    {
        "BankNifty": -0.31,
        "Axis": -2.77,
        "Axis-bn": 8.94,
        "ICICI": -1.98,
        "ICICI-bn": 6.39,
        "HDFC": 0.72,
        "HDFC-bn": -2.32
    },
    {
        "BankNifty": -0.43,
        "Axis": -2.89,
        "Axis-bn": 6.72,
        "ICICI": -1.09,
        "ICICI-bn": 2.53,
        "HDFC": 0.34,
        "HDFC-bn": -0.79
    },
    {
        "BankNifty": -1.13,
        "Axis": -0.58,
        "Axis-bn": 0.51,
        "ICICI": -2.59,
        "ICICI-bn": 2.29,
        "HDFC": -0.7,
        "HDFC-bn": 0.62
    },
    {
        "BankNifty": 0.55,
        "Axis": 0.23,
        "Axis-bn": 0.42,
        "ICICI": 2.92,
        "ICICI-bn": 5.31,
        "HDFC": -0.46,
        "HDFC-bn": -0.84
    },
    {
        "BankNifty": 1.09,
        "Axis": -0.45,
        "Axis-bn": -0.41,
        "ICICI": -0.58,
        "ICICI-bn": -0.53,
        "HDFC": -1.02,
        "HDFC-bn": -0.94
    },
    {
        "BankNifty": -0.31,
        "Axis": 3.21,
        "Axis-bn": -10.35,
        "ICICI": 1.41,
        "ICICI-bn": -4.55,
        "HDFC": 0.73,
        "HDFC-bn": -2.35
    },
    {
        "BankNifty": 0.8,
        "Axis": 0.28,
        "Axis-bn": 0.35,
        "ICICI": 1.88,
        "ICICI-bn": 2.35,
        "HDFC": 0.59,
        "HDFC-bn": 0.74
    },
    {
        "BankNifty": 0.78,
        "Axis": -0.98,
        "Axis-bn": -1.26,
        "ICICI": -0.3,
        "ICICI-bn": -0.38,
        "HDFC": 2.63,
        "HDFC-bn": 3.37
    },
    {
        "BankNifty": 1.07,
        "Axis": -1.69,
        "Axis-bn": -1.58,
        "ICICI": -1.6,
        "ICICI-bn": -1.5,
        "HDFC": -1.61,
        "HDFC-bn": -1.5
    },
    {
        "BankNifty": -0.82,
        "Axis": 2,
        "Axis-bn": -2.44,
        "ICICI": 3.56,
        "ICICI-bn": -4.34,
        "HDFC": -0.65,
        "HDFC-bn": 0.79
    },
    {
        "BankNifty": 0.48,
        "Axis": 1.54,
        "Axis-bn": 3.21,
        "ICICI": -0.65,
        "ICICI-bn": -1.35,
        "HDFC": -0.06,
        "HDFC-bn": -0.13
    },
    {
        "BankNifty": 0.49,
        "Axis": 0.08,
        "Axis-bn": 0.16,
        "ICICI": -1.4,
        "ICICI-bn": -2.86,
        "HDFC": 0.43,
        "HDFC-bn": 0.88
    },
    {
        "BankNifty": -0.14,
        "Axis": -0.88,
        "Axis-bn": 6.29,
        "ICICI": -1.25,
        "ICICI-bn": 8.93,
        "HDFC": 0.02,
        "HDFC-bn": -0.14
    },
    {
        "BankNifty": -0.89,
        "Axis": 1.3,
        "Axis-bn": -1.46,
        "ICICI": 0.11,
        "ICICI-bn": -0.12,
        "HDFC": -0.33,
        "HDFC-bn": 0.37
    },
    {
        "BankNifty": 0.42,
        "Axis": 0.84,
        "Axis-bn": 2,
        "ICICI": 2.16,
        "ICICI-bn": 5.14,
        "HDFC": 0.37,
        "HDFC-bn": 0.88
    },
    {
        "BankNifty": 1,
        "Axis": -1.76,
        "Axis-bn": -1.76,
        "ICICI": -1,
        "ICICI-bn": -1,
        "HDFC": 0.29,
        "HDFC-bn": 0.29
    },
    {
        "BankNifty": -0.32,
        "Axis": 0.31,
        "Axis-bn": -0.97,
        "ICICI": 0.71,
        "ICICI-bn": -2.22,
        "HDFC": -0.24,
        "HDFC-bn": 0.75
    },
    {
        "BankNifty": 0.09,
        "Axis": -1.02,
        "Axis-bn": -11.33,
        "ICICI": -0.14,
        "ICICI-bn": -1.56,
        "HDFC": -0.24,
        "HDFC-bn": -2.67
    },
    {
        "BankNifty": -0.18,
        "Axis": -0.54,
        "Axis-bn": 3,
        "ICICI": 0.35,
        "ICICI-bn": -1.94,
        "HDFC": 0.73,
        "HDFC-bn": -4.06
    },
    {
        "BankNifty": 0.11,
        "Axis": -0.03,
        "Axis-bn": -0.27,
        "ICICI": -1.01,
        "ICICI-bn": -9.18,
        "HDFC": 0.12,
        "HDFC-bn": 1.09
    },
    {
        "BankNifty": -0.53,
        "Axis": -2.3,
        "Axis-bn": 4.34,
        "ICICI": -2.78,
        "ICICI-bn": 5.25,
        "HDFC": 0.91,
        "HDFC-bn": -1.72
    },
    {
        "BankNifty": -0.3,
        "Axis": -0.36,
        "Axis-bn": 1.2,
        "ICICI": -1.32,
        "ICICI-bn": 4.4,
        "HDFC": 2.36,
        "HDFC-bn": -7.87
    },
    {
        "BankNifty": 0.28,
        "Axis": 2.55,
        "Axis-bn": 9.11,
        "ICICI": -0.19,
        "ICICI-bn": -0.68,
        "HDFC": 2.44,
        "HDFC-bn": 8.71
    },
    {
        "BankNifty": 1.42,
        "Axis": 3.56,
        "Axis-bn": 2.51,
        "ICICI": 1.43,
        "ICICI-bn": 1.01,
        "HDFC": 0.26,
        "HDFC-bn": 0.18
    },
    {
        "BankNifty": 0.9,
        "Axis": 0.15,
        "Axis-bn": 0.17,
        "ICICI": 1.61,
        "ICICI-bn": 1.79,
        "HDFC": 0.88,
        "HDFC-bn": 0.98
    },
    {
        "BankNifty": 1.23,
        "Axis": -2.04,
        "Axis-bn": -1.66,
        "ICICI": -0.99,
        "ICICI-bn": -0.8,
        "HDFC": 1.16,
        "HDFC-bn": 0.94
    },
    {
        "BankNifty": 0.14,
        "Axis": 0.6,
        "Axis-bn": 4.29,
        "ICICI": 1.59,
        "ICICI-bn": 11.36,
        "HDFC": -1.41,
        "HDFC-bn": -10.07
    },
    {
        "BankNifty": -0.08,
        "Axis": -0.8,
        "Axis-bn": 10,
        "ICICI": -1.04,
        "ICICI-bn": 13,
        "HDFC": -0.38,
        "HDFC-bn": 4.75
    },
    {
        "BankNifty": -0.15,
        "Axis": -0.93,
        "Axis-bn": 6.2,
        "ICICI": -1.03,
        "ICICI-bn": 6.87,
        "HDFC": 0.24,
        "HDFC-bn": -1.6
    },
    {
        "BankNifty": 1.85,
        "Axis": 3.59,
        "Axis-bn": 1.94,
        "ICICI": 9.18,
        "ICICI-bn": 4.96,
        "HDFC": -0.62,
        "HDFC-bn": -0.34
    },
    {
        "BankNifty": -0.51,
        "Axis": -2.77,
        "Axis-bn": 5.43,
        "ICICI": 0.25,
        "ICICI-bn": -0.49,
        "HDFC": -0.17,
        "HDFC-bn": 0.33
    },
    {
        "BankNifty": 0.72,
        "Axis": 1.33,
        "Axis-bn": 1.85,
        "ICICI": 1.47,
        "ICICI-bn": 2.04,
        "HDFC": 0.17,
        "HDFC-bn": 0.24
    },
    {
        "BankNifty": -0.26,
        "Axis": 1.37,
        "Axis-bn": -5.27,
        "ICICI": -0.78,
        "ICICI-bn": 3,
        "HDFC": 0.06,
        "HDFC-bn": -0.23
    },
    {
        "BankNifty": 0.54,
        "Axis": 1.57,
        "Axis-bn": 2.91,
        "ICICI": -0.65,
        "ICICI-bn": -1.2,
        "HDFC": 1.05,
        "HDFC-bn": 1.94
    },
    {
        "BankNifty": -0.05,
        "Axis": -1.8,
        "Axis-bn": 36,
        "ICICI": 0.52,
        "ICICI-bn": -10.4,
        "HDFC": -0.35,
        "HDFC-bn": 7
    },
    {
        "BankNifty": -0.64,
        "Axis": -2.69,
        "Axis-bn": 4.2,
        "ICICI": -1.22,
        "ICICI-bn": 1.91,
        "HDFC": 0.34,
        "HDFC-bn": -0.53
    },
    {
        "BankNifty": 0.66,
        "Axis": -0.58,
        "Axis-bn": -0.88,
        "ICICI": 1.77,
        "ICICI-bn": 2.68,
        "HDFC": 0.11,
        "HDFC-bn": 0.17
    },
    {
        "BankNifty": 0.47,
        "Axis": 0.28,
        "Axis-bn": 0.6,
        "ICICI": 0.28,
        "ICICI-bn": 0.6,
        "HDFC": 0.4,
        "HDFC-bn": 0.85
    },
    {
        "BankNifty": 0.03,
        "Axis": 0.26,
        "Axis-bn": 8.67,
        "ICICI": 2.35,
        "ICICI-bn": 78.33,
        "HDFC": -0.16,
        "HDFC-bn": -5.33
    },
    {
        "BankNifty": -1.03,
        "Axis": -2.15,
        "Axis-bn": 2.09,
        "ICICI": -0.58,
        "ICICI-bn": 0.56,
        "HDFC": 0,
        "HDFC-bn": 0
    },
    {
        "BankNifty": 0.31,
        "Axis": 1.97,
        "Axis-bn": 6.35,
        "ICICI": -0.29,
        "ICICI-bn": -0.94,
        "HDFC": 0.27,
        "HDFC-bn": 0.87
    },
    {
        "BankNifty": -0.51,
        "Axis": 0.12,
        "Axis-bn": -0.24,
        "ICICI": -1.04,
        "ICICI-bn": 2.04,
        "HDFC": 0.94,
        "HDFC-bn": -1.84
    },
    {
        "BankNifty": -0.31,
        "Axis": -0.34,
        "Axis-bn": 1.1,
        "ICICI": 0.72,
        "ICICI-bn": -2.32,
        "HDFC": -0.44,
        "HDFC-bn": 1.42
    },
    {
        "BankNifty": -0.21,
        "Axis": -0.26,
        "Axis-bn": 1.24,
        "ICICI": 0.21,
        "ICICI-bn": -1,
        "HDFC": -0.15,
        "HDFC-bn": 0.71
    },
    {
        "BankNifty": 2.9,
        "Axis": 1.63,
        "Axis-bn": 0.56,
        "ICICI": 3.59,
        "ICICI-bn": 1.24,
        "HDFC": 3.22,
        "HDFC-bn": 1.11
    },
    {
        "BankNifty": 0.74,
        "Axis": 0.79,
        "Axis-bn": 1.07,
        "ICICI": 1.21,
        "ICICI-bn": 1.64,
        "HDFC": 0.55,
        "HDFC-bn": 0.74
    },
    {
        "BankNifty": -0.77,
        "Axis": -0.82,
        "Axis-bn": 1.06,
        "ICICI": -2.07,
        "ICICI-bn": 2.69,
        "HDFC": 0.36,
        "HDFC-bn": -0.47
    },
    {
        "BankNifty": 0.54,
        "Axis": 1.41,
        "Axis-bn": 2.61,
        "ICICI": 2.06,
        "ICICI-bn": 3.81,
        "HDFC": -0.17,
        "HDFC-bn": -0.31
    },
    {
        "BankNifty": 0.5,
        "Axis": -0.07,
        "Axis-bn": -0.14,
        "ICICI": 1.57,
        "ICICI-bn": 3.14,
        "HDFC": 0.44,
        "HDFC-bn": 0.88
    },
    {
        "BankNifty": -0.49,
        "Axis": -0.92,
        "Axis-bn": 1.88,
        "ICICI": -1.95,
        "ICICI-bn": 3.98,
        "HDFC": -0.46,
        "HDFC-bn": 0.94
    },
    {
        "BankNifty": 0.28,
        "Axis": -0.25,
        "Axis-bn": -0.89,
        "ICICI": -0.61,
        "ICICI-bn": -2.18,
        "HDFC": 0.35,
        "HDFC-bn": 1.25
    },
    {
        "BankNifty": 0.36,
        "Axis": 1.1,
        "Axis-bn": 3.06,
        "ICICI": 0.5,
        "ICICI-bn": 1.39,
        "HDFC": 0.08,
        "HDFC-bn": 0.22
    },
    {
        "BankNifty": -0.18,
        "Axis": -0.67,
        "Axis-bn": 3.72,
        "ICICI": -0.25,
        "ICICI-bn": 1.39,
        "HDFC": 0.21,
        "HDFC-bn": -1.17
    },
    {
        "BankNifty": 0.65,
        "Axis": 0.78,
        "Axis-bn": 1.2,
        "ICICI": 1.8,
        "ICICI-bn": 2.77,
        "HDFC": 0.11,
        "HDFC-bn": 0.17
    },
    {
        "BankNifty": -0.13,
        "Axis": 0.3,
        "Axis-bn": -2.31,
        "ICICI": -1.39,
        "ICICI-bn": 10.69,
        "HDFC": 0.24,
        "HDFC-bn": -1.85
    },
    {
        "BankNifty": 0.66,
        "Axis": -0.41,
        "Axis-bn": -0.62,
        "ICICI": 0.61,
        "ICICI-bn": 0.92,
        "HDFC": 1.34,
        "HDFC-bn": 2.03
    },
    {
        "BankNifty": -0.93,
        "Axis": -1.2,
        "Axis-bn": 1.29,
        "ICICI": -1.99,
        "ICICI-bn": 2.14,
        "HDFC": 0.12,
        "HDFC-bn": -0.13
    },
    {
        "BankNifty": 0.03,
        "Axis": -0.21,
        "Axis-bn": -7,
        "ICICI": -0.29,
        "ICICI-bn": -9.67,
        "HDFC": 0.48,
        "HDFC-bn": 16
    },
    {
        "BankNifty": 0.09,
        "Axis": 0.6,
        "Axis-bn": 6.67,
        "ICICI": 1.33,
        "ICICI-bn": 14.78,
        "HDFC": -0.33,
        "HDFC-bn": -3.67
    },
    {
        "BankNifty": -0.46,
        "Axis": -0.37,
        "Axis-bn": 0.8,
        "ICICI": -0.72,
        "ICICI-bn": 1.57,
        "HDFC": -0.41,
        "HDFC-bn": 0.89
    },
    {
        "BankNifty": 0.47,
        "Axis": 0.56,
        "Axis-bn": 1.19,
        "ICICI": -0.08,
        "ICICI-bn": -0.17,
        "HDFC": 0.29,
        "HDFC-bn": 0.62
    },
    {
        "BankNifty": 1.02,
        "Axis": 1.9,
        "Axis-bn": 1.86,
        "ICICI": 1.3,
        "ICICI-bn": 1.27,
        "HDFC": 1.42,
        "HDFC-bn": 1.39
    },
    {
        "BankNifty": -0.19,
        "Axis": -1.6,
        "Axis-bn": 8.42,
        "ICICI": -8.78,
        "ICICI-bn": 46.21,
        "HDFC": -0.38,
        "HDFC-bn": 2
    },
    {
        "BankNifty": 0.05,
        "Axis": -0.8,
        "Axis-bn": -16,
        "ICICI": -0.46,
        "ICICI-bn": -9.2,
        "HDFC": 0.72,
        "HDFC-bn": 14.4
    },
    {
        "BankNifty": 0.12,
        "Axis": 0.05,
        "Axis-bn": 0.42,
        "ICICI": -0.52,
        "ICICI-bn": -4.33,
        "HDFC": -0.04,
        "HDFC-bn": -0.33
    },
    {
        "BankNifty": -0.81,
        "Axis": -0.66,
        "Axis-bn": 0.81,
        "ICICI": 0.78,
        "ICICI-bn": -0.96,
        "HDFC": -1.14,
        "HDFC-bn": 1.41
    },
    {
        "BankNifty": -1.39,
        "Axis": -2.34,
        "Axis-bn": 1.68,
        "ICICI": -1.35,
        "ICICI-bn": 0.97,
        "HDFC": -0.66,
        "HDFC-bn": 0.47
    },
    {
        "BankNifty": 0.08,
        "Axis": -0.17,
        "Axis-bn": -2.13,
        "ICICI": 0.85,
        "ICICI-bn": 10.63,
        "HDFC": -0.07,
        "HDFC-bn": -0.88
    },
    {
        "BankNifty": -0.04,
        "Axis": 4.09,
        "Axis-bn": -102.25,
        "ICICI": 1,
        "ICICI-bn": -25,
        "HDFC": -0.2,
        "HDFC-bn": 5
    },
    {
        "BankNifty": -0.07,
        "Axis": 1.03,
        "Axis-bn": -14.71,
        "ICICI": -1.06,
        "ICICI-bn": 15.14,
        "HDFC": -0.66,
        "HDFC-bn": 9.43
    },
    {
        "BankNifty": 0.27,
        "Axis": -0.02,
        "Axis-bn": -0.07,
        "ICICI": -0.03,
        "ICICI-bn": -0.11,
        "HDFC": 0.4,
        "HDFC-bn": 1.48
    },
    {
        "BankNifty": -0.25,
        "Axis": -1.71,
        "Axis-bn": 6.84,
        "ICICI": -0.19,
        "ICICI-bn": 0.76,
        "HDFC": -0.32,
        "HDFC-bn": 1.28
    },
    {
        "BankNifty": 0.6,
        "Axis": 1.08,
        "Axis-bn": 1.8,
        "ICICI": 1.16,
        "ICICI-bn": 1.93,
        "HDFC": -0.28,
        "HDFC-bn": -0.47
    },
    {
        "BankNifty": 0.49,
        "Axis": -0.86,
        "Axis-bn": -1.76,
        "ICICI": 0.31,
        "ICICI-bn": 0.63,
        "HDFC": 0.57,
        "HDFC-bn": 1.16
    },
    {
        "BankNifty": -0.07,
        "Axis": -1.25,
        "Axis-bn": 17.86,
        "ICICI": -1.38,
        "ICICI-bn": 19.71,
        "HDFC": 0.55,
        "HDFC-bn": -7.86
    },
    {
        "BankNifty": 0.96,
        "Axis": 1.35,
        "Axis-bn": 1.41,
        "ICICI": 0.6,
        "ICICI-bn": 0.63,
        "HDFC": 0.55,
        "HDFC-bn": 0.57
    },
    {
        "BankNifty": -0.38,
        "Axis": -0.62,
        "Axis-bn": 1.63,
        "ICICI": -0.62,
        "ICICI-bn": 1.63,
        "HDFC": 0.24,
        "HDFC-bn": -0.63
    },
    {
        "BankNifty": 0.47,
        "Axis": -0.01,
        "Axis-bn": -0.02,
        "ICICI": 0.93,
        "ICICI-bn": 1.98,
        "HDFC": 0.05,
        "HDFC-bn": 0.11
    },
    {
        "BankNifty": 0.82,
        "Axis": 1.02,
        "Axis-bn": 1.24,
        "ICICI": 1.9,
        "ICICI-bn": 2.32,
        "HDFC": 0.14,
        "HDFC-bn": 0.17
    },
    {
        "BankNifty": 0.21,
        "Axis": 0.21,
        "Axis-bn": 1,
        "ICICI": 0.12,
        "ICICI-bn": 0.57,
        "HDFC": -0.21,
        "HDFC-bn": -1
    },
    {
        "BankNifty": 0.32,
        "Axis": -0.48,
        "Axis-bn": -1.5,
        "ICICI": 1.76,
        "ICICI-bn": 5.5,
        "HDFC": 0.14,
        "HDFC-bn": 0.44
    },
    {
        "BankNifty": 0.03,
        "Axis": 1.19,
        "Axis-bn": 39.67,
        "ICICI": 0.13,
        "ICICI-bn": 4.33,
        "HDFC": 0.07,
        "HDFC-bn": 2.33
    },
    {
        "BankNifty": 0.54,
        "Axis": 0.71,
        "Axis-bn": 1.31,
        "ICICI": -0.54,
        "ICICI-bn": -1,
        "HDFC": 0.52,
        "HDFC-bn": 0.96
    },
    {
        "BankNifty": 0.25,
        "Axis": 3.81,
        "Axis-bn": 15.24,
        "ICICI": -0.55,
        "ICICI-bn": -2.2,
        "HDFC": 1.1,
        "HDFC-bn": 4.4
    },
    {
        "BankNifty": 0.18,
        "Axis": 0.15,
        "Axis-bn": 0.83,
        "ICICI": 0.48,
        "ICICI-bn": 2.67,
        "HDFC": -0.46,
        "HDFC-bn": -2.56
    },
    {
        "BankNifty": 0.68,
        "Axis": -1.11,
        "Axis-bn": -1.63,
        "ICICI": 0.33,
        "ICICI-bn": 0.49,
        "HDFC": 1.88,
        "HDFC-bn": 2.76
    },
    {
        "BankNifty": 0.41,
        "Axis": 1.9,
        "Axis-bn": 4.63,
        "ICICI": 0.36,
        "ICICI-bn": 0.88,
        "HDFC": 0.26,
        "HDFC-bn": 0.63
    },
    {
        "BankNifty": 0.61,
        "Axis": -2.95,
        "Axis-bn": -4.84,
        "ICICI": 2.04,
        "ICICI-bn": 3.34,
        "HDFC": 0.45,
        "HDFC-bn": 0.74
    },
    {
        "BankNifty": 1.02,
        "Axis": -0.79,
        "Axis-bn": -0.77,
        "ICICI": -1.01,
        "ICICI-bn": -0.99,
        "HDFC": 2.41,
        "HDFC-bn": 2.36
    },
    {
        "BankNifty": -0.45,
        "Axis": -1.82,
        "Axis-bn": 4.04,
        "ICICI": -3.6,
        "ICICI-bn": 8,
        "HDFC": -0.62,
        "HDFC-bn": 1.38
    },
    {
        "BankNifty": 1.18,
        "Axis": 0.91,
        "Axis-bn": 0.77,
        "ICICI": 2.18,
        "ICICI-bn": 1.85,
        "HDFC": 0.33,
        "HDFC-bn": 0.28
    },
    {
        "BankNifty": 0.08,
        "Axis": -0.63,
        "Axis-bn": -7.88,
        "ICICI": 0,
        "ICICI-bn": 0,
        "HDFC": 0.72,
        "HDFC-bn": 9
    },
    {
        "BankNifty": -0.27,
        "Axis": 0.07,
        "Axis-bn": -0.26,
        "ICICI": -0.25,
        "ICICI-bn": 0.93,
        "HDFC": -0.31,
        "HDFC-bn": 1.15
    },
    {
        "BankNifty": -1.52,
        "Axis": -2.11,
        "Axis-bn": 1.39,
        "ICICI": -2.04,
        "ICICI-bn": 1.34,
        "HDFC": -0.65,
        "HDFC-bn": 0.43
    },
    {
        "BankNifty": 0.62,
        "Axis": 0.42,
        "Axis-bn": 0.68,
        "ICICI": 0.19,
        "ICICI-bn": 0.31,
        "HDFC": 0.58,
        "HDFC-bn": 0.94
    },
    {
        "BankNifty": 0.32,
        "Axis": -0.45,
        "Axis-bn": -1.41,
        "ICICI": 1.32,
        "ICICI-bn": 4.13,
        "HDFC": -0.09,
        "HDFC-bn": -0.28
    },
    {
        "BankNifty": -1.23,
        "Axis": -1.26,
        "Axis-bn": 1.02,
        "ICICI": -1.55,
        "ICICI-bn": 1.26,
        "HDFC": -0.6,
        "HDFC-bn": 0.49
    },
    {
        "BankNifty": -0.91,
        "Axis": -2.5,
        "Axis-bn": 2.75,
        "ICICI": -1.66,
        "ICICI-bn": 1.82,
        "HDFC": -0.76,
        "HDFC-bn": 0.84
    },
    {
        "BankNifty": -0.65,
        "Axis": -0.3,
        "Axis-bn": 0.46,
        "ICICI": -0.64,
        "ICICI-bn": 0.98,
        "HDFC": -0.23,
        "HDFC-bn": 0.35
    },
    {
        "BankNifty": -0.96,
        "Axis": 0.87,
        "Axis-bn": -0.91,
        "ICICI": -0.62,
        "ICICI-bn": 0.65,
        "HDFC": -0.65,
        "HDFC-bn": 0.68
    },
    {
        "BankNifty": 0.54,
        "Axis": 0.42,
        "Axis-bn": 0.78,
        "ICICI": 1.69,
        "ICICI-bn": 3.13,
        "HDFC": 0.47,
        "HDFC-bn": 0.87
    },
    {
        "BankNifty": 1.34,
        "Axis": 1.58,
        "Axis-bn": 1.18,
        "ICICI": 1.08,
        "ICICI-bn": 0.81,
        "HDFC": 1.37,
        "HDFC-bn": 1.02
    },
    {
        "BankNifty": -0.82,
        "Axis": -0.47,
        "Axis-bn": 0.57,
        "ICICI": -0.61,
        "ICICI-bn": 0.74,
        "HDFC": -0.89,
        "HDFC-bn": 1.09
    },
    {
        "BankNifty": -0.67,
        "Axis": -1.36,
        "Axis-bn": 2.03,
        "ICICI": 0,
        "ICICI-bn": 0,
        "HDFC": -0.75,
        "HDFC-bn": 1.12
    },
    {
        "BankNifty": -0.57,
        "Axis": 0.9,
        "Axis-bn": -1.58,
        "ICICI": 0.12,
        "ICICI-bn": -0.21,
        "HDFC": -0.51,
        "HDFC-bn": 0.89
    },
    {
        "BankNifty": 0.16,
        "Axis": 0.89,
        "Axis-bn": 5.56,
        "ICICI": 0.15,
        "ICICI-bn": 0.94,
        "HDFC": 0.22,
        "HDFC-bn": 1.38
    },
    {
        "BankNifty": 1.43,
        "Axis": 0.69,
        "Axis-bn": 0.48,
        "ICICI": 1.58,
        "ICICI-bn": 1.1,
        "HDFC": 1.46,
        "HDFC-bn": 1.02
    },
    {
        "BankNifty": -0.18,
        "Axis": 0.84,
        "Axis-bn": -4.67,
        "ICICI": -0.3,
        "ICICI-bn": 1.67,
        "HDFC": -0.56,
        "HDFC-bn": 3.11
    },
    {
        "BankNifty": 0.42,
        "Axis": 0.74,
        "Axis-bn": 1.76,
        "ICICI": 1.07,
        "ICICI-bn": 2.55,
        "HDFC": -0.01,
        "HDFC-bn": -0.02
    },
    {
        "BankNifty": -1.02,
        "Axis": -1.37,
        "Axis-bn": 1.34,
        "ICICI": -0.47,
        "ICICI-bn": 0.46,
        "HDFC": -0.91,
        "HDFC-bn": 0.89
    },
    {
        "BankNifty": 0.74,
        "Axis": 0.06,
        "Axis-bn": 0.08,
        "ICICI": 0.27,
        "ICICI-bn": 0.36,
        "HDFC": 1.28,
        "HDFC-bn": 1.73
    },
    {
        "BankNifty": 0.04,
        "Axis": -0.7,
        "Axis-bn": -17.5,
        "ICICI": -0.75,
        "ICICI-bn": -18.75,
        "HDFC": 0.45,
        "HDFC-bn": 11.25
    },
    {
        "BankNifty": 0.48,
        "Axis": 1.44,
        "Axis-bn": 3,
        "ICICI": 0.08,
        "ICICI-bn": 0.17,
        "HDFC": -0.5,
        "HDFC-bn": -1.04
    },
    {
        "BankNifty": -0.81,
        "Axis": -1.14,
        "Axis-bn": 1.41,
        "ICICI": -0.4,
        "ICICI-bn": 0.49,
        "HDFC": -0.94,
        "HDFC-bn": 1.16
    },
    {
        "BankNifty": 0.38,
        "Axis": 0.33,
        "Axis-bn": 0.87,
        "ICICI": 0.17,
        "ICICI-bn": 0.45,
        "HDFC": 0.25,
        "HDFC-bn": 0.66
    },
    {
        "BankNifty": -0.2,
        "Axis": -2.1,
        "Axis-bn": 10.5,
        "ICICI": -0.76,
        "ICICI-bn": 3.8,
        "HDFC": 0.26,
        "HDFC-bn": -1.3
    },
    {
        "BankNifty": 0.11,
        "Axis": 0.76,
        "Axis-bn": 6.91,
        "ICICI": -0.91,
        "ICICI-bn": -8.27,
        "HDFC": 0.38,
        "HDFC-bn": 3.45
    },
    {
        "BankNifty": 0.27,
        "Axis": -0.52,
        "Axis-bn": -1.93,
        "ICICI": -0.22,
        "ICICI-bn": -0.81,
        "HDFC": 1.19,
        "HDFC-bn": 4.41
    },
    {
        "BankNifty": 1.24,
        "Axis": -0.02,
        "Axis-bn": -0.02,
        "ICICI": -0.41,
        "ICICI-bn": -0.33,
        "HDFC": 2,
        "HDFC-bn": 1.61
    },
    {
        "BankNifty": 0.46,
        "Axis": 0.53,
        "Axis-bn": 1.15,
        "ICICI": 0.14,
        "ICICI-bn": 0.3,
        "HDFC": 0.65,
        "HDFC-bn": 1.41
    },
    {
        "BankNifty": 0.19,
        "Axis": 0.56,
        "Axis-bn": 2.95,
        "ICICI": 0.27,
        "ICICI-bn": 1.42,
        "HDFC": 0.36,
        "HDFC-bn": 1.89
    },
    {
        "BankNifty": 0.32,
        "Axis": 4.1,
        "Axis-bn": 12.81,
        "ICICI": 0.58,
        "ICICI-bn": 1.81,
        "HDFC": -0.13,
        "HDFC-bn": -0.41
    },
    {
        "BankNifty": -0.27,
        "Axis": -0.69,
        "Axis-bn": 2.56,
        "ICICI": -0.72,
        "ICICI-bn": 2.67,
        "HDFC": 0.52,
        "HDFC-bn": -1.93
    },
    {
        "BankNifty": 0.82,
        "Axis": 1.63,
        "Axis-bn": 1.99,
        "ICICI": 0.48,
        "ICICI-bn": 0.59,
        "HDFC": 0.62,
        "HDFC-bn": 0.76
    },
    {
        "BankNifty": -0.02,
        "Axis": -0.72,
        "Axis-bn": 36,
        "ICICI": 0.56,
        "ICICI-bn": -28,
        "HDFC": -0.58,
        "HDFC-bn": 29
    },
    {
        "BankNifty": -0.31,
        "Axis": -0.25,
        "Axis-bn": 0.81,
        "ICICI": -1.39,
        "ICICI-bn": 4.48,
        "HDFC": -0.05,
        "HDFC-bn": 0.16
    },
    {
        "BankNifty": -0.66,
        "Axis": -1.33,
        "Axis-bn": 2.02,
        "ICICI": -1.93,
        "ICICI-bn": 2.92,
        "HDFC": -0.53,
        "HDFC-bn": 0.8
    },
    {
        "BankNifty": -1.74,
        "Axis": -1.41,
        "Axis-bn": 0.81,
        "ICICI": -2.75,
        "ICICI-bn": 1.58,
        "HDFC": -0.82,
        "HDFC-bn": 0.47
    },
    {
        "BankNifty": -0.84,
        "Axis": -0.71,
        "Axis-bn": 0.85,
        "ICICI": 0.87,
        "ICICI-bn": -1.04,
        "HDFC": -1.33,
        "HDFC-bn": 1.58
    },
    {
        "BankNifty": 0.14,
        "Axis": 2.04,
        "Axis-bn": 14.57,
        "ICICI": 1.16,
        "ICICI-bn": 8.29,
        "HDFC": -0.41,
        "HDFC-bn": -2.93
    },
    {
        "BankNifty": -1.6,
        "Axis": -1.1,
        "Axis-bn": 0.69,
        "ICICI": -2.25,
        "ICICI-bn": 1.41,
        "HDFC": -0.88,
        "HDFC-bn": 0.55
    },
    {
        "BankNifty": 0.82,
        "Axis": 1.09,
        "Axis-bn": 1.33,
        "ICICI": -0.16,
        "ICICI-bn": -0.2,
        "HDFC": 1.06,
        "HDFC-bn": 1.29
    },
    {
        "BankNifty": 0.19,
        "Axis": -0.52,
        "Axis-bn": -2.74,
        "ICICI": 0.24,
        "ICICI-bn": 1.26,
        "HDFC": 0.58,
        "HDFC-bn": 3.05
    },
    {
        "BankNifty": 0.21,
        "Axis": 0.1,
        "Axis-bn": 0.48,
        "ICICI": 0.65,
        "ICICI-bn": 3.1,
        "HDFC": 0.17,
        "HDFC-bn": 0.81
    },
    {
        "BankNifty": 0.04,
        "Axis": -0.73,
        "Axis-bn": -18.25,
        "ICICI": -0.83,
        "ICICI-bn": -20.75,
        "HDFC": -0.66,
        "HDFC-bn": -16.5
    },
    {
        "BankNifty": -0.23,
        "Axis": -0.94,
        "Axis-bn": 4.09,
        "ICICI": -1.56,
        "ICICI-bn": 6.78,
        "HDFC": 0.09,
        "HDFC-bn": -0.39
    },
    {
        "BankNifty": 0.55,
        "Axis": 0.43,
        "Axis-bn": 0.78,
        "ICICI": 0.06,
        "ICICI-bn": 0.11,
        "HDFC": 0.08,
        "HDFC-bn": 0.15
    },
    {
        "BankNifty": 0.26,
        "Axis": 0.52,
        "Axis-bn": 2,
        "ICICI": -0.07,
        "ICICI-bn": -0.27,
        "HDFC": -0.26,
        "HDFC-bn": -1
    },
    {
        "BankNifty": 0.39,
        "Axis": 1.7,
        "Axis-bn": 4.36,
        "ICICI": -0.72,
        "ICICI-bn": -1.85,
        "HDFC": 0.4,
        "HDFC-bn": 1.03
    },
    {
        "BankNifty": -0.99,
        "Axis": 0.23,
        "Axis-bn": -0.23,
        "ICICI": -0.82,
        "ICICI-bn": 0.83,
        "HDFC": -0.7,
        "HDFC-bn": 0.71
    },
    {
        "BankNifty": 1.05,
        "Axis": 1.81,
        "Axis-bn": 1.72,
        "ICICI": -0.02,
        "ICICI-bn": -0.02,
        "HDFC": 1.6,
        "HDFC-bn": 1.52
    },
    {
        "BankNifty": 1.35,
        "Axis": 0.83,
        "Axis-bn": 0.61,
        "ICICI": 1.4,
        "ICICI-bn": 1.04,
        "HDFC": 1.76,
        "HDFC-bn": 1.3
    },
    {
        "BankNifty": 0.06,
        "Axis": -1.72,
        "Axis-bn": -28.67,
        "ICICI": 1.09,
        "ICICI-bn": 18.17,
        "HDFC": 0.34,
        "HDFC-bn": 5.67
    },
    {
        "BankNifty": -0.23,
        "Axis": -1.38,
        "Axis-bn": 6,
        "ICICI": -0.13,
        "ICICI-bn": 0.57,
        "HDFC": -0.32,
        "HDFC-bn": 1.39
    },
    {
        "BankNifty": -1.35,
        "Axis": -9.48,
        "Axis-bn": 7.02,
        "ICICI": -3.92,
        "ICICI-bn": 2.9,
        "HDFC": 0.93,
        "HDFC-bn": -0.69
    },
    {
        "BankNifty": -1.25,
        "Axis": -0.9,
        "Axis-bn": 0.72,
        "ICICI": -2.01,
        "ICICI-bn": 1.61,
        "HDFC": -1.08,
        "HDFC-bn": 0.86
    },
    {
        "BankNifty": 0.33,
        "Axis": -2.25,
        "Axis-bn": -6.82,
        "ICICI": 1.82,
        "ICICI-bn": 5.52,
        "HDFC": 0.81,
        "HDFC-bn": 2.45
    },
    {
        "BankNifty": 0.55,
        "Axis": 0.44,
        "Axis-bn": 0.8,
        "ICICI": 1.52,
        "ICICI-bn": 2.76,
        "HDFC": 0.2,
        "HDFC-bn": 0.36
    },
    {
        "BankNifty": 3.36,
        "Axis": 4.66,
        "Axis-bn": 1.39,
        "ICICI": 14.69,
        "ICICI-bn": 4.37,
        "HDFC": -3.86,
        "HDFC-bn": -1.15
    },
    {
        "BankNifty": -0.05,
        "Axis": 2.39,
        "Axis-bn": -47.8,
        "ICICI": -2.11,
        "ICICI-bn": 42.2,
        "HDFC": 0.01,
        "HDFC-bn": -0.2
    },
    {
        "BankNifty": -0.73,
        "Axis": 0.34,
        "Axis-bn": -0.47,
        "ICICI": 0.63,
        "ICICI-bn": -0.86,
        "HDFC": -0.24,
        "HDFC-bn": 0.33
    },
    {
        "BankNifty": 0.6,
        "Axis": -0.4,
        "Axis-bn": -0.67,
        "ICICI": -0.2,
        "ICICI-bn": -0.33,
        "HDFC": 1.34,
        "HDFC-bn": 2.23
    },
    {
        "BankNifty": 0.12,
        "Axis": 8.09,
        "Axis-bn": 67.42,
        "ICICI": -0.15,
        "ICICI-bn": -1.25,
        "HDFC": -0.36,
        "HDFC-bn": -3
    },
    {
        "BankNifty": 1.88,
        "Axis": 2.28,
        "Axis-bn": 1.21,
        "ICICI": 4.43,
        "ICICI-bn": 2.36,
        "HDFC": 0.7,
        "HDFC-bn": 0.37
    },
    {
        "BankNifty": -0.25,
        "Axis": -0.55,
        "Axis-bn": 2.2,
        "ICICI": 1.04,
        "ICICI-bn": -4.16,
        "HDFC": 0.05,
        "HDFC-bn": -0.2
    },
    {
        "BankNifty": 0.88,
        "Axis": 1.49,
        "Axis-bn": 1.69,
        "ICICI": -0.24,
        "ICICI-bn": -0.27,
        "HDFC": 0.47,
        "HDFC-bn": 0.53
    },
    {
        "BankNifty": -0.31,
        "Axis": -1.04,
        "Axis-bn": 3.35,
        "ICICI": 0.06,
        "ICICI-bn": -0.19,
        "HDFC": -0.11,
        "HDFC-bn": 0.35
    },
    {
        "BankNifty": -1.06,
        "Axis": -1.38,
        "Axis-bn": 1.3,
        "ICICI": -1.15,
        "ICICI-bn": 1.08,
        "HDFC": -0.27,
        "HDFC-bn": 0.25
    },
    {
        "BankNifty": -0.46,
        "Axis": 3.36,
        "Axis-bn": -7.3,
        "ICICI": -2.22,
        "ICICI-bn": 4.83,
        "HDFC": 0.12,
        "HDFC-bn": -0.26
    },
    {
        "BankNifty": 0.42,
        "Axis": -0.82,
        "Axis-bn": -1.95,
        "ICICI": 1.9,
        "ICICI-bn": 4.52,
        "HDFC": 0.1,
        "HDFC-bn": 0.24
    },
    {
        "BankNifty": 0.82,
        "Axis": 0.81,
        "Axis-bn": 0.99,
        "ICICI": 2.31,
        "ICICI-bn": 2.82,
        "HDFC": -0.32,
        "HDFC-bn": -0.39
    },
    {
        "BankNifty": -0.55,
        "Axis": -1.37,
        "Axis-bn": 2.49,
        "ICICI": -1.33,
        "ICICI-bn": 2.42,
        "HDFC": -0.46,
        "HDFC-bn": 0.84
    },
    {
        "BankNifty": -0.29,
        "Axis": 1.54,
        "Axis-bn": -5.31,
        "ICICI": -0.05,
        "ICICI-bn": 0.17,
        "HDFC": -0.62,
        "HDFC-bn": 2.14
    },
    {
        "BankNifty": -0.26,
        "Axis": -0.67,
        "Axis-bn": 2.58,
        "ICICI": 0.45,
        "ICICI-bn": -1.73,
        "HDFC": -0.12,
        "HDFC-bn": 0.46
    },
    {
        "BankNifty": 0.9,
        "Axis": 0.11,
        "Axis-bn": 0.12,
        "ICICI": 1.09,
        "ICICI-bn": 1.21,
        "HDFC": 0.41,
        "HDFC-bn": 0.46
    },
    {
        "BankNifty": 1.11,
        "Axis": -0.04,
        "Axis-bn": -0.04,
        "ICICI": 1.93,
        "ICICI-bn": 1.74,
        "HDFC": 0.99,
        "HDFC-bn": 0.89
    },
    {
        "BankNifty": 0.16,
        "Axis": 0.51,
        "Axis-bn": 3.19,
        "ICICI": -2.01,
        "ICICI-bn": -12.56,
        "HDFC": 0.69,
        "HDFC-bn": 4.31
    },
    {
        "BankNifty": -0.04,
        "Axis": 0.3,
        "Axis-bn": -7.5,
        "ICICI": 0.42,
        "ICICI-bn": -10.5,
        "HDFC": 0.44,
        "HDFC-bn": -11
    },
    {
        "BankNifty": 0.04,
        "Axis": -1.15,
        "Axis-bn": -28.75,
        "ICICI": -0.31,
        "ICICI-bn": -7.75,
        "HDFC": 0.49,
        "HDFC-bn": 12.25
    },
    {
        "BankNifty": -0.12,
        "Axis": 0.68,
        "Axis-bn": -5.67,
        "ICICI": 0.17,
        "ICICI-bn": -1.42,
        "HDFC": -0.67,
        "HDFC-bn": 5.58
    },
    {
        "BankNifty": 0.17,
        "Axis": 0.25,
        "Axis-bn": 1.47,
        "ICICI": -0.7,
        "ICICI-bn": -4.12,
        "HDFC": 0.46,
        "HDFC-bn": 2.71
    },
    {
        "BankNifty": 0.44,
        "Axis": 2.55,
        "Axis-bn": 5.8,
        "ICICI": -0.06,
        "ICICI-bn": -0.14,
        "HDFC": 0.33,
        "HDFC-bn": 0.75
    },
    {
        "BankNifty": -0.18,
        "Axis": 0.56,
        "Axis-bn": -3.11,
        "ICICI": -1.2,
        "ICICI-bn": 6.67,
        "HDFC": 0.42,
        "HDFC-bn": -2.33
    },
    {
        "BankNifty": -0.2,
        "Axis": -2.32,
        "Axis-bn": 11.6,
        "ICICI": 0.53,
        "ICICI-bn": -2.65,
        "HDFC": 0.43,
        "HDFC-bn": -2.15
    },
    {
        "BankNifty": -1.8,
        "Axis": -2.57,
        "Axis-bn": 1.43,
        "ICICI": -2.32,
        "ICICI-bn": 1.29,
        "HDFC": -1.05,
        "HDFC-bn": 0.58
    },
    {
        "BankNifty": -0.55,
        "Axis": -0.29,
        "Axis-bn": 0.53,
        "ICICI": -0.75,
        "ICICI-bn": 1.36,
        "HDFC": -0.3,
        "HDFC-bn": 0.55
    },
    {
        "BankNifty": -0.46,
        "Axis": 0.21,
        "Axis-bn": -0.46,
        "ICICI": -0.33,
        "ICICI-bn": 0.72,
        "HDFC": -0.76,
        "HDFC-bn": 1.65
    },
    {
        "BankNifty": 0.2,
        "Axis": -0.34,
        "Axis-bn": -1.7,
        "ICICI": 0.33,
        "ICICI-bn": 1.65,
        "HDFC": -0.74,
        "HDFC-bn": -3.7
    },
    {
        "BankNifty": -1.09,
        "Axis": -0.5,
        "Axis-bn": 0.46,
        "ICICI": -1.88,
        "ICICI-bn": 1.72,
        "HDFC": -0.94,
        "HDFC-bn": 0.86
    },
    {
        "BankNifty": 1.89,
        "Axis": 0.67,
        "Axis-bn": 0.35,
        "ICICI": 2.1,
        "ICICI-bn": 1.11,
        "HDFC": 0.35,
        "HDFC-bn": 0.19
    },
    {
        "BankNifty": 0.33,
        "Axis": 1.58,
        "Axis-bn": 4.79,
        "ICICI": 1.62,
        "ICICI-bn": 4.91,
        "HDFC": 1.7,
        "HDFC-bn": 5.15
    },
    {
        "BankNifty": -1.1,
        "Axis": 0.48,
        "Axis-bn": -0.44,
        "ICICI": 0.23,
        "ICICI-bn": -0.21,
        "HDFC": 0.33,
        "HDFC-bn": -0.3
    },
    {
        "BankNifty": -0.5,
        "Axis": -1.19,
        "Axis-bn": 2.38,
        "ICICI": -1.24,
        "ICICI-bn": 2.48,
        "HDFC": -1.44,
        "HDFC-bn": 2.88
    },
    {
        "BankNifty": 0.67,
        "Axis": -0.53,
        "Axis-bn": -0.79,
        "ICICI": -1.51,
        "ICICI-bn": -2.25,
        "HDFC": 0.08,
        "HDFC-bn": 0.12
    },
    {
        "BankNifty": 1.08,
        "Axis": 1.06,
        "Axis-bn": 0.98,
        "ICICI": 0.46,
        "ICICI-bn": 0.43,
        "HDFC": 0.92,
        "HDFC-bn": 0.85
    },
    {
        "BankNifty": 0.61,
        "Axis": 1.2,
        "Axis-bn": 1.97,
        "ICICI": -0.39,
        "ICICI-bn": -0.64,
        "HDFC": 1.93,
        "HDFC-bn": 3.16
    },
    {
        "BankNifty": 0.48,
        "Axis": 0.13,
        "Axis-bn": 0.27,
        "ICICI": 1.9,
        "ICICI-bn": 3.96,
        "HDFC": 0.29,
        "HDFC-bn": 0.6
    },
    {
        "BankNifty": -0.48,
        "Axis": 0.91,
        "Axis-bn": -1.9,
        "ICICI": 1.55,
        "ICICI-bn": -3.23,
        "HDFC": 0.3,
        "HDFC-bn": -0.63
    },
    {
        "BankNifty": -0.15,
        "Axis": 0.15,
        "Axis-bn": -1,
        "ICICI": 0.67,
        "ICICI-bn": -4.47,
        "HDFC": -0.87,
        "HDFC-bn": 5.8
    },
    {
        "BankNifty": 0.37,
        "Axis": -1,
        "Axis-bn": -2.7,
        "ICICI": -0.11,
        "ICICI-bn": -0.3,
        "HDFC": 0.01,
        "HDFC-bn": 0.03
    },
    {
        "BankNifty": 0.1,
        "Axis": 0.85,
        "Axis-bn": 8.5,
        "ICICI": 0.36,
        "ICICI-bn": 3.6,
        "HDFC": 0.45,
        "HDFC-bn": 4.5
    },
    {
        "BankNifty": -0.7,
        "Axis": 0.25,
        "Axis-bn": -0.36,
        "ICICI": 0.49,
        "ICICI-bn": -0.7,
        "HDFC": -0.44,
        "HDFC-bn": 0.63
    },
    {
        "BankNifty": -0.02,
        "Axis": -0.07,
        "Axis-bn": 3.5,
        "ICICI": -1.68,
        "ICICI-bn": 84,
        "HDFC": -0.62,
        "HDFC-bn": 31
    },
    {
        "BankNifty": 0.19,
        "Axis": -1.4,
        "Axis-bn": -7.37,
        "ICICI": 0.8,
        "ICICI-bn": 4.21,
        "HDFC": 1.15,
        "HDFC-bn": 6.05
    }
];

var posnegData = inputData.map((d) => {

    // Make input and output array

    return {
        input: [
            // +(d["BankNifty"] > 0),
            +(d["Axis"] > 0),
            +(d["Axis-bn"] > 0),
            +(d["ICICI"] > 0),
            +(d["ICICI-bn"] > 0),
            +(d["HDFC"] > 0),
            +(d["HDFC-bn"] > 0)
        ],
        output: [
            +(d["BankNifty"] > 0),
            // +(d["Axis"] > 0),
            // +(d["ICICI"] > 0),
            // +(d["HDFC"] > 0)
        ]
    };
});

/**
 * Get Percentage data in quantified format
 */

function getQuantArr(val) {
    //// categorize value in < 3, < 6, < 10, + 1 extra bit for pos or neg
    var isNeg = (val < 0);
    var absVal = Math.abs(val);

    var outputBits = [];

    outputBits.push(isNeg ? 0 : 1);

    if(absVal < 3) {
        outputBits.push(0, 0 , 1);
    } else if(absVal < 6) {
        outputBits.push(0, 1 , 0);
    } else {
        outputBits.push(1, 0 , 0);
    }
    return outputBits;
}

function getNumberFromQuant(arrBits) {
    var mapRange = {
      "001": 0.3,
      "010": 0.6,
      "100": 1.0
    };
    return (arrBits[0] ? 1: -1) * mapRange[(arrBits.slice(1, 3).join(""))];
}

var percData = inputData.map((d) => {

    // Get max of current row
    var maxOfRow = Math.max.apply(null, [d["Axis"],d["ICICI"],d["HDFC"],d["BankNifty"]]);

    console.log('Max value = ', maxOfRow);
    // Get converted = value/max

    var inputArr = [], outputArr = [];
    inputArr = inputArr.concat(getQuantArr(d["Axis"] / maxOfRow));
    inputArr = inputArr.concat(getQuantArr(d["ICICI"] / maxOfRow));
    inputArr = inputArr.concat(getQuantArr(d["HDFC"] / maxOfRow));

    outputArr = outputArr.concat(getQuantArr(d["BankNifty"] / maxOfRow));

    return {
        input: inputArr,
        output: outputArr
    };
});

// console.log('Take this data', posnegData);

module.exports = {
    raw: inputData,
    data : posnegData,
    percData: percData,
    getQuantArr: getQuantArr,
    getNumberFromQuant: getNumberFromQuant
};