const Koa = require("koa");

const app = new Koa();
const PORT = process.env.APP_SERVER_PORT;

app.use(async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!"
  };
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

// const http = require("http");

// const hostname = process.env.API_HOST;
// const port = process.env.APP_SERVER_PORT;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at ${hostname}:${port}/`);
// });
