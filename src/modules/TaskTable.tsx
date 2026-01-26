import { mockTasks } from "./mockTasks";
import TaskStatusBadge from "./TaskStatusBadge";

export default function TaskTable() {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Status</th>
            <th className="text-left px-4 py-3">Assignee</th>
            <th className="text-left px-4 py-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {mockTasks.map((task) => (
            <tr
              key={task.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">{task.title}</td>
              <td className="px-4 py-3">
                <TaskStatusBadge status={task.status} />
              </td>
              <td className="px-4 py-3">{task.assignee}</td>
              <td className="px-4 py-3 text-gray-500">
                {task.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
