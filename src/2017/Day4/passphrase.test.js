import passphrase from './passphrase'
import util from '../../util/readFile'
const readFileArrayString = util.readFileArrayString

describe('Part 1 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input 1', () => {
        const input = ["aa bb cc dd ee"]
        expect(passphrase(input)).toBe(1)
    })

    it('Should give the correct result for test input 2', () => {
        const input = ["aa bb cc dd aa"]
        expect(passphrase(input)).toBe(0)
    })

    it('Should give the correct result for test input 3', () => {
        const input = ["aa bb cc dd aaa"]
        expect(passphrase(input)).toBe(1)
    })
    it('Should give the correct result for my input', () => {
        const input = readFileArrayString('../2017/Day4/input.txt')
        expect(passphrase(input)).toBe(477)
    })
})

describe('Part 2 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input', () => {
        const input = ["abcde fghij"]
        expect(passphrase(input, true)).toBe(1)
    })

    it('Should give the correct result for test input', () => {
        const input = ["abcde xyz ecdab"]
        expect(passphrase(input, true)).toBe(0)
    })

    it('Should give the correct result for test input', () => {
        const input = ["a ab abc abd abf abj"]
        expect(passphrase(input, true)).toBe(1)
    })

    it('Should give the correct result for test input', () => {
        const input = ["iiii oiii ooii oooi oooo"]
        expect(passphrase(input, true)).toBe(1)
    })

    it('Should give the correct result for test input', () => {
        const input = ["oiii ioii iioi iiio"]
        expect(passphrase(input, true)).toBe(0)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArrayString('../2017/Day4/input.txt')
        expect(passphrase(input, true)).toBe(167)
    })
})