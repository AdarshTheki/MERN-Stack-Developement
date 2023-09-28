import { createContext, useState } from "react";

// Firstly create the context
export const UserContext = createContext();

// secondly create the provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
