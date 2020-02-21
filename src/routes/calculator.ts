const CalculatorRoute = require('express').Router()

import sum from '../model/Sum'

CalculatorRoute.get('/calculator/sum', sum.calc)

export default CalculatorRoute