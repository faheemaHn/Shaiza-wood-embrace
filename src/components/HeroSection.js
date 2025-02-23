import React from "react";
import '../styles/Header.css';
import '../styles/HeroSection.css';
import '../styles/CategorySection.css';
import '../styles/ProductGrid.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function HeroSection() {
  return (
    <section className="hero">
      <div className="carousel-overlay">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/FlowerAndRomanticGifts/bg1.webp"
              alt="Wooden Craft 1"
            />
            <Carousel.Caption>
              <h3>Explore Unique Wooden Gifts</h3>
              <p>Handcrafted with love and care.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/FlowerAndRomanticGifts/bg2.webp"
              alt="Wooden Craft 2"
            />
            <Carousel.Caption>
              <h3>Creative Custom Designs</h3>
              <p>Perfect for every special occasion.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/FlowerAndRomanticGifts/bg1.webp"
              alt="Wooden Craft 3"
            />
            <Carousel.Caption>
              <h3>Island-wide Free Shipping</h3>
              <p>Delivered right to your doorstep.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default HeroSection;
