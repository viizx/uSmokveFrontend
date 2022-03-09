import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <BasketContext.Provider value={[products, setProducts]}>
      {props.children}
    </BasketContext.Provider>
  );
};
