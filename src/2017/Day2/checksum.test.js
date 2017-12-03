import checksum from './checksum'
import readFileArray from '../../util/readFile'

describe('Part 1 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input', () => {
        const input = readFileArray('../2017/Day2/testInput-part1.txt')
        expect(checksum(input)).toBe(18)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day2/input.txt')
        expect(checksum(input)).toBe(45972)
    })
})

describe('Part 2 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input', () => {
        const input = readFileArray('../2017/Day2/testInput-part2.txt')
        expect(checksum(input, true)).toBe(9)
    })

    it('Should give the correct result for my input', () => {
        const input = readFileArray('../2017/Day2/input.txt')
        expect(checksum(input, true)).toBe(326)
    })
})