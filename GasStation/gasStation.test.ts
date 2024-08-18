import { canCompleteCircuit } from './gasStation';

describe('canCompleteCircuit', () => {
    it('returns index 3 of the correct starting gas station', () => {
        const gas = [1, 2, 3, 4, 5];
        const cost = [3, 4, 5, 1, 2];
        expect(canCompleteCircuit(gas, cost)).toBe(3);
    })

    it('returns -1 when a circuit cannot be completed', () => {
        const gas = [2, 3, 4];
        const cost = [3, 4, 3];
        expect(canCompleteCircuit(gas, cost)).toBe(-1);
    })

    it('should return 4', () => {
        const gas = [5,1,2,3,4]
        const cost = [4,4,1,5,1]
        expect(canCompleteCircuit(gas, cost)).toBe(4)
    })

    it('should return -1', () => {
        const gas = [4,5,2,6,5,3]
        const cost = [3,2,7,3,2,9]
        expect(canCompleteCircuit(gas, cost)).toBe(-1)
    })
})
