'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { TaskType } from '../(task)/types';

interface TaskContextType {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  handleTaskAddition: (taskTitle: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
  handleTaskRemove: (taskId: string) => void;
  countCreatedTasks: () => string;
  countCompletedTasks: () => string;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!isLoaded) {
        try {
          const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=6');
          setTasks(data);
          setIsLoaded(true); // Marca como carregado
        } catch (error) {
          console.error("Erro ao buscar tarefas:", error);
        }
      }
    };
    fetchTasks();
  }, [isLoaded]);

const apiId = 1;

const handleTaskAddition = (taskTitle: string) => {
  const newTask = {
    userId: apiId,
    id: String(tasks.length + 1),
    title: taskTitle,
    completed: false,
  };
  setTasks(newTasks => {
    return [...newTasks, newTask];
  });
};

const toggleTaskCompletion = (taskId: string) => {
  const newTasks = tasks.map(task =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  setTasks(newTasks);
};

const handleTaskRemove = (taskId: string) => {
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);
};

const countCreatedTasks = () => tasks.length.toString();

const countCompletedTasks = () => tasks.filter(task => task.completed).length.toString();

return (
  <TaskContext.Provider value={{
    tasks,
    setTasks,
    handleTaskAddition,
    toggleTaskCompletion,
    handleTaskRemove,
    countCreatedTasks,
    countCompletedTasks,
  }}>
    {children}
  </TaskContext.Provider>
)
}

export function useTaskContext(): TaskContextType {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider')
  }
  return context;
}