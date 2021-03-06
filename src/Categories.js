import React from "react";

const Categories = ({ categories, filterFunc }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="filter-btn"
            onClick={() => filterFunc(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
