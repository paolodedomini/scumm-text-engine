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
        return { ...state, oggettoSelezionato: action.payload };
      }
      case "setEnigmiRisolti": {
        return {
          ...state,
          enigmiRisolti: [...state.enigmiRisolti, action.payload],
        };
      }
      case "setLocalStorage": {
        return action.payload;
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

  useEffect(() => {
    if (state.oggettoInInventario?.id) {
      dispatch({ type: "setInventory", payload: state.oggettoInInventario });
    }
  }, [state.oggettoInInventario]);

  useEffect(() => {
    if (state.inventory?.length) {
      localStorage.setItem("data", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      dispatch({ type: "setLocalStorage", payload: JSON.parse(data) });
    }
  }, []);

  //provider che wrappa i componenti che devono ricevere i dati
  return (
    <ShareContext.Provider value={{ data: state, dispatch: dispatch }}>
      {children}
    </ShareContext.Provider>
  );
};

export { ShareContext, ContextData };
