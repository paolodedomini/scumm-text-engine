import { TypeInventory } from "@/utility/types";
import React, { useState } from "react";
import useTake from "@/hooks/useTake";

type Props = { testo: string; oggetto: TypeInventory };

function Take({ testo, oggetto }: Props) {
  const [oggettoFromTesto, setOggettoFromTesto] = useState<TypeInventory>();
  //hook che gestisce il comando take, prende un oggetto al clik e lo mette nell'inventario
  useTake(oggettoFromTesto);
  return (
    <span className="A" onClick={() => setOggettoFromTesto(oggetto)}>
      {testo}
    </span>
  );
}

export default Take;
