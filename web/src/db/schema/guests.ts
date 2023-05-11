import { mysqlTable, serial, varchar, int, text } from "drizzle-orm/mysql-core";

export const guestsTable = mysqlTable("guests", {
  id: serial("id").primaryKey(),
});
