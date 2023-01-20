import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryContext } from "../../contexts/category";
import "./shop.scss";

const Shop = () => {
  const { categoryMap } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categoryMap).map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoryMap[title].map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Shop;
