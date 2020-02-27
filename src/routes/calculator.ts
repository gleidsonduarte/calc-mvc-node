import CalculatorController from '../controllers/CalculatorController'

const CalculatorRoute = require('express').Router()

CalculatorRoute.post('/calculator/sum', CalculatorController.sum)
CalculatorRoute.post('/calculator/subtraction', CalculatorController.subtraction)
CalculatorRoute.post('/calculator/multiplication', CalculatorController.multiplication)
CalculatorRoute.post('/calculator/division', CalculatorController.division)

export default CalculatorRoute