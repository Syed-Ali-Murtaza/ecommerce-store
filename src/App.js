//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import './styles.css'; // Import your styles

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Products />
            </main>
            <Footer />
        </div>
    );
}

export default App;

