const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(async ctx => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
});

function render(page) {
    // 流操作可能卡死，所以采用异步操作
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    });
}

async function route(url) {
    let page = '404.html';
    if (url.indexOf('.ico') != -1) {
        return;
    }
    console.log(url);
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}

app.listen(3000);