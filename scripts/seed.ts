import { NewToDo, insertToDo } from "@/lib/db";

async function main() {
  const newUser: NewToDo = {
    id: 1,
    task: "Finish experimental website",
  };

  const res = await insertToDo(newUser);
  process.exit();
}

main();
