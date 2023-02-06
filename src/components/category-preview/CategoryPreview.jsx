import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {

  const navigate = useNavigate();

  const handleGoToCategory = () => {
    navigate(`/shop/${title}`);
  }

  return (
    <div className="category-preview-container">
      <h2>
        <span onClick={handleGoToCategory} className="title">{title.toUpperCase()}</span>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
