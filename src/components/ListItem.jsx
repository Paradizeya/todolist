import React from "react";
import styles from "../styles/list.module.scss";
import SvgSelector from "./SvgSelector";

export default function ListItem({
  id,
  text,
  isDone,
  toggleItem,
  editItem,
  deleteItem,
}) {
  return (
    <li>
      <label>
        <input
          onChange={(event) => {
            toggleItem(id, event.target.checked);
          }}
          type="checkbox"
          checked={isDone}
        />
        <span>{text}</span>
        <div className={styles.controls}>
          <button
            onClick={() => {
              editItem(id, text);
            }}
          >
            <SvgSelector id="edit" />
          </button>
          <button
            onClick={() => {
              deleteItem(id);
            }}
          >
            <SvgSelector id="delete" />
          </button>
        </div>
      </label>
    </li>
  );
}
