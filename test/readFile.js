const fs = require("fs");
const path = require("path");
// 指明数据类型
var result = fs.readFileSync(path.resolve(__dirname,"data/test.json"),"utf-8");
console.log(result);
console.log(typeof result); //类型为字符串

//未指明数据类型
var result = fs.readFileSync(path.resolve(__dirname,"data/test.json"));
console.log(result);
console.log(typeof result);