import jump from './jump'
import util from '../../util/readFile'
const readFileArray = util.readFileArray

describe('Part 1 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input 1', () => {
        const input = readFileArray('../2017/Day5/testInput-part1.txt')
        expect(jump(input)).toBe(5)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day5/input.txt')
        expect(jump(input)).toBe(364539)
    })
})

describe('Part 2 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input 1', () => {
        const input = readFileArray('../2017/Day5/testInput-part1.txt')
        expect(jump(input, true)).toBe(10)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day5/input.txt')
        expect(jump(input, true)).toBe(364539)
    })
})