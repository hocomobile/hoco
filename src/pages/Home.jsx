import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';

const Home = () => {
    const [gifLoaded, setGifLoaded] = useState(false);
    const gifRef = useRef(null);

    const featuredProducts = [
        {
            id: 1,
            name: "iPhone 17 Pro",
            image: "/images/products/iphone17pro.jpg",
            description: "The ultimate iPhone with advanced camera and performance.",
            link: "/products" // Changed to products page
        },
        {
            id: 2,
            name: "Samsung Galaxy S26 Ultra",
            image: "/images/products/samsungs26ultra.jpg",
            description: "The most powerful Galaxy with revolutionary camera technology.",
            link: "/products" // Changed to products page
        },
        {
            id: 3,
            name: "iPad Pro M4 (12.9\")",
            image: "/images/products/ipadprom4-129.jpg",
            description: "Unleash your creativity with the new iPad Pro and M4 chip.",
            link: "/products" // Changed to products page
        },
        {
            id: 4,
            name: "MacBook Air 15\"",
            image: "/images/products/macbookair15.jpg",
            description: "Thin. Light. Powerful. The new 15-inch MacBook Air.",
            link: "/products" // Changed to products page
        }
    ];

    useEffect(() => {
        const img = new Image();
        img.src = "/images/hero-bg.gif";
        img.onload = () => {
            setGifLoaded(true);
        };
        img.onerror = () => {
            console.error("Failed to load GIF");
        };
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                {!gifLoaded && (
                    <div className="gif-placeholder">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                <div className="hero-bg">
                    <img
                        ref={gifRef}
                        src="/images/hero-bg.gif"
                        alt="Technological background animation"
                        className={`hero-gif ${gifLoaded ? 'loaded' : ''}`}
                    />
                </div>

                <div className="hero-card">
                    <div className="hero-card-content">
                        <p className="hero-subtitle">DUBLIN'S PREMIUM MOBILE STORE</p>
                        <h1 className="hero-title">Your tech.<br />Elevated.</h1>
                        <p className="hero-description">Premium smartphones, tablets, accessories, and expert repair services — all under one roof.</p>
                        <div className="hero-buttons">
                            <a href="/products" className="btn-primary">Explore Products →</a>
                            <a href="/repair" className="btn-secondary">Book a Repair</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Repair Service Section */}
            <div className="repair-section">
                <div className="repair-content">
                    <div className="repair-image">
                        <img src="/images/repair-service.jpg" alt="Repair service" />
                    </div>
                    <div className="repair-text">
                        <p className="section-label">REPAIR SERVICE</p>
                        <h2>We fix it.<br />Fast.</h2>
                        <p className="repair-description">From cracked screens to battery replacements, our certified technicians handle it all. Most repairs completed same day.</p>
                        <div className="repair-features">
                            <div className="feature-item">
                                <span className="feature-icon">⚙</span>
                                <span>Expert Technicians</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">⏱</span>
                                <span>Quick Turnaround</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🛡</span>
                                <span>Warranty Included</span>
                            </div>
                        </div>
                        <a href="/repair" className="btn-primary">Learn More →</a>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="featured-section">
                <div className="section-container">
                    <h2 className="section-title">Featured Products</h2>
                    <div className="featured-grid">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <a href="/stores" className="btn-outline">Find in Store</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="section-container">
                    <h2 className="section-title">Why Choose Hoco?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">★</div>
                            <h3>Premium Selection</h3>
                            <p>We carefully curate only the best devices and accessories from trusted brands.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">👥</div>
                            <h3>Expert Team</h3>
                            <p>Our knowledgeable staff provide personalized advice to find your perfect device.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">😊</div>
                            <h3>Customer Focus</h3>
                            <p>Your satisfaction is our priority with exceptional service at every step.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🛠</div>
                            <h3>Complete Service</h3>
                            <p>From purchase to repair, we support you throughout your device's lifecycle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;