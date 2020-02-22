import { Calculator } from './Calculator'

class Sum extends Calculator {
    /**
     * Return sum of numbers
     * @param {number} number1
     * @param {number} number2
     * @return {number} Sum
     */
    public calc(number1: number, number2: number): number {
        return number1 + number2
    }
}

export default new Sum()