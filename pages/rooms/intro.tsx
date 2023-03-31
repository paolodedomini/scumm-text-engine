import React, { useState } from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { isInInventory } from "@/utility/functions";
import { TypeData, TypeInventory } from "@/utility/types";
import Take from "@/components/take";

type Props = {};

const IntroScene = (props: Props) => {
  const dataFromContext = useContext<TypeData | null>(ShareContext);
  const [oggettoInTesto, setOggettoInTesto] = useState(false);

  const room = {
    name: "intro",
    chiave_porta: {
      id: "key_01",
      name: "una chiave",
    },
    sega_fagiana: {
      id: "key_02",
      name: "una bella sega fagiana",
    },
  };

  function apro() {
    const isObjectIn = isInInventory(
      dataFromContext?.data.inventory ? dataFromContext?.data.inventory : [],
      dataFromContext?.data.oggettoSelezionato.id
        ? dataFromContext?.data.oggettoSelezionato.id
        : ""
    );
    if (isObjectIn) {
      setOggettoInTesto(true);
    } else {
      setOggettoInTesto(false);
    }
    console.log(dataFromContext?.data.inventory);
  }

  return (
    <div>
      <Take testo="una chiave" oggetto={room.chiave_porta} />
      <Take testo="una sega fagiana" oggetto={room.sega_fagiana} />
      <span className="B" onClick={() => apro()}>
        una porta
      </span>{" "}
      {oggettoInTesto ? <span>aperta</span> : <span>chiusa</span>}
    </div>
  );
};

export default IntroScene;
