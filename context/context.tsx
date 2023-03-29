import type { TypeData, TypeInventory } from "@/utility/types";
import React, { createContext, useEffect, useState } from "react";

const ShareContext = createContext<TypeData | null>(null);

const ContextData = ({ children }: any) => {
  const [oggettoInInventario, setOggettoInInventario] = useState<TypeInventory>(
    {}
  );
  const [inventory, setInventory] = useState<TypeInventory[]>([]);

  const dataToShare: TypeData = {
    data: {
      inventory: inventory,
      oggettoInInventario: oggettoInInventario,
      setOggettoInInventario: setOggettoInInventario,
    },
  };

  useEffect(() => {
    if (oggettoInInventario.id) {
      setInventory((prev) => {
        if (!prev.length) {
          return [oggettoInInventario];
        } else {
          const filteredInventory = prev.filter(
            (item) => item.id !== oggettoInInventario.id
          );
          return [...filteredInventory, oggettoInInventario];
        }
      });
    }
  }, [oggettoInInventario]);

  //provider che wrappa i componenti che devono ricevere i dati
  return (
    <ShareContext.Provider value={dataToShare}>
      {children}
    </ShareContext.Provider>
  );
};

export { ShareContext, ContextData };
