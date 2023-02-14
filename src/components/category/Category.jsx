import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";
import { selectCategoryMap } from "../../store/category/category-selector";
import { CategoryContainer, CategoryTitle } from "./category.style";

const Category = () => {
  const { category } = useParams();

  const categoryMap = useSelector(selectCategoryMap);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
