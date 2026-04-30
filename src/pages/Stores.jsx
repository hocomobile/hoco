import React from 'react';
import '../styles/Stores.css';

const Stores = () => {
    const stores = [
        {
            id: 1,
            name: "ILAC Shopping Centre",
            address: {
                line1: "Ilac Centre, Unit 59",
                line2: "Parnell Mall, Henry St",
                line3: "North City, Dublin 1, D01 WC79"
            },
            phone: "+353 1 878 8378",
            hours: {
                weekdays: "Mon-Sat: 10:00 - 19:00",
                weekend: "Sun: 11:00 - 18:00"
            },
            image: "/images/shop/shop-exterior.jpg",
            mapUrl: "https://www.google.com/maps?q=Ilac+Centre,+Unit+59,+Parnell+Mall,+Henry+St,+North+City,+Dublin+1,+D01+WC79"
        },
        {
            id: 2,
            name: "Stephen's Green Shopping Centre",
            address: {
                line1: "Unit 2A",
                line2: "Stephen's Green Shopping Centre",
                line3: "Dublin 2"
            },
            phone: "+353 1 475 8490",
            hours: {
                weekdays: "Mon-Sat: 10:00 - 19:00",
                weekend: "Sun: 11:00 - 18:00"
            },
            image: "/images/shop/shop-interior.jpg",
            mapUrl: "https://www.google.com/maps?q=Stephen's+Green+Shopping+Centre,+Unit+2A,+Dublin+2"
        }
    ];

    return (
        <div className="stores-page">
            {/* Hero Section with hero.gif */}
            <div className="hero-section">
                <div className="hero-bg">
                    <img
                        src="/images/hero.gif"
                        alt="Technological background animation"
                        className="hero-gif loaded"
                    />
                </div>
                <div className="hero-card">
                    <div className="hero-card-content">
                        <h1 className="hero-title">Visit Our Stores</h1>
                        <p className="hero-description">Experience our premium products in person at our Dublin locations</p>
                    </div>
                </div>
            </div>

            {/* Store Locations Section */}
            <div className="stores-section">
                <div className="section-container">
                    <h2 className="section-title">Our Store Locations</h2>
                    <p className="section-subtitle">Visit us in person to experience our full range of products and services</p>

                    <div className="stores-grid">
                        {stores.map((store) => (
                            <div key={store.id} className="store-card">
                                <div className="store-image">
                                    <img src={store.image} alt={store.name} />
                                </div>

                                <div className="store-content">
                                    <h3 className="store-name">{store.name}</h3>

                                    <div className="store-info">
                                        <div className="info-section">
                                            <div className="info-header">
                                                <span className="info-icon">📍</span>
                                                <h4>Address</h4>
                                            </div>
                                            <div className="info-body">
                                                <p>{store.address.line1}</p>
                                                <p>{store.address.line2}</p>
                                                <p>{store.address.line3}</p>
                                            </div>
                                        </div>

                                        <div className="info-section">
                                            <div className="info-header">
                                                <span className="info-icon">📞</span>
                                                <h4>Contact</h4>
                                            </div>
                                            <div className="info-body">
                                                <p><a href={`tel:${store.phone.replace(/\s+/g, '')}`}>{store.phone}</a></p>
                                            </div>
                                        </div>

                                        <div className="info-section">
                                            <div className="info-header">
                                                <span className="info-icon">⏰</span>
                                                <h4>Hours</h4>
                                            </div>
                                            <div className="info-body">
                                                <p>{store.hours.weekdays}</p>
                                                <p>{store.hours.weekend}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-actions">
                                        <a
                                            href={store.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-button map-button"
                                        >
                                            View on Map
                                        </a>
                                        <a
                                            href={`tel:${store.phone.replace(/\s+/g, '')}`}
                                            className="action-button call-button"
                                        >
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits-section">
                <div className="section-container">
                    <h2 className="section-title">Why Visit Our Stores?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">👁</div>
                            <h3>See Before You Buy</h3>
                            <p>Experience our products in person before making your decision</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💬</div>
                            <h3>Expert Advice</h3>
                            <p>Get personalized recommendations from our knowledgeable staff</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🛡</div>
                            <h3>Best Price Guarantee</h3>
                            <p>We match any competitor's price on identical products</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔧</div>
                            <h3>On-Site Repairs</h3>
                            <p>Get your device repaired while you wait at our repair centers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="stores-cta">
                <div className="section-container">
                    <h2>Ready to Visit?</h2>
                    <p>Our friendly staff are ready to help you find the perfect device</p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn-primary">Contact Us →</a>
                        <a href="/products" className="btn-secondary">Browse Products</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stores;