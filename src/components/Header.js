import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="/">E-Commerce Store</a>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="auth-buttons">
                    <button className="register-button">Register</button>
                    <button className="login-button">Login</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

