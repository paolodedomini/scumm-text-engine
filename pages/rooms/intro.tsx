import React from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";

import { DataApp } from "@/utility/types";
import Take from "@/components/take";
import Open from "@/components/open";
import Image from "next/image";
import Navigation from "@/components/navigation/navigation";
type Props = {};

const IntroScene = (props: Props) => {
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
          <h1>Capitolo 1.</h1>
          <p>
            {" "}
            Finalmente è domenica e stai preparando i pancake per la colazione.{" "}
            <br /> Hai già pronto sul tavolo{" "}
            <Take testo="dello sburro" oggetto={room.sburro} />,{" "}
            <Take testo="della merda" oggetto={room.merda} />{" "}
            <Open
              chiave="key_02"
              testoClose="ed un pancake fumante."
              testoOpen="Ora è imburrato e pronto per essere mangiato, lo divori in un attimo."
              enigma={`${room.name}-enigma1`}
            />
            <Open
              chiave="key_03"
              testoClose="Adesso manca solo assaggiare la merda..."
              testoOpen="Mmmh...Ottima anche quella!"
              dipendenze={[`${room.name}-enigma1`]}
              enigma={`${room.name}-enigma2`}
            />
          </p>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default IntroScene;
