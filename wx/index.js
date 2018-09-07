// 入口文件

const WxServer = require('./m/server');//服务器文件
const config = require('./config');//配置文件

(new WxServer(config)).start();