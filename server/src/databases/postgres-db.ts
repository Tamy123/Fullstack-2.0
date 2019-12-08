//postgres-db.ts
/*
This file initializes your PostgreSQL database. You need to supply
the host name, username, password and database name for your database.
*/
import { createConnection } from "typeorm";
import { postgresTables } from "../databases/postgres-tables";

export const postgresDB = async () => {
  let retries = 10;
  // DB connection retrying logic (Required in containerized apps)
  while (retries > 0) {
    try {
      return await createConnection({
        type: "postgres",
        host: "db",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "chairlift",
        ssl: false,
        logging: ["query", "error"],
        entities: postgresTables,
        synchronize: true
      }).then(connection => {
        console.log("Database connection established");
      });
    } catch (ex) {
      retries -= 1;

      console.log(`db connection failed: `, ex);
      console.log(`Retrying after 10 seconds`);
      console.log(`Retries left ${retries}`);

      await new Promise(resolve => setTimeout(resolve, 10 * 1000));
    }
  }
};
