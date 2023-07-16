import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [name, setName] = useState("peter");
  return (
    <GlobalContext.Provider value={{ name: name, setName: setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
// import AppContext to wrap the main components

// use global context
const useGlobalContext = () => useContext(GlobalContext);

export {useGlobalContext}