import React from 'react';
import styles from "./CountTask.module.css";
import { useTaskContext } from '../(taskContext)/TaskContext';

export default function CountTask() {
  const {
    countCreatedTasks,
    countCompletedTasks
  } = useTaskContext();

  const createdCount = countCreatedTasks();
  const completedCount = countCompletedTasks();

  return (
    <div className={styles.countTask}>
      <div className={styles.countTaskCreated}>
        <p>Tarefas criadas </p>
        <p><span>{createdCount}</span></p>
      </div>
      <div className={styles.countTaskCompleted}>
        <p>Concluídas</p>
        <p><span>{completedCount} de {createdCount}</span></p>
      </div>
    </div>
  )
}