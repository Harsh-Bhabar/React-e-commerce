import React from "react";
import "./products-module.css";
import { categories } from "../../data";

export default function FeaturedCategories() {
  return (
    <div className="featuredCategories">
      {categories.map((category) => (
        <div className="category" key={category.id}>
          <img src={category.imgUrl} alt="featuredCategoryImg" />
		  <span className="featuredCategoryText">{category.title}</span>
        </div>
      ))}
    </div>
  );
}
