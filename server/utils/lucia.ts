import { lucia } from "lucia";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import { unstorage } from "@lucia-auth/adapter-session-unstorage";
import { h3 } from "lucia/middleware";
import { createStorage } from "unstorage";

import mysql from "mysql2/promise";
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";

const config = useRuntimeConfig();

const storage = createStorage({
  driver: cloudflareKVBindingDriver({ binding: "STORAGE" }),
});

const connectionPool = mysql.createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

export const auth = lucia({
  adapter: {
    user: mysql2(connectionPool, {
      user: "auth_user",
      key: "user_key",
      session: null,
    }),
    session: unstorage(storage),
  },
  env: "DEV",
  middleware: h3(),
});

export type Auth = typeof auth;
