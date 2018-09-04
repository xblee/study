/**
 * process-进程
 * process对象是一个全局变量，它提供当前node进程的有关信息
 * 以及控制当前node进程。因为是全局变量，所以无需require
*/

// 1.process.abort()立即结束node进程，并生成一个core文件
// console.log('start');
// process.abort();
// console.log('end');

// 2.process.argv
//该属性返回一个数组，包含了启动node进程时的命令行参数
// [0]程序所在位置[1]当前文件所在位置
process.argv.forEach((val,index) => {
    console.log(`${index}:${val}`);
});