import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";

type Props = {};

const IntroScene = (props: Props) => {
  const dataFromContext = useContext(ShareContext);
  console.log(dataFromContext);

  return <div>intro</div>;
};

export default IntroScene;
