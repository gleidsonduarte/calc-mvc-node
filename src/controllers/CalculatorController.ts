import { Request, Response } from 'express'
import sum from '../models/Calculator/Sum'
import subtraction from '../models/Calculator/Subtraction'
import Multiplication from '../models/Calculator/Multiplication'
import Division from '../models/Calculator/Division'
import { RouterParams } from '../models/RouterParams'

class CalculatorController {
    sun(request: Request, response: Response) {
        const { number1, number2 } = request.body

        RouterParams.isValid([number1, number2], response)
    
        const value = sum.calc(number1, number2)
    
        response.status(200).send(JSON.stringify({ result : value }))
    }

    subtraction(request: Request, response: Response) {
        const { number1, number2 } = request.body

        RouterParams.isValid([number1, number2], response)
    
        let value = subtraction.calc(number1, number2)
        
        response.status(200).send(JSON.stringify({ result : value }))
    }

    multiplication(request: Request, response: Response) {
        const { number1, number2 } = request.body

        RouterParams.isValid([number1, number2], response)
    
        let value = Multiplication.calc(number1, number2)
        
        response.status(200).send(JSON.stringify({ result : value }))
    }

    division(request: Request, response: Response) {
        const { number1, number2 } = request.body

        RouterParams.isValid([number1, number2], response)
    
        let value = Division.calc(number1, number2)
        
        response.status(200).send(JSON.stringify({ result : value }))
    }
}

export default new CalculatorController()