const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = '홈';
});

//url 파라미터 조회하기
router.get('/about/:name?', ctx => {
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개`: '소개';
});

//url 쿼리스트링 조회하기
router.get('/posts',ctx=>{
    const {id} = ctx.query;
    ctx.body = id ? `포스트 #${id}`: '아이디가 존재하지 않습니다.';
})

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, ()=>{
    console.log('listening to port 4000');
})
