export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
}
