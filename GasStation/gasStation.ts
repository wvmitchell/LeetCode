function canCompleteCircuit(gas: number[], cost: number[]): number {
    let start = 0
    let tank = 0
    let distance = 0

    while (distance < gas.length && start < gas.length) {
        let end = (start + distance) % gas.length
        tank += gas[end]

        if(tank >= cost[end]) {
            tank -= cost[end]
            distance += 1
        } else {
            tank = 0
            start = start + distance + 1
            distance = 0
        }
    }

    return distance == gas.length ? start : -1
}

export { canCompleteCircuit }
