import { createContext, useState } from "react";

export const navigateContext = createContext();

import React from "react";

function MyContext({ children }) {
  const [isRegister, setIsRegister] = useState("");
  return (
    <navigateContext.Provider value={{ isRegister, setIsRegister }}>
      {children}
    </navigateContext.Provider>
  );
}

export default MyContext;
