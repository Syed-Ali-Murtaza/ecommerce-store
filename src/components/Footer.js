import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>E-Commerce Store</h3>
                <p>
                    At our E-Commerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience.
                    We strive to offer a curated selection of high-quality items that meet the diverse needs and tastes of our valued customers.
                </p>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <ul className="social-links">
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2020 Copyright: ecommerce-store.com</p>
            </div>
        </footer>
    );
};

export default Footer;
