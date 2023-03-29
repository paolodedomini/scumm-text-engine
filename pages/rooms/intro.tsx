import React, { useState } from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { isInInventory } from "@/utility/functions";
import { TypeData, TypeInventory } from "@/utility/types";

type Props = {};

const IntroScene = (props: Props) => {
  const dataFromContext = useContext<TypeData | null>(ShareContext);
  const [oggettoInTesto, setOggettoInTesto] = useState(false);

  const room = {
    name: "intro",
  };

  console.log(dataFromContext?.data.inventory);

  function aproPorta() {
    const isObjectIn = isInInventory(
      dataFromContext?.data.inventory ? dataFromContext?.data.inventory : [],
      dataFromContext?.data.oggettoSelezionato
        ? dataFromContext?.data.oggettoSelezionato
        : {}
    );

    if (isObjectIn) {
      setOggettoInTesto(true);
    } else {
      setOggettoInTesto(false);
    }
  }

  function prendoChiave() {
    dataFromContext?.data.setOggettoInInventario({
      id: "key_01",
      name: "una chiave",
    });
  }

  return (
    <div>
      <span className="A" onClick={() => prendoChiave()}>
        una chiave
      </span>
      <span className="B" onClick={() => aproPorta()}>
        una porta
      </span>{" "}
      {oggettoInTesto ? <span>aperta</span> : <span>chiusa</span>}
    </div>
  );
};

export default IntroScene;
