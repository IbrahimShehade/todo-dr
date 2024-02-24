import Image from "next/image";
export default async function UsersImage({ user }: any) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <div className="relative h-48 mb-4">
        <Image
          key={user.id}
          src={user.avatar}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
          alt={user.last_name}
          className="rounded-md object-cover"
        />
      </div>
    </>
  );
}
