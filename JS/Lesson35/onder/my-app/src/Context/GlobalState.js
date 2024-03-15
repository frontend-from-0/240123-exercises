import { createContext, useEffect, useState } from "react";
import { BD_SEARCH_BASE_URL } from "../urls";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [recipesnew, setRecipesnew] = useState([]);
  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => setRecipesnew(data.meals));
  }, []);
  return (
    <GlobalContext.Provider value={{ recipesnew, setRecipesnew }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
