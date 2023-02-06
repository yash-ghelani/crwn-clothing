import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryPreviewContainer, Title, Preview } from "./category-preview.style"

const CategoryPreview = ({ title, products }) => {

  const navigate = useNavigate();

  const handleGoToCategory = () => {
    navigate(`/shop/${title}`);
  }

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={handleGoToCategory}>{title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
