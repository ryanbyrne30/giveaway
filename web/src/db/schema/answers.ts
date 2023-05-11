import { mysqlTable, serial, varchar, int, text } from "drizzle-orm/mysql-core";
import { questionsTable } from "./questions";

export const answersTable = mysqlTable("answers", {
  id: serial("id").primaryKey(),
  answer: text("answer").notNull(),
  questionId: int("questionId")
    .notNull()
    .references(() => questionsTable.id),
  guestId: int("guestId")
    .notNull()
    .references(() => questionsTable.id),
});
