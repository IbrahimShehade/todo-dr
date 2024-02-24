import "@/lib/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { todos } from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getTodos = async () => {
  const selectResult = await db.select().from(todos);
  return selectResult;
};

export type NewToDo = typeof todos.$inferInsert;

export const insertToDo = async (todo: NewToDo) => {
  return db.insert(todos).values(todo).returning();
};

export const getAllTodos = async () => {
  const result = await db.query.todos.findMany();
  return result;
};
