import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import CategorySection from "./CategorySection";
import { BiCart , BiLogIn, BiUserPlus } from "react-icons/bi";

function Header() {
  
  const location = useLocation();
  const isLovePicks = location.pathname === '/LovePicks';

  return (
    <header className={`header ${isLovePicks ? 'love-picks-header' : ''}`}>
      <div className="top-section">
        <div className="logo">Shaiza Wood Embrace</div>
        
        <div className="search-bar-container">
          <input className="search-bar" type="text" placeholder="Search products..." />
          <i className="bi bi-search search-icon"></i>
        </div>

        <div className="nav-right">
        <Link to="/Login" className="icon-button">
            <BiLogIn size={22} /> 
          </Link>
          <Link to="/Register" className="icon-button">
            <BiUserPlus size={22} /> 
          </Link>
         <Link to="/Cart" className="cart-icon">
            <BiCart size={25} color="white" /> 
          </Link>
        </div>
      </div>

      <div className="bottom-section">
        <CategorySection />
        <div className="button-group">
          <Link to="/"><button>Home</button></Link>
          <Link to="/SuperDeal"><button>Super Deals</button></Link>
          <Link to="/WeeklyChoice"><button>Weekly Choice</button></Link>
          <Link to="/LovePicks"><button>Love Picks</button></Link>
         
        </div>
      </div>
    </header>
  );
}

export default Header;
