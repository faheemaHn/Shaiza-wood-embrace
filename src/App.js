import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { CartProvider } from './CartContext'; // Import CartProvider

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SuperDeal from "./Pages/SuperDeals";
import WeeklyChoice from "./Pages/WeeklyChoice";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import LovePicks from "./Pages/LovePicks";

import './styles/Header.css';
import './styles/HeroSection.css';
import './styles/CategorySection.css';
import './styles/ProductGrid.css';
import './styles/OurCollections.css';
import './styles/Footer.css';
import "./App.css";

function App() {
    return (
        <Router> {/* Wrap the Router here */}
            <CartProvider> {/* Wrap the CartProvider inside the Router */}
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/SuperDeal" element={<SuperDeal />} />
                        <Route path="/WeeklyChoice" element={<WeeklyChoice />} />
                        <Route path="/LovePicks" element={<LovePicks />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Cart" element={<Cart />} /> {/* Use CartPage */}
                    </Routes>
                    <Footer />
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;
