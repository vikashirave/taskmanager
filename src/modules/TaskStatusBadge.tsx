import type {TaskStatus}  from "./mockTasks";

const statusStyles: Record<TaskStatus, string> = {
  todo: "bg-gray-200 text-gray-700",
  in_progress: "bg-yellow-100 text-yellow-800",
  done: "bg-green-100 text-green-700",
};

export default function TaskStatusBadge({
  status,
}: {
  status: TaskStatus;
}) {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}
    >
      {status.replace("_", " ").toUpperCase()}
    </span>
  );
}
