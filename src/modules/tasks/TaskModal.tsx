import TaskForm from "./TaskForm";
import { Task } from "./types";

export default function TaskModal({
  mode,
  task,
  onClose,
}: {
  mode: "create" | "edit" | "view";
  task: Task | null;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded shadow">
        <div className="px-4 py-3 border-b flex justify-between">
          <h2 className="font-semibold capitalize">
            {mode} Task
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-4">
          <TaskForm mode={mode} task={task} />
        </div>
      </div>
    </div>
  );
}
