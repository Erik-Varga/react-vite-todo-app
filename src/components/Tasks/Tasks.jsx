import React from 'react'
import styles from './tasks.module.css';
import Task from '../Task/Task';

export default function Tasks({ tasks, onComplete, onDelete }) {
  const tasksQuantity = tasks.length;
  const completedTasksQuantity = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.title}>
            <p>Created Tasks</p>
            <span>{tasksQuantity}</span>
        </div>
        
        <div className={styles.title}>
            <p>Completed</p>
            <span>{completedTasksQuantity} of {tasksQuantity}</span>
        </div>
      </div>
      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
        ))}
      </div>
    </section>
  )
}
