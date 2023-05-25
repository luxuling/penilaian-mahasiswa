/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const evalContext = createContext();

export default function EvalProvider({ children }) {
  const [allData, setAllData] = useState({});
  return (
    <evalContext.Provider value={{ allData, setAllData }}>
      {children}
    </evalContext.Provider>
  );
}

export const evalState = () => {
  return useContext(evalContext);
};
