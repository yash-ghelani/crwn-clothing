import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import PRODUCTS from "../products/shop-data";

export const CategoryContext = createContext({
  categoryMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState(PRODUCTS);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoryMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  const val = { categoryMap, setCategoryMap };

  return (
    <CategoryContext.Provider value={val}>{children}</CategoryContext.Provider>
  );
};
