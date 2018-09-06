/**
 * 设置前缀
 * */

const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
// const router = new Router();

// router.get('/', (ctx, next) => {
//     ctx.body = 'hello world';
// })

// 子路由
let home = new Router();
home.get('/', (ctx, next) => {
    ctx.body = 'hello world in home';
}).get('/boblee', (ctx, next) => {
    ctx.body = 'hello boblee in home';
});

// 子路由
let page = new Router();
page.get('/', (ctx, next) => {
    ctx.body = 'hello world in page';
}).get('/boblee', (ctx, next) => {
    ctx.body = 'hello boblee in page';
});

// 父级路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server has started on 3000');
});