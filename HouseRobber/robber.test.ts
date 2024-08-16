import { rob } from './robber';

describe('rob function', () => {
    it('should return 0 when input is empty', () => {
        const houses: number[] = [];
        const expected = 0;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 0 when input is [0]', () => {
        const houses: number[] = [0];
        const expected = 0;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 1 when input is [1]', () => {
        const houses: number[] = [1];
        const expected = 1;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 2 when input is [1, 2]', () => {
        const houses: number[] = [1, 2];
        const expected = 2;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 4 when input is [1, 2, 3]', () => {
        const houses: number[] = [1, 2, 3];
        const expected = 4;
        const result = rob(houses);
        expect(result).toBe(expected);
    })
    
    it('should return 4 when input is [2, 1, 1, 2]', () => {
        const houses: number[] = [2, 1, 1, 2];
        const expected = 4;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 4 when input is [2, 3, 2]', () => {
        const houses: number[] = [2, 3, 2];
        const expected = 4;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 12 when input is [2, 7, 9, 3, 1]', () => {
        const houses: number[] = [2, 7, 9, 3, 1];
        const expected = 12;
        const result = rob(houses);
        expect(result).toBe(expected);
    })

    it('should return 10 when input is [2, 5, 3, 5, 1]', () => {
        const houses: number[] = [2, 5, 3, 5, 1]
        const expected = 10;
        const result = rob(houses);
        expect(result).toBe(expected);
    })
})
