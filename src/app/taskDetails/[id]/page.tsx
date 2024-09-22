'use client'
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTaskContext } from '@/app/(taskContext)/TaskContext';
import styles from './page.module.css';
import Header from '../../(header)/Header';

export default function TaskDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.find(task => String(task.id) === String(id));

  const handleBackButtonClick = () => {
    router.back();
  }

  if (!task) {
    return <div></div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.detailsContainer}>
        <div className={styles.backButtonContainer}>
          <button
            className={styles.backButton}
            onClick={handleBackButtonClick}>Voltar</button>
        </div>
        <div className={styles.taskDetailsContainer}>
          <h2>Tarefa</h2>
          <p>
            <strong>Detalhes da tarefa: </strong>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis dicta hic dolor eum rerum consequatur!</span>
          </p>
        </div>
      </div>
    </div>

  );
}
