import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
    const stores = [
        {
            id: 1,
            name: "ILAC Shopping Centre",
            address: {
                line1: "Ilac Centre, Unit 59",
                line2: "Parnell Mall, Henry St",
                line3: "North City, Dublin 1"
            },
            phone: "+353 1 878 8378",
            hours: "Mon-Sat: 10:00-19:00, Sun: 11:00-18:00",
            image: "/images/shop/shop-exterior.jpg",
            mapUrl: "https://www.google.com/maps?q=Ilac+Centre,+Unit+59,+Parnell+Mall,+Henry+St,+North+City,+Dublin+1"
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
            hours: "Mon-Sat: 10:00-19:00, Sun: 11:00-18:00",
            image: "/images/shop/shop-interior.jpg",
            mapUrl: "https://www.google.com/maps?q=Stephen's+Green+Shopping+Centre,+Unit+2A,+Dublin+2"
        }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-bg">
                    <img src="/images/hero.gif" alt="Background" className="hero-gif" />
                </div>
                <div className="hero-card">
                    <div className="hero-card-content">
                        <h1 className="hero-title">Contact Us</h1>
                        <p className="hero-description">We're here to help with any questions about our products and services</p>
                    </div>
                </div>
            </div>

            <div className="contact-container">
                {/* Store Locations */}
                <div className="contact-info">
                    <h2 className="section-title">Visit Our Stores</h2>
                    <p className="section-subtitle">Experience our products in person or get expert repair services</p>

                    <div className="stores-list">
                        {stores.map((store) => (
                            <div key={store.id} className="store-item">
                                <div className="store-image-box">
                                    <img
                                        src={store.image}
                                        alt={store.name}
                                        className="store-img"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/images/store-interior.jpg";
                                        }}
                                    />
                                </div>
                                <div className="store-info-box">
                                    <h3 className="store-name">{store.name}</h3>
                                    <div className="store-details">
                                        <div className="detail">
                                            <span className="icon">📍</span>
                                            <div>
                                                <p>{store.address.line1}</p>
                                                <p>{store.address.line2}</p>
                                                <p>{store.address.line3}</p>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <span className="icon">📞</span>
                                            <p><a href={`tel:${store.phone.replace(/\s+/g, '')}`}>{store.phone}</a></p>
                                        </div>
                                        <div className="detail">
                                            <span className="icon">⏰</span>
                                            <p>{store.hours}</p>
                                        </div>
                                    </div>
                                    <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
                                        View on Map →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                    <h2 className="section-title">Send Us a Message</h2>
                    <p className="section-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
                    <div className="form-container">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <div className="section-container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {[
                            { question: "What are your store hours?", answer: "Our stores are open Monday-Saturday 10am-7pm and Sunday 11am-6pm at both locations." },
                            { question: "Do you offer repairs?", answer: "Yes, we offer professional repair services for all mobile devices at both store locations with same-day service for most repairs." },
                            { question: "What payment methods do you accept?", answer: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash payments in store." },
                            { question: "Do you price match?", answer: "Yes, we offer price matching on identical products from authorized retailers. Bring in the competitor's advertisement and we'll match the price." },
                            { question: "How long does a repair take?", answer: "Most repairs are completed within 1-2 hours. Complex repairs may take up to 24 hours. We'll provide an estimated time when you bring in your device." },
                            { question: "Do you offer warranties on products?", answer: "Yes, all our products come with a standard 12-month warranty. Extended warranty options are available for select products." }
                        ].map((faq, index) => (
                            <div key={index} className="faq-item">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="contact-cta">
                <div className="section-container">
                    <h2>Need Help Right Away?</h2>
                    <p>Visit one of our stores or give us a call for immediate assistance</p>
                    <div className="cta-buttons">
                        <a href="/stores" className="btn-primary">Visit Our Stores →</a>
                        <a href="tel:+35318788378" className="btn-secondary">Call Us Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;