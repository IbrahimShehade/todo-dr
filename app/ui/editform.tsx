import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
const editTask = async (formData: { get: (arg0: string) => any }) => {
  "use server";
  const id = formData.get("id");
  const Editedtask = formData.get("content");
  const Completedtask = formData.get("completed");
  await db
    .update(todos)
    .set({ task: Editedtask, completed: Completedtask })
    .where(eq(todos.id, id));
  revalidatePath("/tasks");
};
export default function EditForm(tasks: any) {
  const { id, task, completed } = tasks.task[0];

  return (
    <>
      <form
        action={editTask}
        className="max-w-sm p-12 border border-base-300 rounded-lg"
      >
        <input type="hidden" name="id" value={id} />
        {/* content */}
        <input
          type="text"
          required
          defaultValue={task}
          name="content"
          className="input input-bordered w-full"
        />
        <div className="form-control my-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">completed</span>
            <input
              type="checkbox"
              defaultChecked={completed}
              id="completed"
              name="completed"
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-sm">
          edit
        </button>
      </form>
    </>
  );
}
