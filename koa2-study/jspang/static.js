const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
    ctx.body = 'hello world';
});

app.listen(3000, () => {
    console.log('server has started on 3000');
});

// 127.0.0.1:3000/0.jpg