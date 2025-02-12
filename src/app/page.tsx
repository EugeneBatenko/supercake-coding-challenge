import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Home</h1>
      <div className="flex justify-center">
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={"/pets"}
        >
          Pets
        </Link>
      </div>
    </>
  );
}
