import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { revalidatePath } from "next/cache";
import { minLength, parse, string } from "valibot";
import toast from "react-hot-toast";
const createTask = async (FormData: any) => {
  "use server";
  const Addedtask = FormData.get("task");
  const TaskSchema = string([minLength(4)]);

  try {
    parse(TaskSchema, Addedtask);

    await db.insert(todos).values({
      task: Addedtask,
    });

    revalidatePath("/tasks");
  } catch (error) {
    console.log(error);
  }
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
