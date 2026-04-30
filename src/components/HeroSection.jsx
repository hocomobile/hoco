import React, { useState, useEffect, useRef } from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ title, subtitle, description, showButtons = true }) => {
    const [gifLoaded, setGifLoaded] = useState(false);
    const gifRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = "/images/hero.gif";
        img.onload = () => {
            setGifLoaded(true);
        };
        img.onerror = () => {
            console.error("Failed to load hero.gif");
        };
    }, []);

    return (
        <div className="hero-section">
            {!gifLoaded && (
                <div className="gif-placeholder">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <div className="hero-bg">
                <img
                    ref={gifRef}
                    src="/images/hero.gif"
                    alt="Technological background animation"
                    className={`hero-gif ${gifLoaded ? 'loaded' : ''}`}
                />
            </div>

            <div className="hero-card">
                <div className="hero-card-content">
                    {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                    <h1 className="hero-title">{title}</h1>
                    {description && <p className="hero-description">{description}</p>}
                    {showButtons && (
                        <div className="hero-buttons">
                            <a href="/products" className="btn-primary">Explore Products →</a>
                            <a href="/repair" className="btn-secondary">Book a Repair</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;