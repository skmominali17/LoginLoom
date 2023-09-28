import { createContext, useContext, useState } from "react";

export const DbContext = createContext();

export const useDb = () => {
  return useContext(DbContext);
}

export const DbProvider = ({ children }) => {
  const [db, setDb] = useState([]);

  const addToDb = (item) => {
    setDb([...db, item]);
  }

  return (
    <DbContext.Provider value={{ db, addToDb }}>
      {children}
    </DbContext.Provider>
  );
}
