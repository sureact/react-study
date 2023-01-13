const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if (ctx.query.authorized !== '1'){
        ctx.status = 401;
        return;
    }
    await next();
    console.log('End')
})
app.use((ctx, next) => {
    console.log(2)
    next();
})
app.use(ctx=>{
    console.log(3)
    ctx.body = 'hello world!!';
});

app.listen(4000, ()=>{
    console.log('listening to port 4000');
})
