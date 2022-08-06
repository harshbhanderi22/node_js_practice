const fs = require('fs');
const path = require('path');

//Path to crud Function
const dirPath = path.join(__dirname, 'crud');

//Path to data.txt file
const filepath = `${dirPath}/data.txt`;

//CreateFile
fs.writeFileSync(filepath, "It is simple data file");

//ReadFile
fs.readFile(filepath, 'utf8', (erroe,item) => {
    console.log(item)
})

//Update File content
fs.appendFile(filepath, " and it has nothing else", (error) => {
    if (!error) {
        console.log("File Updated")        
    }
})

//Rename File
fs.rename(filepath, `${dirPath}/value.txt`, (error) => {
    if (!error) {
        console.log("File Name Updated")
    }
})

//To delete file
// fs.unlinkSync(`${dirPath}/value.txt`)
