CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
