import { assert } from 'chai'
import 'mocha'

import sum from '../../model/Sum'

describe('Calculator', () => {
    it('Sum values', () => {
        assert.equal(sum.calc([1, 2, 3, 4]), 10)
    })
})