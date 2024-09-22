import React from 'react';
import styles from "./NoTask.module.css";
import Image from 'next/image';

export default function NoTask() {
  return (
    <div className={styles.noTask}>
      <Image
        className='image'
        src="/notask.svg"
        alt=""
        width={60}
        height={100}
      />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
