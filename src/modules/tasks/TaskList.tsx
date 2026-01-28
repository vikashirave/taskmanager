import { useState } from "react";
import { Task } from "./tasktype";
import { mockTasks } from "./mockTasks";
import TaskRow from "./TaskRow";
import TaskModal from "./TaskModal";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [mode, setMode] = useState<"create" | "edit" | "view" | null>(null);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Tasks</h1>
        <button
          onClick={() => {
            setActiveTask(null);
            setMode("create");
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          + Create Task
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Assignee</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onView={() => {
                  setActiveTask(task);
                  setMode("view");
                }}
                onEdit={() => {
                  setActiveTask(task);
                  setMode("edit");
                }}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {mode && (
        <TaskModal
          mode={mode}
          task={activeTask}
          onClose={() => setMode(null)}
        />
      )}
    </div>
  );
}
