import React from "react";
import Userslist from "../ui/usreslist";

const url = "https://random-data-api.com/api/v2/users?size=6";
export default async function Page() {
  const posts = await fetch(url).then((res) => res.json());

  const data = posts;
  return (
    <div className="">
      <Userslist users={data} />
    </div>
  );
}
