import memory from './memory'
import util from '../../util/readFile'
const readFileArray = util.readFileArray

describe('Part 1 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input 1', () => {
        const input = readFileArray('../2017/Day6/testInput-part1.txt')
        expect(memory(input)).toBe(5)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day6/input.txt')
        expect(memory(input)).toBe(5042)
    })
})

describe('Part 2 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input 1', () => {
        const input = readFileArray('../2017/Day6/testInput-part1.txt')
        expect(memory(input, true)).toBe(4)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day6/input.txt')
        expect(memory(input, true)).toBe(1086)
    })
})