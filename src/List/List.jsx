import styled from "./List.module.css";

export function List({ items, removeItem, handleDone }) {
  const todos = items.map((item) => {
    return (
      <li className={styled.liEl} key={item.id}>
        <span className={`${styled.liSpan} ${item.done && styled.done} `}>
          {item.text}
        </span>
        {!item.done && (
          <button className={styled.btn} onClick={() => handleDone(item.id)}>
            Zrobione
          </button>
        )}
        <button className={styled.btn} onClick={() => removeItem(item.id)}>
          Usuń
        </button>
      </li>
    );
  });

  return (
    <>
      <ul className={styled.list}>{todos}</ul>
    </>
  );
}
