import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Import default Swiper styles
import "swiper/css/navigation"; // Import navigation styles

import "../styles/Header.css";
import "../styles/HeroSection.css";
import "../styles/CategorySection.css";
import "../styles/ProductGrid.css";

function ProductGrid() {
  const [woodItemsVisible, setWoodItemsVisible] = useState(false);
  const [loversSpecialVisible, setLoversSpecialVisible] = useState(false);
  const [bigSaveVisible, setBigSaveVisible] = useState(false);

  const toggleViewMore = (section) => {
    if (section === "woodItems") setWoodItemsVisible(!woodItemsVisible);
    else if (section === "loversSpecial") setLoversSpecialVisible(!loversSpecialVisible);
    else if (section === "bigSave") setBigSaveVisible(!bigSaveVisible);
  };

  const productSections = [
    {
      title: "Wood Items",
      products: [
        { name: "Timeless Treasures Frame", oldPrice: 2500, newPrice: 1850, imgSrc: "/WoodenGiftItems/Timeless Treasures Frame.jpg" },
        { name: "Bouquet of Bliss Chocolate Charm", oldPrice: 2000, newPrice: 1000, imgSrc: "/FlowerAndRomanticGifts/Bouquet of Bliss & Chocolate Charm.jpg" },
        { name: "ChocoPetal", oldPrice: 3000, newPrice: 2200, imgSrc: "/FlowerAndRomanticGifts/ChocoPetal Delight.jpg" },
        { name: "Petal Embrace", oldPrice: 5000, newPrice: 4500, imgSrc: "/FlowerAndRomanticGifts/Petal Embrace.jpg" },
      ],
      visible: woodItemsVisible,
      toggle: () => toggleViewMore("woodItems"),
    },
    {
      title: "Lovers Special",
      products: [
        { name: "GoldenGift Set", oldPrice: 1800, newPrice: 1500, imgSrc: "/LuxuryCustomizedGiftBoxes/Golden Essence Gift Set.jpg" },
        { name: "Heart Box", oldPrice: 2200, newPrice: 1900, imgSrc: "/LuxuryCustomizedGiftBoxes/customized box.jpg" },
        { name: "Couple Mug", oldPrice: 1200, newPrice: 1000, imgSrc: "/HomeDecorLifestyleGifts/Morning Bliss Collection.jpg" },
        { name: "Romantic RoseCocoa Treasure", oldPrice: 500, newPrice: 350, imgSrc: "/FlowerAndRomanticGifts/Romantic Rose & Cocoa Treasure.jpg" },
      ],
      visible: loversSpecialVisible,
      toggle: () => toggleViewMore("loversSpecial"),
    },
    {
      title: "Big Save",
      products: [
        { name: "Exclusive Deal of the Day", oldPrice: 3500, newPrice: 3000, imgSrc: "/SHAIZA Special Offer/Exclusive Deal of the Day.jpg" },
        { name: "Flash Sale Frenzy", oldPrice: 2800, newPrice: 2400, imgSrc: "/SHAIZA Special Offer/Flash Sale Frenzy.jpg" },
        { name: "Amazing Offer Showcase", oldPrice: 6000, newPrice: 5000, imgSrc: "/SHAIZA Special Offer/Amazing Offer Showcase.jpg" },
        { name: "Unbeatable Offer Alert", oldPrice: 1500, newPrice: 1200, imgSrc: "/SHAIZA Special Offer/Unbeatable Offer Alert.jpg" },
      ],
      visible: bigSaveVisible,
      toggle: () => toggleViewMore("bigSave"),
    },
  ];

  return (
    <section className="product-grid">
      <div className="product-grid-header">
        <h1>Today's Arrivals</h1>
      </div>

      <div className="product-sections-row">
        {productSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="product-section">
            <h3>{section.title}</h3>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={2}
              className="product-slider"
            >
              {section.products.map((product, index) => (
                <SwiperSlide key={index} className="product-item">
                  <img src={process.env.PUBLIC_URL + product.imgSrc} alt={product.name} />
                  <p>{product.name}</p>
                  <p>
                    <span className="old-price">LKR {product.oldPrice}</span>
                    <span className="new-price">LKR {product.newPrice}</span>
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
