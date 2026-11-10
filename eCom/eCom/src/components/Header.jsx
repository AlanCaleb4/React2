import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({Count}) => {
    return (
        <>
            <header>
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src="images/logo-white.png" />

                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">
                        <span className="orders-text">Orders</span>
                    </Link>

                        

                    <Link className="cart-link header-link" to="/cart">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity"></div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Header