const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api',api.routes());

// 라우터를 적용하기 전에 bodyParser를 먼저 적용해야함.
app.use(bodyParser());

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());
app.listen(4000, ()=>{
    console.log('listening to port 4000');
})
