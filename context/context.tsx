import {
  type DataApp,
  type TypeInventory,
  type TypeDataToShare,
} from "@/utility/types";

import React, { createContext, useEffect, useReducer, useState } from "react";

const ShareContext = createContext<DataApp | null>(null);

const ContextData = ({ children }: any) => {
  function reducer(state: any, action: { type: string; payload: any | null }) {
    switch (action.type) {
      case "setInventory": {
        console.log("action", action.payload);

        const filterInventory = () => {
          if (!state?.inventory?.length) {
            return [action.payload];
          } else {
            const filteredInventory = state.inventory.filter(
              (item: TypeInventory) => item?.id !== action.payload?.id
            );
            return [...filteredInventory, action.payload];
          }
        };

        return { ...state, inventory: filterInventory() };
      }
      case "setOggettoSelezionato": {
        console.log("oggetto selezionato", action.payload);

        return { ...state, oggettoSelezionato: action.payload };
      }
      case "setEnigmiRisolti": {
        return {
          ...state,
          enigmiRisolti: [...state.enigmiRisolti, action.payload],
        };
      }
      default: {
        return state;
      }
    }
  }
  const initialState: TypeDataToShare = {
    inventory: [],
    oggettoSelezionato: {},
    enigmiRisolti: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [dataLocalStorage, setDataLocalStorage] = useState<TypeDataToShare>({});

  useEffect(() => {
    if (state.oggettoInInventario?.id) {
      dispatch({ type: "setInventory", payload: state.oggettoInInventario });
    }
  }, [state.oggettoInInventario]);

  useEffect(() => {
    if (window !== undefined) {
      const isDataInLocalStorage = localStorage.getItem("data");
      if (isDataInLocalStorage) {
        setDataLocalStorage(JSON.parse(isDataInLocalStorage));
      } else {
        setDataLocalStorage(state);
        localStorage.setItem("data", JSON.stringify(dataLocalStorage));
      }
    }
  }, []);

  useEffect(() => {
    setDataLocalStorage(state);
    localStorage.setItem("data", JSON.stringify(dataLocalStorage));
  }, [
    dataLocalStorage.enigmiRisolti,
    dataLocalStorage.inventory,
    dataLocalStorage.oggettoInInventario,
    dataLocalStorage.oggettoSelezionato,
  ]);

  //provider che wrappa i componenti che devono ricevere i dati
  return (
    <ShareContext.Provider value={{ data: state, dispatch: dispatch }}>
      {children}
    </ShareContext.Provider>
  );
};

export { ShareContext, ContextData };
