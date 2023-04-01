import React, { useState } from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { isInInventory } from "@/utility/functions";
import { TypeData, TypeInventory } from "@/utility/types";
import Take from "@/components/take";
import Open from "@/components/open";

type Props = {};

const IntroScene = (props: Props) => {
  const dataFromContext = useContext<TypeData | null>(ShareContext);

  const room = {
    name: "intro",
    chiave_porta: {
      id: "key_01",
      name: "una chiave",
    },
    sburro: {
      id: "key_02",
      name: "Panetto di sburro Prealpi",
    },
    merda: {
      id: "key_03",
      name: "merda fresca di giornata",
    },
  };

  return (
    <div>
      Finalmente è domenica e stai preparando i pancake per la colazione. <br />{" "}
      Hai già pronto sul tavolo{" "}
      <Take testo="dello sburro" oggetto={room.sburro} />{" "}
      <Take testo="della merda" oggetto={room.merda} />{" "}
      <Open
        chiave="key_02"
        testoClose="ed un pancake fumante"
        testoOpen="imburrato e pronto per essere mangiato, lo divori in un attimo."
        enigma="enigma1"
      />
      <Open
        chiave="key_03"
        testoClose="adesso manca solo assaggiare la merda"
        testoOpen="Ottima anche quella"
        dipendenza={["enigma1"]}
      />
    </div>
  );
};

export default IntroScene;
