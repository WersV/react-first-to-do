import styled from "./Input.module.css";

export function Input({ onClick, onChange }) {
  return (
    <div className={styled.inputWrapper}>
      <input type="text" className={styled.input} onChange={onChange} />
      <button className={styled.btn} onClick={onClick}>
        Dodaj
      </button>
    </div>
  );
}
