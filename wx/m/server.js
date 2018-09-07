// 服务器文件

const http = require('http');
const https = require('https');
const crypto = require('crypto');
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

class WxServer {
    constructor(obj) {
        this.config = obj.config;
        this.httpPort = obj.config.httpPort;
        this.httpsPort = obj.config.httpsPort;
        this.token = obj.config.token;
        this.appID = obj.config.appID;
        this.appScrect = obj.config.appScrect;
    }

    start() {
        // 微信接入
        router.get('/', (ctx, next) => {
            this.auth(ctx);
        });


        // 获取access_token
        router.get('/getAccessToken', (ctx, next) => {
            this.getAccessToken();
        });

        app.use(router.routes()).use(router.allowedMethods());

        // app.listen(this.netPort, () => {//语法糖
        //     console.log(`server has started on ${this.netPort}`);
        // });
        // 这意味着您可以将同一个应用程序同时作为 HTTP 和 HTTPS 或多个地址
        http.createServer(app.callback()).listen(this.httpPort);
        https.createServer(app.callback()).listen(this.httpsPort);
    }

    // 微信接入认证
    auth(ctx) {
        console.log(ctx.query);
        // 1.获取微信服务器get请求的参数signature,timestamp,nonce,echostr
        let signature = ctx.query.signature, //微信加密签名
            timestamp = ctx.query.timestamp, //时间戳
            nonce = ctx.query.nonce, //随机数
            echostr = ctx.query.echostr; //随机字符串
        // 2.将token,timestamp,nonce三个参数进行字典序排序
        let array = [this.token, timestamp, nonce];
        console.log(array);
        array.sort();
        console.log(array);
        // 3.将三个参数字符串拼接成一个字符串进行shall加密
        let tempStr = array.join('');
        console.log(tempStr);
        const hashCode = crypto.createHash('sha1'); //创建加密类型
        let resultCode = hashCode.update(tempStr, 'utf8').digest('hex'); //对传入的字符串进行加密
        console.log(resultCode);
        // 4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        if (resultCode === signature) {
            // res.send(echostr);
            ctx.body = echostr;
        } else {
            ctx.body = false;
        }
    }

    getAccessToken() {
        // 获取access_token
        // https请求方式: GET
        // https: //api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

    }
}

module.exports = WxServer;



