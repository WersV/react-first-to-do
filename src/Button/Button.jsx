import styled from "./Button.module.css";

export function Button(props) {
  return (
    <button className={styled.btn} onClick={props.onClick}>
      +
    </button>
  );
}
