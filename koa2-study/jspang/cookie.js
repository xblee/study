const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.url === '/index') {
        // 写入cookie
        ctx.cookies.set('MyName', 'boblee', {
            domain: '127.0.0.1', //cookie所在域名
            path: '/index', //cookie所在路径
            maxAge: 1000 * 60 * 60 * 24, //cookie有效市场
            expires: new Date('2018-12-31'), //cookie失效时间
            httpOnly: false, //是否只用于http请求中获取
            overwrite: false //是否允许重写
        });
        ctx.body = 'cookie is ok';
    } else {
        // 读取cookie
        if (ctx.cookies.get('MyName')) {
            ctx.body = ctx.cookies.get('MyName');
        } else {
            ctx.body = 'Cookie is none';
        }
    }
});

app.listen(3000, () => {
    console.log('server has started on 3000');
});