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

export function UnitProvider({ children }) {
  const [mode, setMode] = useState("");

  return (
    <UnitContext.Provider
      value={{
        context: "Estou consumindo o contexto!",
        mode: mode,
        setMode: setMode,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
}
