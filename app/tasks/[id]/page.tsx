import EditForm from "@/app/ui/editform";
import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

const SingleTaskPage = async ({ params }: any) => {
  const task = await db.select().from(todos).where(eq(todos.id, params.id));

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;
