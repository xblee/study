/**
 * 基本的koa-router
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
    ctx.body = 'hello world';
})
.get('/todo',(ctx,next)=>{
    ctx.body = 'todo page';
});

app
    .use(router.routes())//启动路由
    .use(router.allowedMethods());//遵循定义路由，如果使用post则返回错误

app.listen(3000, () => {
    console.log('starting at port 3000');
});