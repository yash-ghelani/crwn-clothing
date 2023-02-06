import { useNavigate } from "react-router-dom";
import { CategoryContainer, BackgroundImage, Body } from "./category-item.style";

const CategoryItem = ({ imageUrl, title }) => {

  const navigate = useNavigate();

  const handleNavigateCategory = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={handleNavigateCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
