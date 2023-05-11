import { char, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const addressesTable = mysqlTable("addresses", {
  id: serial("id").primaryKey(),
  line1: varchar("line1", { length: 256 }).notNull(),
  line2: varchar("line2", { length: 256 }),
  city: varchar("city", { length: 256 }).notNull(),
  state: varchar("state", { length: 256 }),
  code: varchar("code", { length: 256 }).notNull(),
  country: char("country", { length: 2 }).notNull(),
});
