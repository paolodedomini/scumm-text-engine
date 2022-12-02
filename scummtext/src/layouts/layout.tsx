import type { JSX } from "solid-js";
import style from "./layout.module.scss";

function MainLayout(props: { children: JSX.Element }) {
  return <div class="wrapperMainLayout">{props.children}</div>;
}
function RoomLayout(props: { children: JSX.Element; imageRoom: string }) {
  return (
    <div class={style.wrapperRoomLayout}>
      <div class={style.wrapperImage}>
        <img src={props.imageRoom} />
      </div>{" "}
      <div class={style.wrapperText}>{props.children}</div>
    </div>
  );
}

export { MainLayout, RoomLayout };
