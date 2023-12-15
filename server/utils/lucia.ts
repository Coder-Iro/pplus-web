import { lucia } from "lucia";
import mysql from "mysql2/promise";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import { unstorage } from "@lucia-auth/adapter-session-unstorage";
import { h3 } from "lucia/middleware";
import { createStorage } from "unstorage";
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";

const storage = createStorage({
  driver: cloudflareKVBindingDriver({ binding: "STORAGE" }),
});

const connectionPool = mysql.createPool({
  //TODO
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
