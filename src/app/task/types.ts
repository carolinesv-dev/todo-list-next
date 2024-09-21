export interface TaskType {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskProps {
  task: TaskType;
}