import { assert } from 'chai'
import 'mocha'

import sum from '../../model/Sum'
import Subtraction from '../../model/Subtraction'

describe('Calculator', () => {
    it('Sum values', () => {
        assert.equal(sum.calc(3, 4), 7)
    })

    it('Subtraction values', () => {
        assert.equal(Subtraction.calc(10, 6), 4)
    })
})