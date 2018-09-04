// 获取当前脚本所在目录的路径
console.log(__dirname);
// 获取当前脚本的文件路径
console.log(__filename);

const fs = require('fs');

fs.readFile(__dirname+'/../01.js',function(err,content){
    if(err) throw err;
    console.log(content.toString());
});