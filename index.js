const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'files');
for (i = 1; i <= 5; i++){
    fs.writeFileSync(dirpath + '/file' + i + '.txt', "This is simple text file to understand the use of path module");
}