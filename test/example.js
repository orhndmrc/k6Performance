const { expect } = require("chai")
const { eq } = require("cypress/types/lodash")

describe('Code Practicing', function () {
    it('adding two numbers', function () {
        let x = 5
        let y = 10

        console.log(x + y)
    })
    it('adding ', function () {
        let x = 5
        let y = 10

      expect(x).eq(y)
    })
})