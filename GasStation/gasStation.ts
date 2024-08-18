function canCompleteCircuit(gas: number[], cost: number[]): number {
    // this can be represented as a sliding window
    // problem, with a variable length window
    // start with two pointers, begin and end, both pointed at
    // the first index
    // as well as a variable for the tank, set to the amount at
    // the first index
    //
    // while the end has not come back around to the beginning
    // and the start has not looped back to the beginning
    // if the tank has enough to get to the next station
    // subtract the cost at the end pointer from the tank
    // move the end pointer forward
    // add the gas at the station to the tank
    // otherwise (this path is no good)
    // add to the tank the cost of moving from the start
    // move the start forward (the window shrinks)
    //
    // if start index was in bounds, that's the answer
    // otherwise, return -1
    return -1
}

export { canCompleteCircuit }
