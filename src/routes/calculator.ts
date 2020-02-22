import { Router, Request, Response } from 'express'
import Sum from '../model/Sum'
//import subtraction from '../model/Subtraction'

const CalculatorRoute = Router()

CalculatorRoute.post('/calculator/sum', function(request: Request, response: Response) {
    const { number1, number2 } = request.body

    const result = Sum.calc(number1, number2)

    response.status(200).send((result).toString())
})

//CalculatorRoute.get('/calculator/subtraction', subtraction.calc)

export default CalculatorRoute