import { NewToDo, insertToDo } from "@/lib/db";

async function main() {
  const newUser: NewToDo = {
    id: 1,
    task: "Finish experimental website",
  };

  const res = await insertToDo(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
