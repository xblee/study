const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName"/><br>
                <p>age</p>
                <input name="age" /><br>
                <p>webSite</p>
                <input name="webSite" /><br>
                <button type="submit">提交</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // ctx.body = '接收到请求';
        let pastData = await parsePostData(ctx);
        ctx.body = pastData;
    } else {
        ctx.body = `<h1>404 NOT FOUND</h1>`;
    }
});

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.on('data', data => {
                postdata += data;
            });
            ctx.req.addListener('end', () => {
                postdata = parseQueryStr(postdata);
                resolve(postdata);
            });
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryList = queryStr.split('&');
    console.log(queryList);
    console.log(queryList.entries());
    for(let [index,queryStr] of queryList.entries()){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000, () => {
    console.log('server has started on 3000');
});