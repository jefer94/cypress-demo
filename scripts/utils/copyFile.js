const fs = require('fs');

module.exports = function copyFile(file1, file2) {
    return new Promise((resolve) => {
        fs.copyFile(file1, file2, () => resolve())
    })

}
