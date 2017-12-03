function rowDivisible(row) {
    let foundVal
    row.forEach((num, index) => {
        for (let i = 0; i < row.length; i++) {
            if (i != index && num % row[i] == 0) {
                foundVal = num / row[i]
                break
            }
        }
    })
    return foundVal
}

function rowDifference(row) {
    let smallest = 99999
    let largest  = 0
    row.forEach(num => {
        if (num > largest) largest = num
        if (num < smallest) smallest = num
    })
    return largest - smallest
}

function checksum(input, part2 = false) {
    let sum = 0
    input.forEach(row => {
        row = row.split('\t').map(a => parseInt(a))
        sum += part2 ? rowDivisible(row) : rowDifference(row)
    })
    return sum
}

export default checksum