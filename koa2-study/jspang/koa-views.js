const Koa = require('koa');
// 提前npm i --save koa-views
const views = require('koa-views');
// 用到模板引擎，肯定需要编写路径
const path = require('path');
const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}));

app.use(async ctx => {
    let title = 'hello koa2';
    await ctx.render('index', {
        title
    });
});

app.listen(3000,()=>{

});