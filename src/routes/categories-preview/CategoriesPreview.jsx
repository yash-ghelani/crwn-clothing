import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories-selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import LoadingScreen from "../../components/loading/Loading";

const CategoriesPreview = () => {
  // const categoryMap = useSelector(state => state.category.categoryMap);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
