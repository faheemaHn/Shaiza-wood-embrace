import React, { useState, useEffect } from 'react';
import '../styles/SuperDeal.css';

import CategorySection from '../components/CategorySection';

const SuperDeal = () => {
  const deadline = new Date().getTime() + 10000000;  //  deadline for the sale

  return (
    <div className="super-deal-page">
      <div className="super-deal-container">
        <aside className="left-panel">
          <CategorySection /> 
          <div className="filter-options">
            <h3>Shipping Method</h3>
            <select>
              <option>Free Shipping</option>
              <option>Paid Shipping</option>
            </select>
            <h3>Delivery Date</h3>
            <input type="date" min={getMinDeliveryDate()} />
            <h3>Sort By</h3>
            <select>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Best Seller</option>
            </select>
          </div>
        </aside>

        {/* right side section */}
        <main className="right-panel">
          <div className="header-banner">
            <h1>Super Deals</h1>
            <CountdownTimer deadline={deadline} />
          </div>
          <div className="superdeal-product-grid">
            {sampleProducts.map((product) => (
              <div key={product.id} className="superdeal-product-card">
                <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />

                <h4>{product.name}</h4>
                {product.shipping === 'Free' && <span className="free-shipping-badge">Free Shipping</span>}
                <div className="price-container">
                  <p className="discounted-price">{product.discountedPrice}</p>
                  {product.discount && <p className="original-price">{product.originalPrice}</p>}
                </div>
                <p>Shipping: {product.shipping}</p>
                <div className="superdeal-product-rating">
                  {Array(product.rating).fill().map((_, i) => (
                    <span key={i} className="superdeal-star">⭐</span>
                  ))}
                </div>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

// Countdown Timer Component
const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  function calculateTimeLeft(deadline) {
    const now = new Date().getTime();
    const timeRemaining = deadline - now;
    return {
      hours: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
      minutes: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      seconds: Math.floor((timeRemaining % 1000) / 100),
    };
  }

  return (
    <div className="countdown-timer">
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </div>
  );
};

const sampleProducts = [
  {
    id: 1,
    name: 'Wooden Whimsy Frame',
    discountedPrice: 'LKR 650',
    originalPrice: 'LKR 850',
    shipping: 'Free',
    image: '/WoodenGiftItems/Wooden Whimsy Frame.jpg',
    discount: true,
    rating: 4, 
  },
  {
    id: 2,
    name: 'Golden Essence Gift Set',
    discountedPrice: 'LKR 800',
    originalPrice: 'LKR 1000',
    shipping: 'LKR 100',
    image: '/LuxuryCustomizedGiftBoxes/Radiance Indulgence Box.jpg',
    discount: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Flower Bouquet',
    discountedPrice: 'LKR 800',
    originalPrice: 'LKR 1000',
    shipping: 'LKR 150',
    image: '/FlowerAndRomanticGifts/Bloom & Bliss Bundle.jpg',
    discount: true,
    rating: 3,
  },
  {
    id: 4,
    name: 'Velvet Roses & Chocolate Temptation',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 1000',
    shipping: 'Free',
    image: '/FlowerAndRomanticGifts/Velvet Roses & Chocolate Temptation.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 5,
    name: 'Bag Set',
    discountedPrice: 'LKR 850',
    originalPrice: 'LKR 1000',
    shipping: 'LKR 230',
    image: '/SHAIZA Special Offer/Amazing Offer Showcase.jpg',
    discount: true,
    rating: 5,
  },
  {
    id: 6,
    name: 'Heart Box',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'Free',
    image: '/LuxuryCustomizedGiftBoxes/customized box.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 7,
    name: 'Premium Gift Hampers',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'Free',
    image: '/LuxuryCustomizedGiftBoxes/Premium Gift Hampers.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 8,
    name: 'Forever Together Box',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'LKR 55',
    image: '/SpecialtyCustomizedFrames/Forever Together Box.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 9,
    name: 'Shaadi Serenity Name Plaque',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'Free',
    image: '/SpecialtyCustomizedFrames/Shaadi Serenity Name Plaque.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 10,
    name: 'Timeless Treasures Frame',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'LKR 300',
    image: '/WoodenGiftItems/Timeless Treasures Frame.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 11,
    name: 'Blissful Blooms & Cocoa Bites',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'LKR 100',
    image: '/FlowerAndRomanticGifts/Blissful Blooms & Cocoa Bites.jpg',
    discount: true,
    rating: 4,
  },
  {
    id: 12,
    name: 'Boxes',
    discountedPrice: 'LKR 900',
    originalPrice: 'LKR 2000',
    shipping: 'Free',
    image: '/SHAIZA Special Offer/IMG_5689.jpg',
    discount: true,
    rating: 4,
  }
];

function getMinDeliveryDate() {
  const today = new Date();
  today.setDate(today.getDate() + 15);
  return today.toISOString().split('T')[0];
}

export default SuperDeal;
