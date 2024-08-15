function canAttendMeetings(meetings: number[][]): boolean {
    const sortedMeetings = meetings.sort((a, b) => {
        return a[0] - b[0]
    })

    return sortedMeetings.every((meeting, idx) => {
        if (idx < sortedMeetings.length - 1) {
            return meeting[1] < sortedMeetings[idx+1][0]
        }
        return true
    })
}

export { canAttendMeetings }
