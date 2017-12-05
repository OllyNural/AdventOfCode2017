let passphrase = function(input, isAnagram = false) {
    let sum = 0
    input.forEach(row => {
        row = row.split(' ')
        let toAdd = isAnagram ? sumAnagram(row) : sumRepeat(row)
        if (toAdd) sum++
    })
    return sum
}

let sumRepeat = function(row) {
    return (!row.some(phrase => row.filter(word => word == phrase).length > 1))
}

let sumAnagram = function(row) {
    return sumRepeat(row.map(word => word.split('').sort().join('')))
}

export default passphrase

// FAR more efficient but slightly ugly

        // row = row.split(' ')
        // let holdingArray = []
        // let hasFound
        // row.forEach(phrase => {
        //     if (!holdingArray.includes(phrase)) {
        //         holdingArray.push(phrase)
        //     } else {
        //         hasFound = true
        //     }
        // })
        // if (!hasFound) sum++