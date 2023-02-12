import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoryContext = createContext({
  categoryMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoryMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  const val = { categoryMap };

  return (
    <CategoryContext.Provider value={val}>{children}</CategoryContext.Provider>
  );
};
