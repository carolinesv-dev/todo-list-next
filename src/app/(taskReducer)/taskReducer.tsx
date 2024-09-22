'use client'
import { TaskType } from '../(task)/types';

export const initialState: TaskType[] = [];

export type Action =
  | { type: 'ADD_TASK'; payload: TaskType }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_TASKS'; payload: TaskType[] };

export default function taskReducer (state: TaskType[], action: Action): TaskType[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];

    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    
    case 'SET_TASKS':
      return action.payload;
    
    default:
      return state;
  }
};