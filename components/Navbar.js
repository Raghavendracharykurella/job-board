import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/">Job Board</Link>
      <div className="space-x-4">
        <Link href="/jobs">Jobs</Link>
        <Link href="/post-job">Post Job</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
