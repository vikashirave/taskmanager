import TaskTable from "../modules/tasks/TaskTable";


export default function Tasks() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tasks</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
          + Create Task
        </button>
      </div>

      {/* Filters (placeholder) */}
      <div className="bg-white p-4 rounded shadow text-sm text-gray-500">
        Filters coming soon
      </div>

      {/* Table */}
      <TaskTable />
    </div>
  );
}
