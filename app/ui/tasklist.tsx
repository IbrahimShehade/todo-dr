import { getTodos } from "@/lib/db";
import Deletetask from "./deletetask";
import Link from "next/link";
export default async function Tasklist() {
  const data = await getTodos();
  return (
    <div className="">
      {data.map((d) => {
        return (
          <div
            key={d.id}
            className="card w-96 bg-green-900 text-primary-content m-5 p-2 text-center"
          >
            <h2 className="text-xl ">
              {d.task}
              <br />
              Task : {d.id} || {JSON.stringify(d.completed)} ||
              {JSON.stringify(d.createdAt).split("T")[0].replace(/"/g, "")}
            </h2>
            <div className="flex flex-col p-1">
              <Deletetask id={d.id} />
              <Link
                href={{
                  pathname: `/tasks/${d.id}`,
                }}
                className="btn btn-xs mr-3 mt-2  w-fit btn-error indent-px"
              >
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
