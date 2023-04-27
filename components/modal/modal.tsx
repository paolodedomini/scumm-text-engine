import React, { ReactNode } from "react";
import style from "./modal.module.scss";
import { ReactDOM } from "react";

type Props = {
  children: ReactNode;
};

function Modal(props: Props) {
  return (
    <>
      <div className={style.backdrop}>Modal</div>
      <div className={style.modal}>{props.children}</div>
    </>
  );
}

export default Modal;
