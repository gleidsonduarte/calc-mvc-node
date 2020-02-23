import { assert } from 'chai'
import 'mocha'

import sum from '../../model/Sum'
import Subtraction from '../../model/Subtraction'
import multiplication from '../../model/Multiplication'

describe('Calculator', () => {
    it('Sum values', () => {
        assert.equal(sum.calc(3, 4), 7)
    })

    it('Subtraction values', () => {
        assert.equal(Subtraction.calc(10, 6), 4)
    })

    it('Multiplication values', () => {
        assert.equal(multiplication.calc(15, 2), 30)
    })
})