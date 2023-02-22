import React from "react";
import styles from "../styles/todo.module.scss";
import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState()
  const [date, setDate] = useState()

  const addToDo = () => {
    const arr = [...todo]
    arr.push( )
  }

  return (
    <div className={styles.containerTodo}>
      <div className={styles.AddTodo}>
        <input
        value={title}
        placeholder="Entrer un titre"
        type="text" />
        <input
        value={todo}
        placeholder="Entrer une date"
        type="text" />
        <button
        onClick={addToDo()}
        >Envoyer la Todo</button>
      </div>
      <div className={styles.previewTodo}></div>
    </div>
  );
}
