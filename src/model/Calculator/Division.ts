import { ICalculable } from './ICalculable'

class Division implements ICalculable {
    /**
     * Return division of numbers
     * @param {number} number1
     * @param {number} number2
     * @return {number} Division
     */
    calc (number1: number, number2: number): number {
        return number1 / number2
    }
}

export default new Division()