import React, { createContext } from "react";

interface TypeDataToShare {
  data: number[];
}

const ShareContext = createContext<TypeDataToShare | null>(null);

const ContextData = ({ children }: any) => {
  const dataToShare = {
    data: [1, 2, 3, 4, 5, 6],
  };
  //provider che wrappi i componenti che devono ricevere i dati
  return (
    <ShareContext.Provider value={dataToShare}>
      {children}
    </ShareContext.Provider>
  );
};

export { ShareContext, ContextData };
