import { useState } from "react";

import styled from "./App.module.css";
import { Button } from "./Button/Button.jsx";
import { Info } from "./Info/Info.jsx";
import { Input } from "./Input/Input.jsx";
import { List } from "./List/List.jsx";

export default function App() {
  const [isBtnVisable, setIsBtnVisable] = useState(true);
  const [itemsList, setItemsList] = useState([
    {
      id: 1,
      text: "test zad 1",
      done: false,
    },
    {
      id: 2,
      text: "test zad 2",
      done: true,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  function addToDo() {
    setIsBtnVisable(true);
    setItemsList((prevTasks) => [
      ...prevTasks,
      { id: Math.random(), text: inputValue, done: false },
    ]);
    setInputValue("");
  }

  function changeInputValue(sth) {
    setInputValue(sth.target.value);
  }

  function removeTask(id) {
    const filteredItems = itemsList.filter((item) => item.id != id);
    setItemsList(filteredItems);
  }

  function handleTaskDone(id) {
    const mappedItems = itemsList.map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      } else {
        return { ...item };
      }
    });
    console.log(mappedItems);
    setItemsList(mappedItems);
  }

  return (
    <>
      <div className={styled.wrapper}>
        <Info />
        {isBtnVisable && <Button onClick={() => setIsBtnVisable(false)} />}
        {!isBtnVisable && (
          <Input onChange={changeInputValue} onClick={() => addToDo()} />
        )}
        <List
          removeItem={removeTask}
          handleDone={handleTaskDone}
          items={itemsList}
        />
      </div>
    </>
  );
}
