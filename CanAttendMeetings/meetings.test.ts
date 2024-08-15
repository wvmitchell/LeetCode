import { canAttendMeetings } from './meetings';

describe('canAttendMeetings', () => {
    it('should return true if there is only one meeting', () => {
        const meetings = [[0, 1]];
        expect(canAttendMeetings(meetings)).toBe(true);
    })

    it('should return true if there are no overlapping meetings', () => {
        const meetings = [[0, 1], [2, 3]];
        expect(canAttendMeetings(meetings)).toBe(true);
    })

    it('should return false if there are overlapping meetings', () => {
        const meetings = [[0, 1], [0, 2]];
        expect(canAttendMeetings(meetings)).toBe(false);
    })

    it('should return true if there are no overlapping meetings regardless of order', () => {
        const meetings = [[2, 3], [0, 1]];
        expect(canAttendMeetings(meetings)).toBe(true);
    })

    it('should return false if there are overlapping meetings regardless of order', () => {
        const meetings = [[0, 2], [0, 1]];
        expect(canAttendMeetings(meetings)).toBe(false);
    })
})
