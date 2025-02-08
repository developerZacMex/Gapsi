const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router();
const PORT = 3001;

app.use(cors());
app.use(bodyParser());

const filePath = path.join(__dirname, 'bd.json');

router.get('/api/welcome', (ctx) => {
  ctx.body = {
    message: "Bienvenido Candidato 01",
    version: "1.0.0"
  };
});

router.get('/api/providers', (ctx) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const { page = 1, limit = 10 } = ctx.query;
  const start = (page - 1) * limit;
  const end = page * limit;
  ctx.body = data.slice(start, end);
});

router.post('/api/providers', (ctx) => {
  const { name, businessName, address } = ctx.request.body;
  if (!name || !businessName || !address) {
    ctx.status = 400;
    ctx.body = { error: "All fields are required" };
    return;
  }
  const data = JSON.parse(fs.readFileSync(filePath));
  if (data.find(p => p.name === name)) {
    ctx.status = 400;
    ctx.body = { error: "Provider already exists" };
    return;
  }
  data.push({ name, businessName, address });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  ctx.status = 201;
  ctx.body = { message: "Provider added" };
});

router.delete('/api/providers/:name', (ctx) => {
  const { name } = ctx.params;
  let data = JSON.parse(fs.readFileSync(filePath));
  const initialLength = data.length;
  data = data.filter(p => p.name !== name);
  if (data.length === initialLength) {
    ctx.status = 404;
    ctx.body = { error: "Provider not found" };
    return;
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  ctx.status = 200;
  ctx.body = { message: "Provider deleted" };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});