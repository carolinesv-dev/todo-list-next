'use client'
import React from 'react';
import styles from "./page.module.css";
import Header from './header/Header';
import AddTask from './addTask/AddTask';
import CountTask from './countTask/CountTask';
import NoTask from './noTask/NoTask';
import Tasks from './tasks/Tasks';
import { TaskProvider, useTaskContext } from './taskContext/TaskContext';

const MainContent = () => {
  const {
    tasks,
  } = useTaskContext(); // obtém estado e funções

  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.container}>
          <AddTask />
          <CountTask />

          {tasks.length === 0 ? (
            <NoTask />
          ) : (
            <Tasks />
          )}
        </div>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <TaskProvider>
      <MainContent />
    </TaskProvider>
  )
}