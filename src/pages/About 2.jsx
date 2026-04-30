import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section with Optional Image */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1>About Hoco Mobile</h1>
                    <p>Where Technology Meets Exceptional Service</p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="about-section">
                <div className="about-content">
                    <h2>Our Story</h2>
                    <p className="section-lead">
                        Founded in 2015, Hoco Mobile has grown from a single store in Dublin to become one of Ireland's most trusted destinations for premium mobile technology.
                    </p>
                    <p>
                        Our journey began with a simple mission: to provide customers with the best mobile devices and accessories, combined with expert knowledge and exceptional service. Today, we continue to uphold these values while expanding our offerings to include the latest innovations in mobile technology.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/images/about-store.jpg" alt="Hoco Mobile Store Interior" />
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-section">
                <h2>Why Hoco Mobile is Different</h2>
                <p className="section-lead">
                    We're not just another mobile store. Here's what sets us apart:
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <h3>Premium Selection</h3>
                        <p>We carefully curate only the best devices and accessories from trusted brands, ensuring you get quality you can rely on.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Expert Team</h3>
                        <p>Our knowledgeable staff are technology enthusiasts who stay up-to-date with the latest trends to provide you with expert advice.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-smile"></i>
                        </div>
                        <h3>Customer Focus</h3>
                        <p>Your satisfaction is our priority. We take the time to understand your needs and find the perfect solution for you.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3>Complete Service</h3>
                        <p>From purchase to repair and beyond, we offer comprehensive services to support you throughout your device's lifecycle.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3>Convenient Locations</h3>
                        <p>With stores in prime Dublin locations, we're always nearby when you need us.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h3>Community Commitment</h3>
                        <p>We believe in giving back to our community through technology education and support programs.</p>
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="vision-section">
                <h2>Our Vision for the Future</h2>
                <p className="section-lead">
                    At Hoco Mobile, we envision a world where technology enhances every aspect of life.
                </p>
                <p>
                    As we look to the future, we're committed to:
                </p>
                <ul className="vision-list">
                    <li>Bringing you the most innovative mobile technologies as soon as they're available</li>
                    <li>Providing exceptional service that exceeds your expectations</li>
                    <li>Creating a welcoming environment where you can explore and learn about new technologies</li>
                    <li>Offering sustainable options to help reduce e-waste</li>
                    <li>Being your trusted partner for all things mobile, now and in the future</li>
                </ul>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
                <h2>Experience the Hoco Difference</h2>
                <p>Visit one of our stores to see why we're Dublin's preferred mobile technology destination.</p>
                <div className="cta-buttons">
                    <a href="/stores" className="cta-button primary">Find a Store</a>
                    <a href="/contact" className="cta-button secondary">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default About;