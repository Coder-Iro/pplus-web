import { lucia } from "lucia";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import { h3 } from "lucia/middleware";

import mysql from "mysql2/promise";

const config = useRuntimeConfig();

const connectionPool = mysql.createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

export const auth = lucia({
  adapter: mysql2(connectionPool, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  env: "DEV",
  middleware: h3(),
});

export type Auth = typeof auth;
