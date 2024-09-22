'use client'
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { TaskType } from '../(task)/types';
import taskReducer, { initialState, Action } from '../(taskReducer)/taskReducer';

export interface TaskContextType {
  tasks: TaskType[];
  dispatch: React.Dispatch<Action>;
  handleTaskAddition: (taskTitle: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
  handleTaskRemove: (taskId: string) => void;
  countCreatedTasks: () => string;
  countCompletedTasks: () => string;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!isLoaded) {
        try {
          const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=6');
          dispatch({ type: 'SET_TASKS', payload: data });
          setIsLoaded(true);
        } catch (error) {
          console.error("Erro ao buscar tarefas:", error);
        }
      }
    };
    fetchTasks();
  }, [isLoaded]); // qdo vazia não carrega auto novamente

  const apiId = 1;

  const handleTaskAddition = (taskTitle: string) => {
    const newTask: TaskType = {
      userId: apiId,
      id: String(tasks.length + 1), 
      title: taskTitle,
      completed: false,
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const toggleTaskCompletion = (taskId: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleTaskRemove = (taskId: string) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  const countCreatedTasks = () => tasks.length.toString();

  const countCompletedTasks = () => tasks.filter(task => task.completed).length.toString();

  return (
    <TaskContext.Provider value={{
      tasks,
      dispatch,
      handleTaskAddition,
      toggleTaskCompletion,
      handleTaskRemove,
      countCreatedTasks,
      countCompletedTasks,
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider');
  }
  return context;
}
