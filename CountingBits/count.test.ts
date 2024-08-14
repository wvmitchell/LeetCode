import { countBits } from './count'

describe('counting bits', () => {
    it('should return the array of bits based on indexes of an array length 2', () => {
        const length = 1
        const result = countBits(length)
        expect(result).toEqual([0, 1])
    })

    it('should return the array of bits based on indexes of an array length 3', () => {
        const length = 2
        const result = countBits(length)
        expect(result).toEqual([0, 1, 1])
    })

    it('should return the array of bits based on indexes of an array length 6', () => {
        const length = 5
        const result = countBits(length)
        expect(result).toEqual([0, 1, 1, 2, 1, 2])
    })

    it('should return the array of bits based on indexes of an array length 7', () => {
        const length = 6
        const result = countBits(length)
        expect(result).toEqual([0, 1, 1, 2, 1, 2, 2])
    })
})
