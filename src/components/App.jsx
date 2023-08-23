import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [toDoList, setToDoList] = useState(() => {
    const localToDoList = localStorage.getItem("ITEMS");
    if (localToDoList == null) return [];
    return JSON.parse(localToDoList);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDoList));
  }, [toDoList]);

  const addItem = (item) => {
    setToDoList((prevToDoList) => {
      return [
        ...prevToDoList,
        {
          id: crypto.randomUUID(),
          text: item,
          isDone: false,
        },
      ];
    });
  };

  const toggleItem = (id, isDone) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.map((item) => {
        if (item.id === id) return { ...item, isDone };
        else return item;
      });
    });
  };

  const editItem = (id, text) => {
    const newText = prompt("Edit this TODO:", text);
    setToDoList((prevToDoList) => {
      return prevToDoList.map((item) => {
        if (item.id === id && newText !== null && newText.trim().length !== 0)
          return { ...item, text: newText };
        else return item;
      });
    });
  };

  const deleteItem = (id) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.filter((item) => item.id != id);
    });
  };

  // useEffect(() => {
  //   console.log(toDoList);
  // }, [toDoList]);

  return (
    <>
      <Form addItem={addItem} />
      <hr />
      <h1>TODO List</h1>
      <List
        toDoList={toDoList}
        toggleItem={toggleItem}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
