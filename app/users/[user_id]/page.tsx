import React from "react";
import Image from "next/image";
interface searchParamsTypes {
  name: string;
  av: string;
}
export default function LoneUser({
  searchParams,
}: {
  searchParams: searchParamsTypes;
}) {
  const userName = searchParams.name;
  const img = searchParams.av;
  return (
    <>
      <div className="relative h-48 mb-4">
        <Image
          key={userName}
          src={img}
          fill
          alt={userName}
          className="rounded-md object-cover"
        />
      </div>{" "}
      <p className="text-primary">{userName}</p>
    </>
  );
}
