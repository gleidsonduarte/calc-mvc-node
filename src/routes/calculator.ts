import { Router, Request, Response } from 'express'
import sum from '../model/Calculator/Sum'
import subtraction from '../model/Calculator/Subtraction'
import multiplication from '../model/Calculator/Multiplication'
import division from '../model/Calculator/Division'
import { RouterParams } from '../model/RouterParams'

const CalculatorRoute = Router()

CalculatorRoute.post('/calculator/sum', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    RouterParams.isValid([number1, number2], response)

    const value = sum.calc(number1, number2)

    response.status(200).send(JSON.stringify({ result : value }))
})

CalculatorRoute.post('/calculator/subtraction', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    RouterParams.isValid([number1, number2], response)

    let value = subtraction.calc(number1, number2)
    
    response.status(200).send(JSON.stringify({ result : value }))
})

CalculatorRoute.post('/calculator/multiplication', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    RouterParams.isValid([number1, number2], response)

    let value = multiplication.calc(number1, number2)

    response.status(200).send(JSON.stringify({ result : value }))
})

CalculatorRoute.post('/calculator/division', (request: Request, response: Response) => {
    const { number1, number2 } = request.body

    RouterParams.isValid([number1, number2], response)

    let value = division.calc(number1, number2)

    response.status(200).send(JSON.stringify({ result : value }))
})

export default CalculatorRoute