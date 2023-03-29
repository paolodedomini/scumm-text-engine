import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
type Props = {};
function Inventory({}: Props) {
  const dataFromContext = useContext(ShareContext);
  const dataInventory = dataFromContext?.data.inventory;
  return <div>{dataInventory != undefined && dataInventory[0]?.id}</div>;
}

export default Inventory;
