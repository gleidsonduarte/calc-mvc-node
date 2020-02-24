import { assert } from 'chai'
import sum from '../../models/Calculator/Sum'
import Subtraction from '../../models/Calculator/Subtraction'
import multiplication from '../../models/Calculator/Multiplication'
import division from '../../models/Calculator/Division'

describe('Test calculator functions', () => {
    it('Sum of two values', () => {
        assert.equal(sum.calc(3, 4), 7)
    })

    it('Subtraction of two values', () => {
        assert.equal(Subtraction.calc(10, 6), 4)
    })

    it('Multiplication of two values', () => {
        assert.equal(multiplication.calc(15, 2), 30)
    })

    it('Division of two values', () => {
        assert.equal(division.calc(5, 2), 2.5)
    })
})