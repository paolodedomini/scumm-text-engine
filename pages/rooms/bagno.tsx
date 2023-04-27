import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";

import { DataApp } from "@/utility/types";

import Open from "@/components/open";
import Image from "next/image";
type Props = {};

const Bagno = (props: Props) => {
  const dataFromContext = useContext<DataApp | null>(ShareContext);
  console.log(dataFromContext, "dataFromContext");
  const room = {
    name: "intro",
    image: "/images/room1.jpg",

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
    <div className="mainWrapper">
      <div className="immagine">
        <Image src={room.image} alt="room1" className="roomImage" fill />
      </div>

      <div className="testo">
        <div className="innerTesto">
          <h1>Bagno</h1>
          Il lavandino perde acqua, un odore di marcio esce{" "}
          <Open
            chiave="key_02"
            testoClose="dalla tazza"
            testoOpen="Con lo sburro prealpi crei una patina che copre l'odore"
            enigma={`${room.name}-enigma1`}
          />
        </div>
      </div>
    </div>
  );
};

export default Bagno;
