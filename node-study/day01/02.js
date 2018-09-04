/**
 * 
 * 模块化结构
 * 实现命令行计算器
 */
'use strict';
const calc = require('./module/coumputer');
// 1.接收参数
const args = process.argv.slice(2);

// 2.分析参数
if (args.length !== 3) throw new Error('参数不合法');
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

// 3.进行运算
// let result = eval(`${parameter1} ${operator} ${parameter2}`);
let result = '';
switch (operator) {
    case '+':
        result = calc.add(parameter1, parameter2);
        break;
    case '*':
    case 'x':
        result = calc.mutiply(parameter1, parameter2);
        break;
    default:
        throw new Error('不被支持的操作符');
}
console.log(result);