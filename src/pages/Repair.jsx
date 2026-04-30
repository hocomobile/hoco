import React from 'react';
import '../styles/Repair.css';

const Repair = () => {
    const repairServices = [
        {
            id: 1,
            name: "Screen Replacement",
            icon: "📱",
            description: "Fast, professional screen replacements for all device models with original quality parts."
        },
        {
            id: 2,
            name: "Battery Replacement",
            icon: "🔋",
            description: "Restore your device's battery life with our high-quality replacement batteries."
        },
        {
            id: 3,
            name: "Camera Repair",
            icon: "📸",
            description: "Fix front or rear camera issues including lens replacement and sensor repairs."
        },
        {
            id: 4,
            name: "Software Issues",
            icon: "💻",
            description: "Diagnose and resolve software problems, crashes, and performance issues."
        },
        {
            id: 5,
            name: "Water Damage Repair",
            icon: "💧",
            description: "Specialized cleaning and repair for liquid-damaged devices."
        },
        {
            id: 6,
            name: "Charging Port Repair",
            icon: "⚡",
            description: "Fix charging issues with professional port cleaning or replacement."
        }
    ];

    const repairBenefits = [
        {
            id: 1,
            icon: "⚡",
            title: "Fast Turnaround",
            description: "Most repairs completed same day"
        },
        {
            id: 2,
            icon: "🛡️",
            title: "Warranty Included",
            description: "6 months warranty on all repairs"
        },
        {
            id: 3,
            icon: "👨‍🔧",
            title: "Certified Technicians",
            description: "Trained professionals with years of experience"
        },
        {
            id: 4,
            icon: "💯",
            title: "Quality Parts",
            description: "Only premium, original quality parts used"
        }
    ];

    return (
        <div className="repair-page">
            {/* Hero Section */}
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
                        <p className="hero-subtitle">PROFESSIONAL REPAIR SERVICES</p>
                        <h1 className="hero-title">We fix it.<br />Fast.</h1>
                        <p className="hero-description">Expert repairs by certified technicians using premium parts</p>
                    </div>
                </div>
            </div>

            {/* Repair Benefits Section */}
            <div className="repair-benefits">
                <div className="section-container">
                    <div className="benefits-grid">
                        {repairBenefits.map((benefit) => (
                            <div key={benefit.id} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Repair Introduction Section */}
            <div className="repair-intro-section">
                <div className="section-container">
                    <div className="repair-intro">
                        <div className="repair-image">
                            <img src="/images/repair/repair-technician.jpg" alt="Repair Technician at work" />
                        </div>
                        <div className="repair-info">
                            <p className="section-label">OUR SERVICES</p>
                            <h2>Professional Device Repairs</h2>
                            <p className="repair-description">
                                Our expert technicians can fix any issue with your mobile devices. From screen replacements
                                to complex hardware repairs, we use only premium quality parts and provide warranty on
                                all our services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section - Updated with better spacing */}
            <div className="services-section">
                <div className="section-container">
                    <h2 className="section-title">Our Repair Services</h2>
                    <div className="services-grid">
                        {repairServices.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section - Updated with emojis */}
            <div className="process-section">
                <div className="section-container">
                    <h2 className="section-title">Our Repair Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">🔍</div> {/* Changed to emoji */}
                            <h3>Diagnosis</h3>
                            <p>Free evaluation of your device to identify the issue</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">💰</div> {/* Changed to emoji */}
                            <h3>Quote</h3>
                            <p>Transparent pricing with no hidden fees</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">🔧</div> {/* Changed to emoji */}
                            <h3>Repair</h3>
                            <p>Professional repair using premium parts</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">✅</div> {/* Changed to emoji */}
                            <h3>Quality Check</h3>
                            <p>Thorough testing before return to you</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="repair-cta">
                <div className="section-container">
                    <h2>Ready for a Repair?</h2>
                    <p>Visit one of our stores or book an appointment online</p>
                    <div className="cta-buttons">
                        <a href="/stores" className="btn-primary">Find a Store →</a>
                        <a href="/contact" className="btn-secondary">Book Online</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Repair;