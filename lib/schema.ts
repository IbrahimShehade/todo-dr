import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  completed: boolean("completed").default(false),
});
