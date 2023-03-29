import { TypeInventory } from "./types";
function isInInventory(inventory: TypeInventory[], item: TypeInventory) {
  if (inventory && item) {
    return inventory.find((oggetto) => {
      console.log(oggetto.id === item.id);

      return oggetto.id === item.id;
    });
  }
}
export { isInInventory };
