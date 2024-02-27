import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
const deleteTaskform = async (FormData: any) => {
  "use server";
  const ID = FormData.get("id");
  await db.delete(todos).where(eq(todos.id, ID));
  revalidatePath("/task");
};

export default function Deletetask({ id }: { id: number }) {
  return (
    <form action={deleteTaskform}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error">Delete</button>
    </form>
  );
}
