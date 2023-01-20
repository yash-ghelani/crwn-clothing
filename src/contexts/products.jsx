import { createContext, useState } from "react";

import PRODUCTS from "../products/shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState(PRODUCTS);
  const val = { products, setProducts };

  return (
    <ProductsContext.Provider value={val}> {children} </ProductsContext.Provider>
  );
};
