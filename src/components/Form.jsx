import React, { useState } from "react";
import styles from "../styles/form.module.scss";

export default function Form({ addItem }) {
  const [item, setItem] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setItem("");
    if (item === "") return;
    addItem(item);
  };

  return (
    <form onSubmit={submitHandler} className={styles.todoForm}>
      <label htmlFor="item">Enter new TODO</label>
      <div className={styles.todoForm__inputField}>
        <input
          placeholder=" "
          type="text"
          id="item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <span>...✍️</span>
      </div>
      <button className={styles.todoForm__btn}>Add new TODO</button>
    </form>
  );
}
