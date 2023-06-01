import React, { useState } from "react";
import styles from './header.module.css';
import { FaReact } from 'react-icons/fa';
import { SiVite, SiYarn } from 'react-icons/si';

export default function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <header className={styles.header}>
      <div>
      <p className={styles.title}>
        <span>Sh!</span>
        <span className={styles.title1}>to</span>
        <span className={styles.title2}>do</span>
      </p>
      <p className={styles.icons}>
        <span><FaReact /></span>&nbsp;
        <span><SiVite /></span>&nbsp;
        <span><SiYarn /></span>&nbsp;
      </p>

      </div>
      <div className={styles.newTaskForm}>
      <form onSubmit={handleSubmit}>
        <input id="title" type="text" value={title} placeholder="add a new task" onChange={onChangeTitle} required />
        <button title='Add Task'>+</button>
      </form>

      </div>

    </header>
  )
}
