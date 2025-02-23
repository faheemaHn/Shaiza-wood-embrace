import React from "react";
import '../styles/Header.css';
import '../styles/HeroSection.css';
import '../styles/CategorySection.css';
import '../styles/ProductGrid.css';


function CategorySection() {
  return (
    <nav className="category-section">
      <select>
        <option>Wooden Gift Items</option>
        <option>Flower & Romantic Gifts</option>
        <option>Luxury & Customized Gift Boxes</option>
        <option>Home Decor & Lifestyle Gifts</option>
        <option>Specialty Themed Gifts</option>
        <option>Specialty Customized Frame</option>
      </select>
    </nav>
  );
}

export default CategorySection;
