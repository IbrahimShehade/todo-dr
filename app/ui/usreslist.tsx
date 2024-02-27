import { Suspense } from "react";
import Link from "next/link";
import Loading from "./loading";
import UsersImage from "./usersImage";
import { ApiResponse } from "../users/page";
export default async function Userslist({ users }: { users: ApiResponse }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {users.map((user: any) => (
        <Suspense key={user.id} fallback={<Loading />}>
          <li>
            <Link
              href={{
                pathname: `/users/${user.id}`,
                query: {
                  name: user.first_name,
                  av: user.avatar,
                },
              }}
              className="text-xl font-medium"
            >
              <UsersImage user={user} />
              <p className="text-primary">{user.first_name}</p>
            </Link>
          </li>
        </Suspense>
      ))}
    </ul>
  );
}
