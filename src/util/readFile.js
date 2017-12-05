const fs = require('fs')
const path = require('path')

function readFileArrayString(localPath) {
    return fs.readFileSync(path.join(__dirname, localPath), 'utf8').toString().split('\n')
}

function readFileArray(localPath) {
    return fs.readFileSync(path.join(__dirname, localPath), 'utf8').split('\n')
}

export default {
    readFileArray: readFileArray,
    readFileArrayString: readFileArrayString
}