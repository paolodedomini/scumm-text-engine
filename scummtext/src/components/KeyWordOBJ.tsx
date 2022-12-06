import { createEffect, createSignal, onMount, Show } from "solid-js";
import type { Ref } from "solid-js";
import style from "./KeyWordOVJ.module.scss";

export default function KeyWordOBJ(props: {
  children: string;
  option: { id: string };
}) {
  const [open, setOpen] = createSignal(false);
  const [getWidth, setWidth] = createSignal();
  //variabile che legge la ref
  let getRef: Ref<Element> | void;

  function keywordRef(el: Ref<Element>) {
    getRef = el;
  }

  createEffect(() => {
    setWidth(() => getRef.offsetWidth);
  });

  return (
    <span
      class={`${style.keywordTxt} ${open() && style.open}`}
      onclick={() => {
        open() === false ? setOpen(true) : console.log("Funzioni ui");
      }}
      ref={(el) => keywordRef(el)}
    >
      {props.children}

      {open() && getWidth() != undefined && Underline(getWidth())}
    </span>
  );
}

function Underline(width) {
  console.log(width);
  return <div class={style.underline}></div>;
}
