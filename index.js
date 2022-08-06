const fs = require('fs');
const path = require('path');

//__dirname will return current folder path where as files will be added to path
const dirpath = path.join(__dirname, 'files');

//Create Files
for (i = 1; i <= 5; i++){
    fs.writeFileSync(dirpath + '/file' + i + '.txt', "This is simple text file to understand the use of path module");
}

//ReadFiles List
fs.readdir(dirpath, (error, files) => {
    files.forEach((item) => {
        console.log(item);  
    })
});

//ReadFile List
fs.readdir(dirpath, (error, datas) => {
    console.log(datas);
});