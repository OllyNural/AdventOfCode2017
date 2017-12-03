const fs = require('fs')
const path = require('path')

function readFileArray(localPath) {
    return fs.readFileSync(path.join(__dirname, localPath), 'utf8').toString().split('\n')
}

export default readFileArray