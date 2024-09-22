import React from 'react';
import styles from "./Header.module.css";
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Image 
          src="/logo-todo.svg" 
          alt="" 
          width={100} 
          height={100} 
          className={styles.logo} 
          priority
        />
      </div>
    </div>

  )
}