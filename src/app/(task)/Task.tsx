import React from 'react';
import styles from "./Task.module.css";
import { GoTrash } from 'react-icons/go';
import { CgInfo } from 'react-icons/cg';
import Link from 'next/link';
import { useTaskContext } from '../(taskContext)/TaskContext';
import { TaskProps } from './types';

export default function Task({ task }: TaskProps) {
  const { toggleTaskCompletion, handleTaskRemove } = useTaskContext();

  return (
    <div className={styles.taskContainer}>
      {task ? (
        <div className={styles.taskContent}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => { toggleTaskCompletion(task.id) }}
              className={styles.checkbox}
            />
            <span className={styles.customCheckbox}></span>
          </label>

          <div className={task.completed ? styles.completed : ''}>
            {task.title}
          </div>

          <div className={styles.contentButtons}>
            <Link href={`/taskDetails/${task.id}`}>
              <button className={styles.infoTaskButton}>
                <CgInfo />
              </button>
            </Link>

            <button
              className={styles.removeTaskButton}
              onClick={() => { handleTaskRemove(task.id); }}
            >
              <GoTrash />
            </button>
          </div>
        </div>
      ) : (
        <p>Tarefa não encontrada</p>
      )}
    </div>
  );
};