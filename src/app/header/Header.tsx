import React from 'react';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="/logo-todo.svg" />
      </div>
    </div>

  )
}