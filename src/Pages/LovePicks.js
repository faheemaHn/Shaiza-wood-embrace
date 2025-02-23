import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/LovePicks.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const LovePicks = () => {
    const { addToCart } = useContext(CartContext);

    const productSections = [
        {
            title: "Valentine's Day",
            products: [
                { id: 1, image: '/FlowerAndRomanticGifts/Petal Embrace.jpg', name: 'Rose Bouquet',description: 'Beautiful bouquet of fresh red roses.', price: 'LKR 1200',hearts: 3  },
                { id: 2, image: '/FlowerAndRomanticGifts/Romantic Rose & Cocoa Treasure.jpg', name: 'Chocolate Box',description: 'Assorted chocolates with a romantic touch.', price: 'LKR 2000',hearts: 4 },
                { id: 3, image: '/FlowerAndRomanticGifts/teddy.jpg', name: 'Teddy Bear', description: 'Cute teddy bear for your loved one.', price: 'LKR 1500', hearts: 2 },
                { id: 4, image: '/FlowerAndRomanticGifts/balloon.jpg', name: 'Heart Balloons', description: 'Set of heart-shaped balloons.', price: 'LKR 800', hearts: 3 },
                { id: 5, image: '/FlowerAndRomanticGifts/perfume.jpg', name: 'Perfume', description: 'Romantic fragrance for special moments.', price: 'LKR 2500', hearts: 4 },
                { id: 6, image: '/FlowerAndRomanticGifts/nacless.jpg', name: 'Necklace', description: 'Elegant heart-shaped necklace.', price: 'LKR 3000', hearts: 3 },
                { id: 7, image: '/FlowerAndRomanticGifts/album.jpg', name: 'Photo Album', description: 'Memorable photo album for couples.', price: 'LKR 1800', hearts: 2 },
                { id: 8, image: '/FlowerAndRomanticGifts/rosechocalate.jpg', name: 'Rose Chocolate', description: 'Comfy cushion with love quotes.', price: 'LKR 1000', hearts: 3 },
                { id: 9, image: '/FlowerAndRomanticGifts/braclate.jpg', name: 'Bracelet', description: 'Stylish bracelet for your partner.', price: 'LKR 900', hearts: 4 },
                { id: 10, image: '/FlowerAndRomanticGifts/candle.jpg', name: 'Scented Candle', description: 'Romantic scented candle.', price: 'LKR 750', hearts: 3 }
            ],
        },
        {
            title: "Birthday",
            products: [
                { id: 3, image: '/FlowerAndRomanticGifts/birthdayCake.jpg', name: 'Birthday Cake',description: 'Delicious chocolate birthday cake.', price: 'LKR 1300' },
                { id: 4, image: '/FlowerAndRomanticGifts/gifthamper.jpg', name: 'Gift Hamper', description: 'Surprise hamper with assorted goodies.', price: 'LKR 1400' },
                { id: 13, image: '/FlowerAndRomanticGifts/Birthday.jpg', name: 'Birthday Card', description: 'Handmade birthday card.', price: 'LKR 300' },
                { id: 14, image: '/FlowerAndRomanticGifts/Toy.jpg', name: 'Stuffed Toy', description: 'Cute stuffed toy for birthday gifts.', price: 'LKR 1100' },
                { id: 15, image: '/FlowerAndRomanticGifts/FlowerBaket.jpg', name: 'Flower Basket', description: 'Fresh flower basket for birthdays.', price: 'LKR 2000' },
                { id: 16, image: '/FlowerAndRomanticGifts/Watch.jpg', name: 'Watch', description: 'Stylish watch for birthday gifts.', price: 'LKR 3200' },
                { id: 17, image: '/FlowerAndRomanticGifts/Chocolates.jpg', name: 'Chocolate Box', description: 'Delicious assorted chocolates.', price: 'LKR 950' },
                { id: 18, image: '/FlowerAndRomanticGifts/BalloonSet.jpg', name: 'Balloon Set', description: 'Colorful birthday balloons.', price: 'LKR 600' },
                { id: 19, image: '/FlowerAndRomanticGifts/Mugs.jpeg', name: 'Birthday Mug', description: 'Customized birthday mug.', price: 'LKR 550' },
                { id: 20, image: '/FlowerAndRomanticGifts/KeyChain.jpg', name: 'Keychain', description: 'Personalized birthday keychain.', price: 'LKR 350' }
            ],
        },
        {
            title: "Anniversary",
            products: [
                { id: 5, image: '/FlowerAndRomanticGifts/mug.jpg', name: 'Couple Mug', description: 'Customized mug for couples.',  price: 'LKR 850' },
                { id: 6, image: '/FlowerAndRomanticGifts/frame.jpg', name: 'Photo Frame',description: 'Elegant wooden photo frame.', price: 'LKR 650' },
                { id: 23, image: '/FlowerAndRomanticGifts/anniversaryCake.jpg', name: 'Anniversary Cake', description: 'Special cake for anniversaries.', price: 'LKR 1 800' },
                { id: 24, image: '/FlowerAndRomanticGifts/CoupleTshirt.jpg', name: 'Couple T-shirt', description: 'Matching T-shirts for couples.', price: 'LKR 2200' },
                { id: 25, image: '/FlowerAndRomanticGifts/PhotoCollage.jpeg', name: 'Photo Collage', description: 'Beautiful photo collage frame.', price: 'LKR 2500' },
                { id: 26, image: '/FlowerAndRomanticGifts/PerfumeSet.jpg', name: 'Perfume Set', description: 'Fragrance set for couples.', price: 'LKR 3000' },
                { id: 27, image: '/FlowerAndRomanticGifts/LoveLetter.webp', name: 'Love Letter', description: 'Handwritten love letter.', price: 'LKR 400' },
                { id: 28, image: '/FlowerAndRomanticGifts/CandleSet.jpg', name: 'Candle Set', description: 'Romantic scented candle set.', price: 'LKR 1200' },
                { id: 29, image: '/FlowerAndRomanticGifts/MemoryBook.jpeg', name: 'Memory Book', description: 'Customized memory book.', price: 'LKR 1600' },
                { id: 30, image: '/FlowerAndRomanticGifts/JewelryBox.jpg', name: 'Jewelry Box', description: 'Elegant jewelry box.', price: 'LKR 2800' }
            ],
        }
    ];


    return (
        <div className="love-picks">
            <h2>Love Picks</h2>
            <div className="love-product-sections-row">
                {productSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="love-product-section">
                        <h3>{section.title}</h3>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                            spaceBetween={10}
                            slidesPerView={2}
                            className="love-product-slider"
                        >
                            {section.products.map((product) => (
                                <SwiperSlide key={product.id} className="love-product-item">
                                    <motion.div className="love-card" whileHover={{ scale: 1.05 }}>
                                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <p>{product.price}</p>
                                        <button className="shop-now-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LovePicks;
