import { TypeInventory } from "@/utility/types";
import React, { useState } from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";
import { isInInventory } from "@/utility/functions";

type Props = {
  chiave: string;
  testoClose?: string;
  testoOpen: string;
  dipendenza?: [string];
  enigma?: string;
};

function Open({ testoClose, testoOpen, chiave, dipendenza, enigma }: Props) {
  const [oggettoFromTesto, setOggettoFromTesto] = useState<TypeInventory>({});
  const [oggettoInTesto, setOggettoInTesto] = useState(false);
  const dataFromContext = useContext(ShareContext);

  function apro(chiave: string) {
    const isObjectIn = isInInventory(
      dataFromContext?.data.inventory ? dataFromContext?.data.inventory : [],
      chiave ? chiave : ""
    );

    if (isObjectIn) {
      setOggettoInTesto(true);
      if (enigma) {
        dataFromContext?.data.setEnigmiRisolti((prevState) => [
          ...prevState,
          enigma,
        ]);
      }
    } else {
      setOggettoInTesto(false);
    }
  }

  function checkDipendenza() {
    //se la dipendenza è vuota ritorna true
    if (!dipendenza?.length) {
      return true;
    }
    //se la dipendenza ha degli elementi controlla se presente tra gli enigmi risolti
    if (dipendenza) {
      return dipendenza.some((r) =>
        dataFromContext?.data.enigmiRisolti.includes(r)
      );
    }
  }
  console.log(dataFromContext?.data.inventory, "chiave");

  return checkDipendenza() ? (
    <>
      <span className="B" onClick={() => apro(chiave)}>
        {testoClose}
      </span>{" "}
      <span>{oggettoInTesto && testoOpen}</span>
    </>
  ) : (
    <span>{""}</span>
  );
}

export default Open;
