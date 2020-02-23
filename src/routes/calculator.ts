import { Router, Request, Response } from 'express'
import sum from '../model/Sum'
import subtraction from '../model/Subtraction'
import Multiplication from '../model/Multiplication'

const CalculatorRoute = Router()

CalculatorRoute.post('/calculator/sum', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    const result = sum.calc(number1, number2)

    response.status(200).send(JSON.stringify({ value:result }))
})

CalculatorRoute.post('/calculator/subtraction', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    let result = subtraction.calc(number1, number2)
    
    response.status(200).send(JSON.stringify({ value:result }))
})

CalculatorRoute.post('/calculator/multiplication', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    let result = Multiplication.calc(number1, number2)

    response.status(200).send(JSON.stringify({ value:result }))
})

export default CalculatorRoute