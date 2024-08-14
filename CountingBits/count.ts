function countBits(n) {
    const result = [0]
    for (var i = 1; i <= n; i++) {
        // even numbers always end in 0 binary
        // odd numbers always end in 1 binary
        // if i is even, the number of bits is result[i/2]
        // if i is odd, the number of bits result[(i-1)/2] + 1
        // push the number into the results array
        if (i % 2 === 0) {
            result.push(result[i/2])
        } else {
            result.push(result[(i-1)/2] + 1)
        }
    }
    return result
}

export { countBits }
