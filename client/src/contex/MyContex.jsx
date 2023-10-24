import { Children, createContext, useState } from "react";

export const contex = createContext();

function MyContex({ children }) {
  const [allUsersData, setAllUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <contex.Provider
      value={{ allUsersData, setAllUsersData, searchText, setSearchText }}
    >
      {children}
    </contex.Provider>
  );
}

export default MyContex;
