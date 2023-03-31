import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { TypeInventory } from "@/utility/types";
type Props = {};
function Inventory({}: Props) {
  const dataFromContext = useContext(ShareContext);
  const dataInventory = dataFromContext?.data.inventory;
  const setOggettoSelezionato = dataFromContext?.data.setOggettoSelezionato as (
    oggetto: TypeInventory
  ) => void;
  console.log("test");

  return (
    <div>
      {dataInventory != undefined &&
        dataInventory.map((item) => {
          return (
            <div key={item.id} onClick={() => setOggettoSelezionato(item)}>
              {item.name}
            </div>
          );
        })}
    </div>
  );
}

export default Inventory;
