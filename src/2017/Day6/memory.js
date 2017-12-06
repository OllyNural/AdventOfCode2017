let memory = function(input, loopSize = false) {
    input = input[0].split('\t').map(a => parseInt(a))
    let history = []
    while (!history.includes(JSON.stringify(input))) {
        history.push(JSON.stringify(input))
        let indexOfLargest = input.reduce((max, x, i, arr) => x > arr[max] ? i : max, 0)
        let largestNumber = input[indexOfLargest]
        input[indexOfLargest] = 0
        for (let i = 1; i < largestNumber + 1; i++) {
            input[(indexOfLargest + i) % input.length] += 1
        }
    }
    // Part 2
    if (loopSize) return history.length - history.findIndex(el => el == JSON.stringify(input))
    return history.length
}


export default memory