import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/OurCollections.css';

const OurCollection = () => {
  const products = [
    {
      name: "Wood Frame",
      imgSrc: "/WoodenGiftItems/Carved Bliss Frame.jpg",
      rating: 5,
      price: 1850,
      oldPrice: 2500,
      shippingFee: "Free Shipping",
    },
    {
      name: "Gift Humper",
      imgSrc: "/SpecialtyCustomizedFrames/Eternal Bond Nikkah Board.jpg",
      rating: 4,
      price: 1000,
      oldPrice: 2000,
      shippingFee: "Shipping: LKR 200",
    },
    {
      name: "Wood Lamp",
      imgSrc: "/HomeDecorLifestyleGifts/IMG_5722.jpg",
      rating: 4,
      price: 2200,
      oldPrice: 3000,
      shippingFee: "Free Shipping",
    },
    {
      name: "Couple Mugs",
      imgSrc: "/HomeDecorLifestyleGifts/Heart & Hearth Mug Line.jpg",
      rating: 3,
      price: 1900,
      oldPrice: 2200,
      shippingFee: "Shipping: LKR 300",
    },
    {
      name: "Customized Frame",
      imgSrc: "/WoodenGiftItems/IMG-20241207-WA0273.jpg",
      rating: 5,
      price: 2400,
      oldPrice: 2800,
      shippingFee: "Free Shipping",
    },
    {
      name:"Gift Box",
      imgSrc:"/LuxuryCustomizedGiftBoxes/Premium Gift Hampers.JPG",
      rating:"4.5",
      price:"550",
      oldPrice:"850",
      shippingFee:"Shipping: LKR 100",
    },
    {
      name:"Flower Boquay",
      imgSrc:"/FlowerAndRomanticGifts/Blooming Love Symphony.jpg",
      rating:"3.78",
      price:"1000",
      oldPrice:"1200",
      shippingFee:"Free Shipping",
    },
    {
      name: "Love card",
      imgSrc: "/otherimages/IMG-20241207-WA0053.jpg",
      rating: 5,
      price: 2400,
      oldPrice: 2800,
      shippingFee: "Shipping: LKR 50",
    },
    {
      name:"Velantain Gift",
      imgSrc:"/FlowerAndRomanticGifts/ChocoPetal Delight.JPG",
      rating:"4.5", text:"2000 sold",
      price:"1850",
      oldPrice:"2000",
      shippingFee:"Shipping: LKR 200",
    },
    {
      name:"Chocolate hamper",
      imgSrc:"/FlowerAndRomanticGifts/Chocolate Kissed Blooms.jpg",
      rating:"4.78",
      price:"950",
      oldPrice:"1100",
      shippingFee:"Free Shipping"
    }
  ];

  return (
    <section className="our-collection">
      <h2 className="section-title">Our Collection</h2>
      <Row xs={1} md={5} className="g-4">
        {products.map((product, index) => (
          <Col key={index}>
            <Card className="ourcollection-product-card">
              <div className="product-image-container">
                <Card.Img variant="top" src={product.imgSrc} />
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div className="ourcollection-product-rating">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i} className="ourcollection-star">&#9733;</span>
                  ))}
                </div>
                <div className="product-price">
                  <span className="old-price">LKR {product.oldPrice}</span>
                  <span className="new-price">LKR {product.price}</span>
                </div>
                <div className="shipping-fee">{product.shippingFee}</div>
                <div className="product-preview-btn-container">
                  <Button className="preview-btn">See Preview</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default OurCollection;
