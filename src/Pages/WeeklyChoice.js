import React from 'react';
import '../styles/WeeklyChoice.css';


const weeklyChoice = [
  {
    image: '/SpecialtyCustomizedFrames/Eternal Bond Nikkah Board.jpg',
    name: 'Eternal Love Nikkah Board',
    price: 'LKR 1200',
    Shipping:'Free shipping',
    isTrending: true,
    description:'Celebrate love and faith with this elegant Nikkah name board. Customized with names and wedding dates, it makes a beautiful keepsake for couples.',

  },
  {
    image: '/otherimages/IMG-20241207-WA0282.jpg',
    name: ' Handcrafted Memory Box',
    price: 'LKR 2,500',
    Shipping:'Available island-wide',
    isBestDeal: true,
    description: "Keep your treasured memories safe in this beautifully handcrafted wooden box. Designed with intricate detailing, it's perfect for storing keepsakes, letters, and cherished mementos.",

  },
  {
    image:'/otherimages/IMG-20241207-WA0239.jpg',
    name: ' Personalized Name Plaque',
    price: 'LKR 1,800',
    Shipping: 'Free shipping on orders above LKR 2,000',
    isBestDeal: true,
    description: "Add a personal touch to any space with this elegant wooden name plaque. Choose from a variety of fonts and customize with names or quotes.",


  },
  {
    image:'/FlowerAndRomanticGifts/Petals of Joy & Sweet Bites.jpg',
    name:'Blooming Love Bouquet',
    price:'LKR 3,200',
    Shipping:' Same-day delivery available in Colombo',
    isTrending: true,
    description: "A romantic arrangement of handcrafted wooden roses. This bouquet symbolizes everlasting love and is perfect for anniversaries or birthdays."
     ,
  },
  {
    image:'/LuxuryCustomizedGiftBoxes/Golden Essence Gift Set.jpg',
    name:'Ultimate Surprise Box',
    price:'LKR 4,500',
    Shipping:'Free gift wrapping available',
    isTrending:true,
    description: "Unbox happiness with our Ultimate Surprise Box! A luxurious collection of chocolates, mini wooden keepsakes, and a personalized note."
    ,
  },
  {
    image:'/WoodenGiftItems/Nikaah Frame.jpg',
    name:'Couple’s Memory Frame',
    price:'LKR 2,200',
    Shipping:'Available island-wide',
    isBestDeal:true,
    description: "Capture your love story with our Couple’s Memory Frame. Customized with your favorite quote or names, it adds a romantic touch to any space."
    ,
  },
  {
    image: '/FlowerAndRomanticGifts/Bloom & Bliss Bundle.jpg',
    name: 'Sweet Blossoms Bouquet',
    price: 'LKR 2,800',
    Shipping: 'Express delivery available',
    isTrending: true,
    description: "Express your love with this vibrant bouquet of handcrafted wooden flowers. A perfect gift to brighten someone's day with everlasting beauty."
  },
  {
    image: '/LuxuryCustomizedGiftBoxes/Timeless Treasure Box.jpg',
    name: 'Elegant Treats Hamper',
    price: 'LKR 5,200',
    Shipping: 'Delivery within 2-3 business days',
    isBestDeal: true,
    description: "Indulge your loved ones with this luxurious hamper filled with gourmet treats and personalized keepsakes. Ideal for special celebrations."
  },
  {
    image: '/WoodenGiftItems/Timeless Treasures Frame.jpg',
    name: 'Personalized Name Plaque',
    price: 'LKR 1,800',
    Shipping: 'Nationwide delivery available',
    isTrending: true,
    description: "Add a personal touch to any space with this beautifully crafted wooden name plaque. Perfect for homes, offices, or as a thoughtful gift."
  },
  {
    image: '/otherimages/IMG-20241207-WA0053.jpg',
    name: 'Memorable Moments Scrapbook',
    price: 'LKR 3,000',
    Shipping: 'Gift-ready packaging included',
    isBestDeal: true,
    description: "Preserve cherished memories with this handcrafted scrapbook. Perfect for birthdays, anniversaries, or any special occasion worth remembering."
  }
  
];

const WeeklyChoice = () => {
  return (
    <div className="weekly-choice-page">
      <h1 className="weekly-title">Weekly Choice</h1>
      <div className="weekly-choice-grid">
        {weeklyChoice.length > 0 ? (
          weeklyChoice.map((choice, index) => (
            <div key={index} className="choice-card">
              {/* Conditional Rendering for Badges */}
              {choice.isTrending && <span className="badge trending-badge">Trending</span>}
              {choice.isBestDeal && <span className="badge deal-badge">Best Deal</span>}
              <div className="card-face front">
                <img src={choice.image} alt={choice.name} />
                <h4>{choice.name}</h4>
                <p>{choice.price}</p>
                <p>{choice.Shipping}</p>
              </div>
              <div className="card-face back">
                <p>{choice.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))
          
        ) : (
          <p>No choices available for this week.</p>
        )}
      </div>
    </div>
  );
 
};

export default WeeklyChoice;