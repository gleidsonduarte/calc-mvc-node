import { Response } from 'express'

export class RouterParams {
    /**
     * Validate router parameters
     * @param {Array<number>} numbers
     * @param {Response} response
     * @return {Response} If the parameters are not valid, it returns status code 400 "BAD_REQUEST".
     */
    static isValid(numbers: Array<number>, response: Response) {
        for (const number of numbers) {
            if (number == null || typeof number !== "number") {
                response.status(400).send(JSON.stringify({ result : "BAD_REQUEST" }))
            }
        }
    }
}