import 'mocha'
import { assert } from 'chai'
import sum from '../../model/Calculator/Sum'
import Subtraction from '../../model/Calculator/Subtraction'
import multiplication from '../../model/Calculator/Multiplication'
import division from '../../model/Calculator/Division'

describe('Calculator', () => {
    it('Sum two values', () => {
        assert.equal(sum.calc(3, 4), 7)
    })

    it('Subtraction two values', () => {
        assert.equal(Subtraction.calc(10, 6), 4)
    })

    it('Multiplication two values', () => {
        assert.equal(multiplication.calc(15, 2), 30)
    })

    it('Division two values', () => {
        assert.equal(division.calc(5, 2), 2.5)
    })
})