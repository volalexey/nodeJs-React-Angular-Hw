const fs = require("fs");
function CreateBody(){
    return fs.readFileSync("htmlbody.txt", "utf8");
}

module.exports = {
    CreateBody
}