const fs = require('fs');
const input = process.argv;
if (input[2] == "create") {
    fs.writeFileSync(input[3],input[4])
}
else if (input[2] == "remove") {
    fs.unlinkSync(input[3]);
}
else {
    console.warn("Invalid Command");
}