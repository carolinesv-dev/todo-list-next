import React from 'react';
import styles from "./NoTask.module.css";

export default function NoTask() {
  return (
    <div className={styles.noTask}>
      <img src="/notask.svg" alt="" />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
