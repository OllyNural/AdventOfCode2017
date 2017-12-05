let jump = function(input, expanded = false) {
    input = input.map(a => a = parseInt(a))
    let i = 0
    let oldI
    let steps = 0
    while (input[i] != undefined) {
        oldI = i
        i += input[i]
        if (expanded && input[oldI] > 2) input[oldI]--
        else input[oldI]++
        steps++
    }
    return steps
}

export default jump