import React from "react";
import Image from "next/image";
export default function LoneUser({ searchParams }: any) {
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
