import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await supabase.from("jobs").insert([{ title, description }]);
    alert("Job posted!");
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="p-6">
        <h1 className="text-2xl mb-4">Post a Job</h1>
        <input className="border p-2 w-full mb-4" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full mb-4" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
