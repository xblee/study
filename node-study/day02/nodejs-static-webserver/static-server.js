'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');
const config = require('./config/default');
const mime = require('./mime');

class StaticServer{
    constructor(){
        this.port = config.port;
        this.root = config.root;
        this.indexPage = config.indexPage;
    }

    start(){
        http.createServer((req,res)=>{
            const pathName = path.join(this.root,path.normalize(req.url));
            // res.writeHead(200);
            // res.end(`Request path:${pathName}`);
            this.routerHandler(pathName,req,res);
        }).listen(this.port,err=>{
            if(err){
                console.log(err);
                console.info('Failed to start server');
            }else{
                console.info(`Server started at port ${this.port}`);
            }
        });
    }

    routerHandler(pathName,req,res){
        fs.stat(pathName,(err,stat)=>{
            if(err){
                this.respondNotFound(req,res);
            }else{
                this.respondFile(pathName,req,res);
            }
        });
    }

    respondNotFound(req,res){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end(`<h1>Not Found</h1><p>The requested URL ${req.url} was not found on this server.</p>`);
    }

    respondFile(pathName,req,res){
        const readStream = fs.createReadStream(pathName);
        res.setHeader('Content-Type',mime.lookup(pathName));
        readStream.pipe(res);
    }
}

module.exports = StaticServer;
// exports.StaticServer = StaticServer;