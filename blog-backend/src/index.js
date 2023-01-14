import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body-parser';
import mongoose from 'mongoose';
import api from './api/index.js';
import 'dotenv/config';

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connecting to MongoDB');
  })
  .catch(err => console.log(err));

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

// 라우터를 적용하기 전에 bodyParser를 먼저 적용해야함.
app.use(bodyParser());

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());
const port = PORT || 4000;
app.listen(port, () => {
  console.log('listening to port 4001');
});
