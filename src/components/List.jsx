import React from "react";
import ListItem from "./ListItem";
import styles from "../styles/list.module.scss";

export default function List({ toDoList, toggleItem, editItem, deleteItem }) {
  return (
    <ul className={styles.list}>
      {toDoList.length === 0 && "No tasks for you!"}
      {toDoList.map((listItem) => {
        return (
          <ListItem
            {...listItem}
            key={listItem.id}
            toggleItem={toggleItem}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
}
