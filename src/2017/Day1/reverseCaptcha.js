function reverseCaptcha(input, halfway = false) {
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        let pointer = halfway ? (i + input.length / 2) % input.length : (i + 1) % input.length
        if (input[i] == input[pointer]) sum += parseInt(input[i])
    }
    return sum
}
export default reverseCaptcha