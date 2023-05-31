import React from 'react'
import styles from './task.module.css';
import { BsFillCheckCircleFill, BsTrash } from 'react-icons/bs';

export default function Task({ task, onComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)} >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <BsTrash />
      </button>
    </div>
  )
}
