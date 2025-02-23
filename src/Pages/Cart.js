import { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../styles/Cart.css'; 
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";


const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-container">
                    <div className="cart-items">
                        {cart.map((product) => (
                            <div key={product.id} className="cart-item">
                                <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Summary</h3>
                        <p>Total Price: LKR {getTotalPrice()}</p>
                        <h4>Payment Methods</h4>
                        <div className="payment-methods">
                                   <FaCcVisa size={40} color="#0057A0" />
                                   <FaCcMastercard size={40} color="#EB001B" />
                                   <FaCcAmex size={40} color="#0077A0" />
                                   <FaCcPaypal size={40} color="#003087" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
