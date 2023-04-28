import React, { useEffect, useState } from "react";
import { ShareContext } from "@/context/context";
import { useContext } from "react";

type Props = {
  chiave: string;
  testoClose?: string;
  testoOpen: string;
  dipendenze?: [string];
  enigma?: string;
};

function Open({ testoClose, testoOpen, chiave, dipendenze, enigma }: Props) {
  const [oggettoInTesto, setOggettoInTesto] = useState(false);
  const dataFromContext = useContext(ShareContext);

  function apro(chiave: string) {
    const isObjectIn = dataFromContext?.data?.oggettoSelezionato?.id === chiave;

    if (isObjectIn) {
      setOggettoInTesto(true);
      // registra l'avvenuto risolvimento dell'enigma in un array, per le dipendenze
      if (enigma) {
        dataFromContext?.dispatch({
          type: "setEnigmiRisolti",
          payload: enigma,
        });
      }
    }
  }

  function checkdipendenze() {
    //se  dipendenze è vuota ritorna true
    if (!dipendenze?.length) {
      return true;
    }
    //se  dipendenze ha degli elementi controlla se presente tra gli enigmi risolti
    if (dipendenze) {
      return dipendenze.some((r) =>
        dataFromContext?.data?.enigmiRisolti?.includes(r)
      );
    }
  }

  useEffect(() => {
    const isOggettoInInventario = dataFromContext?.data?.inventory?.some(
      (item) => {
        return item.id === chiave;
      }
    );
    console.log("puppa sono risolto", dataFromContext);

    if (isOggettoInInventario) {
      setOggettoInTesto(true);
    }
  }, []);

  return checkdipendenze() ? (
    <>
      <span className="B" onClick={() => apro(chiave)}>
        {testoClose}
      </span>
      <br />
      <span>{oggettoInTesto && testoOpen}</span> <br />
    </>
  ) : (
    <></>
  );
}

export default Open;
