// Every odd square is another level
// Starting in the bottom right corner of the previous square 
// So we work out which square numbers our number lies inbetween
// find the difference from our number and the smaller of the square nunbers

// Since we always start in the bottom right, we should be able to use that distance from bottom right
// Going round the square to find the co-ords of our number
// And then just find manhatten distance
function spiralMemory(input) {
    let sqroot = Math.sqrt(input)
    let lowSq = Math.floor(sqroot)
    let highSq = Math.ceil(sqroot)

    

    let numOfRings = Math.ceil(lowSq / 2)
    let diffOfNums = input - Math.pow(lowSq, 2)
    let numOfSidesRoundSquare = Math.floor(diffOfNums / lowSq)
    let remainderOfPlacesRound = diffOfNums % lowSq
    console.log('Our number is between the squares of: ', lowSq, ' and ', highSq)
    console.log('This means the number of rings our square has is ', numOfRings)
    console.log('Our number is ', diffOfNums, ' round the squares next ring')
    console.log('Our number is on the ', numOfSidesRoundSquare, ' ring')
    console.log('Our number is the ', remainderOfPlacesRound, ' number round that side')

    // Find the manhatten distance from what we have:
    // The side, diamater of square, how far round that side it is
}

export default spiralMemory