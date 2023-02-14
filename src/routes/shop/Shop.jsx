import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/categories-action";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../../components/category/Category";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");

      // dispatch({type: CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, payload: categoryMap})
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
