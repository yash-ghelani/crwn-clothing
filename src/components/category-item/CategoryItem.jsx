import { useNavigate } from "react-router-dom";
import "./category-item.scss";


const CategoryItem = ({ imageUrl, title }) => {

  const navigate = useNavigate();

  const handleNavigateCategory = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className="index-category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container" onClick={handleNavigateCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
