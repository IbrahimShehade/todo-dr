import React from "react";
import Userslist from "../ui/usreslist";

export type ApiResponse = {
  map(arg0: (user: any) => React.JSX.Element): React.ReactNode;
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
};

const url = "https://random-data-api.com/api/v2/users?size=6";
export default async function Page() {
  const posts = await fetch(url).then((res) => res.json());

  const data: ApiResponse = posts;

  return <Userslist users={data} />;
}
