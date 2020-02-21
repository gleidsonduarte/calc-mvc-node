import { Calculator } from './Calculator'

class Sum extends Calculator {
    public calc(numbers: Array<number>): number {
        let total = 0

        for (const number of numbers) {
            total += number
        }

        return total
    }
}

export default new Sum()