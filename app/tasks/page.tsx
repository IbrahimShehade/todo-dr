import Taskform from "../ui/taskform";
import Tasklist from "../ui/tasklist";

export default async function Home() {
  return (
    <div className="m-5 ml-10">
      <Taskform />
      <Tasklist />
    </div>
  );
}
