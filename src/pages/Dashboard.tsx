import StatsGrid from "../modules/dashboard/StatsGrid";
import TaskChart from "../modules/dashboard/TaskChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Stats */}
      <StatsGrid />

      {/* Chart */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          Tasks Overview
        </h2>
        <TaskChart />
      </div>
    </div>
  );
}
