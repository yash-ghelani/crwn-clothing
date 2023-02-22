import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  setCategoriesStart,
  setCategoriesSuccess,
  setCategoriesFailure,
} from "../../store/categories/categories-reducer";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../../components/category/Category";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {

      try {
        dispatch(setCategoriesStart());
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(setCategoriesSuccess(categoriesArray));
      } catch (error) {
        dispatch(setCategoriesFailure());
      }


    };

    getCategoriesMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
