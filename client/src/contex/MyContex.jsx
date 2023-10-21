import { Children, createContext, useState } from "react";

export const contex = createContext();

function MyContex({ children }) {
  const [allUsersData, setAllUsersData] = useState([]);
  return (
    <contex.Provider value={{ allUsersData, setAllUsersData }}>
      {children}
    </contex.Provider>
  );
}

export default MyContex;
