import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Consistent Hero Section */}
            <div className="hero-section">
                <div className="hero-bg">
                    <img
                        src="/images/hero-bg.gif"
                        alt="Technological background animation"
                        className="hero-gif loaded"
                    />
                </div>

                <div className="hero-card">
                    <div className="hero-card-content">
                        <h1 className="hero-title">About Hoco Mobile</h1>
                        <p className="hero-description">Where Technology Meets Exceptional Service</p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="about-section story-section">
                <div className="section-container">
                    <h2 className="section-title">Our Story</h2>
                    <div className="story-content">
                        <p className="story-text">
                            Founded in 2015, Hoco Mobile has grown from a single store in Dublin to become one of Ireland's most trusted destinations for premium mobile technology.
                        </p>
                        <p className="story-text">
                            Our journey began with a simple mission: to provide customers with the best mobile devices and accessories, combined with expert knowledge and exceptional service.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="about-section values-section">
                <div className="section-container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">★</div>
                            <h3>Excellence</h3>
                            <p>We strive for the highest standards in everything we do, from our product selection to our customer service.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Integrity</h3>
                            <p>We build trust through transparency, honesty, and ethical business practices.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>We embrace the latest technology to provide cutting-edge solutions for our customers.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">👥</div>
                            <h3>Community</h3>
                            <p>We're committed to serving and giving back to our local community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
                <div className="section-container">
                    <h2>Experience the Hoco Difference</h2>
                    <p>Visit one of our stores to see why we're Dublin's preferred mobile technology destination.</p>
                    <div className="cta-buttons">
                        <a href="/stores" className="btn-primary">Find a Store →</a>
                        <a href="/contact" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;