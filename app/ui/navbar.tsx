import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between  w-screen ml-16 ">
      <div className="flex flex-col justify-between max-h-28 lg:w-2/6 md:flex-row  lg:flex-row md:justify-around  lg:justify-around lg:items-center   ">
        <Link href="https://nextjs.org/docs" className="mr-8 m-2">
          NEXT.JS
        </Link>
        <Link href="/" className="m-1 btn btn-outline btn-warning ">
          Home
        </Link>

        <Link href="/client" className="m-1 btn btn-outline btn-warning ">
          Client
        </Link>
        <Link href="/users" className="m-1 btn btn-outline btn-warning ">
          Users
        </Link>
        <Link href="/tasks" className="m-1 btn btn-outline btn-warning ">
          Tasks
        </Link>
      </div>
    </div>
  );
}
