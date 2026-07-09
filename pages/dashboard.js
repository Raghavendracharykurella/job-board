import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data }) => {
      setUser(data.session?.user || null);
    });

    async function fetchJobs() {
      let { data } = await supabase.from("jobs").select("*");
      setJobs(data);
    }
    fetchJobs();
  }, []);

  if (!user) {
    return (
      <div>
        <Navbar />
        <p className="p-6">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl p-6">Dashboard</h1>
      <p className="p-6">Welcome, {user.email}</p>
      <h2 className="text-2xl p-6">Jobs You Posted</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {jobs.filter(job => job.user_id === user.id).map(job => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
