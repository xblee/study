/**
 * 设置前缀
 * */

const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router({
    prefix: '/boblee'
});

router.get('/', (ctx, next) => {
    ctx.body = 'hello world';
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server has started on 3000');
});