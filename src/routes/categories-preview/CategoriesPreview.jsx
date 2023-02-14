import { useSelector } from "react-redux";

import { selectCategoryMap } from "../../store/category/category-selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {

  // const categoryMap = useSelector(state => state.category.categoryMap);
  const categoryMap = useSelector(selectCategoryMap);

  return (
    <>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
