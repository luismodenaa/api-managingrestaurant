import "dotenv/config";
import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.DBHOST,
        port: parseInt(process.env.DBPORT!),
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
        synchronize: false,
        logging: true,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
      }
);

export default AppDataSource;
