import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories-selector";

import ProductCard from "../product-card/ProductCard";
import { CategoryContainer, CategoryTitle } from "./category.style";
import LoadingScreen from "../loading/Loading"

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading? (
          <LoadingScreen />
        ) : (
          <CategoryContainer>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CategoryContainer>
        )
      }
    </>
  );
};

export default Category;
