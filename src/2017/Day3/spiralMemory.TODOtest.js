import spiralMemory from './spiralMemory'

describe('Part 1 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input', () => {
        const input = 1
        expect(spiralMemory(input)).toBe(0)
    })

    it('Should give the correct result for test input', () => {
        const input = 12
        expect(spiralMemory(input)).toBe(3)
    })

    it('Should give the correct result for test input', () => {
        const input = 23
        expect(spiralMemory(input)).toBe(2)
    })

    it('Should give the correct result for test input', () => {
        const input = 1024
        expect(spiralMemory(input)).toBe(31)
    })

    fit('Should give the correct result for my input', () => {
        const input = 325489
        expect(spiralMemory(input)).toBe(1)
    })
})

describe('Part 2 - Should return the correct result for given inputs', () => {
    it('Should give the correct result for test input', () => {
        const input = 5
        expect(spiralMemory(input, true)).toBe(9)
    })

    it('Should give the correct result for my input', () => {
        const input = 325489
        expect(spiralMemory(input, true)).toBe(326)
    })
})