import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { TypeInventory } from "@/utility/types";
type Props = {};
function Inventory({}: Props) {
  const dataFromContext = useContext(ShareContext);
  const dataInventory = dataFromContext?.data?.inventory;
  const oggettoSelezionato = dataFromContext?.data?.oggettoSelezionato;
  console.log("test", dataInventory?.length);

  return (
    <ul className="inventario">
      {dataInventory != undefined &&
        dataInventory?.length > 0 &&
        dataInventory.map((item) => {
          console.log("puppa", dataFromContext);

          return (
            <li
              className={`${
                item.id === oggettoSelezionato?.id ? "selected" : ""
              }`}
              key={item.id}
              onClick={() =>
                dataFromContext?.dispatch({
                  type: "setOggettoSelezionato",
                  payload: item,
                })
              }
            >
              {item?.name}
            </li>
          );
        })}
    </ul>
  );
}

export default Inventory;
