import { TypeInventory } from "./types";
function isInInventory(inventory: TypeInventory[], item: TypeInventory) {
  return inventory.indexOf(item) != -1;
}
export { isInInventory };
