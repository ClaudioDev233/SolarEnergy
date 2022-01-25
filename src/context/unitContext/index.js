import { createContext, useState } from "react";

/* COMO CRIAR UM CONTEXTO 
1 - Importar createContext do react
2 - atribui createContext para uma variável
  Ex: export const CartContext = createContext([]);
3 - Criar o Provider
4 - Importar o Provider no App.js
5 - Consumir o contexto usando o useContex 
... */

export const UnitContext = createContext([]);

export default function UnitProvider({ children }) {
  return (
    <UnitContext.Provider
      value={{
        context: "teste",
      }}
    >
      {children}
    </UnitContext.Provider>
  );
}
