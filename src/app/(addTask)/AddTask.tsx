'use client'
import React, { useState } from 'react';
import styles from "./AddTask.module.css";
import { useTaskContext } from '../(taskContext)/TaskContext'
import Image from 'next/image';

export default function AddTask () {
  const { handleTaskAddition } = useTaskContext()
  const [inputData, setInputData] = useState('')
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
      handleTaskAddition(inputData); 
      setInputData(''); 
  }

  return (
    <div className={styles.addTask}>
      <input 
        onChange={handleInputChange} 
        type="text" 
        value={inputData}
        placeholder="Adicione uma nova tarefa" 
      />
      <button onClick={handleAddTaskClick}>
        Criar
        <Image 
          src="/plus.svg" 
          alt="" 
          width={14} 
          height={14} />
      </button>
    </div>
  )
}