import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Job Board</h1>
        <p className="mt-4">Find your dream job or post one!</p>
        <div className="mt-6 space-x-4">
          <Link href="/jobs" className="bg-blue-500 text-white px-4 py-2 rounded">Browse Jobs</Link>
          <Link href="/post-job" className="bg-green-500 text-white px-4 py-2 rounded">Post a Job</Link>
        </div>
      </main>
    </div>
  );
}
