import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // To navigate to the cart page

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]); // Add a quantity property to each product
        navigate('/Cart');
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.replace('LKR', '').trim()) * item.quantity), 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
