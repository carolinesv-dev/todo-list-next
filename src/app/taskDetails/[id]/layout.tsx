import { TaskProvider } from '@/app/(taskContext)/TaskContext';
import { ReactNode } from 'react';

interface TaskDetailsLayoutProps {
  children: ReactNode;
}

export default function TaskDetailsLayout({ children }: TaskDetailsLayoutProps) {
  return (
    <TaskProvider>
      {children}
    </TaskProvider>
  );
}
