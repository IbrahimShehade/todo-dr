import Link from "next/link";
let num: number = 0;

export default function Page({ searchParams }: any) {
  const variable: string | number = searchParams.num | 0;
  const numberVariable: number = Number(variable);

  return (
    <div className="p-5 w-min md:w-fit md:p-10 lg:w-fit lg:p-10 flex flex-col mb-10 lg:block md:block">
      <p className="text-5xl text-center mb-5">{numberVariable}</p>
      <Link
        className="bg-blue-500 text-xl mr-5 hover:bg-blue-700 text-white font-bold  mb-5  py-2 px-4 rounded"
        href={`?num=${numberVariable + 1}`}
      >
        Increase
      </Link>
      <Link
        href={`?num=${numberVariable - 1}`}
        className="bg-blue-500 text-xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrease
      </Link>
    </div>
  );
}
