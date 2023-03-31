import { TypeInventory } from "./types";
import { ShareContext } from "@/context/context";
import { useContext } from "react";

function isInInventory(inventory: TypeInventory[], item: string) {
  if (inventory && item) {
    return inventory.find((oggetto) => {
      return oggetto.id === item;
    });
  }
}

export { isInInventory };
