import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link
        className="mr-4 ml-4 underline bg-blue-200 hover:bg-blue-300"
        href="/login"
      >
        Login
      </Link>
      <Link
        className="underline bg-blue-200 hover:bg-blue-300"
        href="/register"
      >
        Register
      </Link>
      <h1>Home page</h1>
    </div>
  );
}
