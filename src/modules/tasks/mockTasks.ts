export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  assignee: string;
  createdAt: string;
}

export const mockTasks: Task[] = [
  {
    id: 1,
    title: "Design dashboard layout",
    status: "done",
    assignee: "You",
    createdAt: "2024-01-10",
  },
  {
    id: 2,
    title: "Implement auth flow",
    status: "in_progress",
    assignee: "You",
    createdAt: "2024-01-12",
  },
  {
    id: 3,
    title: "Setup backend APIs",
    status: "todo",
    assignee: "You",
    createdAt: "2024-01-15",
  },
];
