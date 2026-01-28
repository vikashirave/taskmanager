import type Task  from "./tasktype";
import TaskStatusBadge from "./TaskStatusBadge";

export default function TaskRow({
  task,
  onView,
  onEdit,
}: {
  task: Task;
  onView: () => void;
  onEdit: () => void;
}) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-4 py-3">{task.title}</td>
      <td className="px-4 py-3">
        <TaskStatusBadge status={task.status} />
      </td>
      <td className="px-4 py-3">{task.assignee}</td>
      <td className="px-4 py-3 text-right space-x-2">
        <button onClick={onView} className="text-blue-600 text-xs">
          View
        </button>
        <button onClick={onEdit} className="text-green-600 text-xs">
          Edit
        </button>
      </td>
    </tr>
  );
}
