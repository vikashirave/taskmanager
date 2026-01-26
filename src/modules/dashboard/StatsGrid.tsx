import StatCard from "./StatCard";


export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Total Tasks" value="24" trend="+4 this week" />
      <StatCard title="In Progress" value="8" trend="2 blocked" />
      <StatCard title="Completed" value="12" trend="+6 this week" />
    </div>
  );
}