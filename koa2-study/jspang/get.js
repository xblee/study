const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let url = ctx.url;

    // 从request中获取get请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querying = request.querystring;

    // 从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querying,
        ctx_query,
        ctx_querystring
    }
});

app.listen(3000,()=>{
    console.log('server has started on port 3000');
});