import React from 'react';
import styles from "./Tasks.module.css";
import Task from '../task/Task'
import { useTaskContext } from '../taskContext/TaskContext';
import { TaskType } from '../task/types'

export default function Tasks() {
  const { tasks } = useTaskContext();

  return (
    <div className={styles.tasksCtn}>
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}