import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const questionsTable = mysqlTable("questions", {
  id: serial("id").primaryKey(),
  question: varchar("question", { length: 256 }).notNull(),
});
