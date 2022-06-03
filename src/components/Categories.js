import React, { useState } from "react";

const Categories = ({ itemCategories, filterItems }) => {
  return (
    <div className="btn-container">
      {itemCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
