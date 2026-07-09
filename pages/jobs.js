import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      let { data } = await supabase.from("jobs").select("*");
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl p-6">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
