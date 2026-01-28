import { Task } from "./types";
import { useState } from "react";

export default function TaskForm({
  mode,
  task,
}: {
  mode: "create" | "edit" | "view";
  task: Task | null;
}) {
  const isView = mode === "view";

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "todo");

  return (
    <form className="space-y-4">
      <div>
        <label className="text-sm">Title</label>
        <input
          disabled={isView}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-sm">Description</label>
        <textarea
          disabled={isView}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-sm">Status</label>
        <select
          disabled={isView}
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {!isView && (
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            {mode === "create" ? "Create" : "Update"}
          </button>
        </div>
      )}
    </form>
  );
}
