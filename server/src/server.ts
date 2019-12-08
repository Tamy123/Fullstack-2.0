import { postgresDB } from "../src/databases/postgres-db";

var app = require("./app");
const bootstrap = async () => {
  // Initialize the database
  await postgresDB();

  //Respond with a message to all client requests
  app.use(async ctx => {
    ctx.body = "Welcome to my Server!";
  });
  //Tell the app to listen on port 3000
  app.listen(7000);
};
bootstrap();
