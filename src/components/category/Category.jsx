import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/category";
import ProductCard from "../product-card/ProductCard";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-page-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
