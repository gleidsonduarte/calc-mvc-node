import { ICalculable } from './ICalculable'

class Multiplication implements ICalculable {
    /**
     * Return multiplication of numbers
     * @param {number} number1
     * @param {number} number2
     * @return {number} Multiplication
     */
    public calc(number1: number, number2: number): number {
        return number1 * number2
    }
}

export default new Multiplication()