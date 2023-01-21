import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoryContext } from "../../contexts/category";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoryContext);

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
