import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories-selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {

  // const categoryMap = useSelector(state => state.category.categoryMap);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
