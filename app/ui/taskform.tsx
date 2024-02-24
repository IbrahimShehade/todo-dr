import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { revalidatePath } from "next/cache";
const createTask = async (FormData: any) => {
  "use server";
  const Addedtask = FormData.get("task");
  await db.insert(todos).values({
    task: Addedtask,
  });
  revalidatePath("/tasks");
};
export default function Taskform() {
  return (
    <>
      <form action={createTask}>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item"
            placeholder="type here"
            name="task"
            required
          />
          <button className="ml-5" type="submit">
            create task
          </button>
        </div>
      </form>
    </>
  );
}
