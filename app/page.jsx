import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        className="inline-block rounded bg-sky-950 text-white px-4 py-1 my-1 mr-2"
        href="/products"
      >
        Products
      </Link>
      <Link
        className="inline-block rounded bg-sky-950 text-white px-4 py-1 my-1"
        href="/connect-store"
      >
        Connect store
      </Link>
    </>
  );
}
