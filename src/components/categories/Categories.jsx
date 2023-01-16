import React from 'react'
import CategoryItem from '../category-item/CategoryItem';

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Categories
