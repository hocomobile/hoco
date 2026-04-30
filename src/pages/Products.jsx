import React from 'react';
import '../styles/Products.css';

const Products = () => {
    // Smartphones with badges
    const phones = [
        {
            id: 1,
            name: "iPhone 17 Pro",
            image: "/images/products/iphone17pro.jpg",
            description: "The ultimate iPhone with advanced camera and performance.",
            badge: "NEW",
            brand: "APPLE"
        },
        {
            id: 2,
            name: "iPhone 17",
            image: "/images/products/iphone17.jpg",
            description: "Powerful performance with advanced camera system.",
            badge: "BESTSELLER",
            brand: "APPLE"
        },
        {
            id: 3,
            name: "iPhone 16 Pro",
            image: "/images/products/iphone16pro.jpg",
            description: "Pro-level performance with advanced camera capabilities.",
            brand: "APPLE"
        },
        {
            id: 4,
            name: "iPhone 16",
            image: "/images/products/iphone16.jpg",
            description: "Powerful performance in a classic design.",
            brand: "APPLE"
        },
        {
            id: 5,
            name: "Samsung Galaxy S26 Ultra",
            image: "/images/products/samsungs26ultra.jpg",
            description: "The most powerful Galaxy with revolutionary camera technology.",
            badge: "NEW",
            brand: "SAMSUNG"
        },
        {
            id: 6,
            name: "Samsung Galaxy S26",
            image: "/images/products/samsungs26.jpg",
            description: "Premium performance with advanced camera features.",
            brand: "SAMSUNG"
        },
        {
            id: 7,
            name: "Samsung Galaxy S25 FE",
            image: "/images/products/samsungs25fe.jpg",
            description: "Fan Edition with premium features at great value.",
            brand: "SAMSUNG"
        },
        {
            id: 8,
            name: "Samsung Galaxy A56",
            image: "/images/products/samsunggalaxya56.jpg",
            description: "Premium mid-range smartphone with excellent battery life.",
            brand: "SAMSUNG"
        }
    ];

    // Tablets
    const tablets = [
        {
            id: 1,
            name: "iPad Pro M4 (12.9\")",
            image: "/images/products/ipadprom4-129.jpg",
            description: "Unleash your creativity with the new iPad Pro and M4 chip.",
            badge: "NEW",
            brand: "APPLE"
        },
        {
            id: 2,
            name: "iPad Pro M4 (11\")",
            image: "/images/products/ipadprom4-11.jpg",
            description: "Portable power with the M4 chip in a compact size.",
            brand: "APPLE"
        },
        {
            id: 3,
            name: "iPad Air 5",
            image: "/images/products/ipadair5.jpg",
            description: "Powerful performance in a thin and light design.",
            brand: "APPLE"
        },
        {
            id: 4,
            name: "Samsung Galaxy Tab S10 Ultra",
            image: "/images/products/samsunggalaxytabs10ultra.jpg",
            description: "Premium Android tablet with stunning AMOLED display.",
            badge: "FLAGSHIP",
            brand: "SAMSUNG"
        }
    ];

    // Laptops
    const laptops = [
        {
            id: 1,
            name: "MacBook Air 15\"",
            image: "/images/products/macbookair15.jpg",
            description: "Thin, light, and powerful with all-day battery life.",
            badge: "NEW",
            brand: "APPLE"
        },
        {
            id: 2,
            name: "MacBook Air 13\"",
            image: "/images/products/macbookair13.jpg",
            description: "Portable performance with the M2 chip.",
            brand: "APPLE"
        }
    ];

    // Accessories
    const accessories = [
        {
            id: 1,
            name: "AirPods Pro",
            image: "/images/products/bluetooth-earbuds.jpg",
            description: "Active Noise Cancellation with spatial audio.",
            badge: "BESTSELLER",
            brand: "APPLE"
        },
        {
            id: 2,
            name: "10\" Ring Light",
            image: "/images/products/ringlight10.jpg",
            description: "Perfect for content creation and video calls.",
            brand: "GENERIC"
        },
        {
            id: 3,
            name: "18\" Ring Light",
            image: "/images/products/ringlight18.jpg",
            description: "Professional lighting for photography and video.",
            brand: "GENERIC"
        },
        {
            id: 4,
            name: "Wireless Charger",
            image: "/images/products/wirelesscharger.jpg",
            description: "Fast wireless charging for all devices.",
            brand: "GENERIC"
        }
    ];

    return (
        <div className="products-page">
            {/* Hero Section */}
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
                        <h1 className="hero-title">Premium Products</h1>
                        <p className="hero-description">Discover the latest in mobile technology and accessories</p>
                    </div>
                </div>
            </div>

            {/* Category Navigation */}
            <div className="category-nav">
                <div className="section-container">
                    <div className="nav-container">
                        <a href="#smartphones" className="nav-item active">Smartphones</a>
                        <a href="#tablets" className="nav-item">Tablets</a>
                        <a href="#laptops" className="nav-item">Laptops</a>
                        <a href="#accessories" className="nav-item">Accessories</a>
                    </div>
                </div>
            </div>

            {/* Smartphones Section */}
            <div id="smartphones" className="products-section">
                <div className="section-container">
                    <h2 className="section-title">Smartphones</h2>
                    <div className="products-grid">
                        {phones.map((phone) => (
                            <div key={phone.id} className="premium-card">
                                {phone.badge && <span className={`badge ${phone.badge.toLowerCase()}`}>{phone.badge}</span>}
                                <div className="product-image-container">
                                    <img src={phone.image} alt={phone.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <div className="product-brand">{phone.brand}</div>
                                    <h3 className="product-name">{phone.name}</h3>
                                    <div className="product-actions">
                                        <span className="availability">In store</span>
                                        <a href="/stores" className="btn-outline">Find in Store</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tablets Section */}
            <div id="tablets" className="products-section">
                <div className="section-container">
                    <h2 className="section-title">Tablets</h2>
                    <div className="products-grid">
                        {tablets.map((tablet) => (
                            <div key={tablet.id} className="premium-card">
                                {tablet.badge && <span className={`badge ${tablet.badge.toLowerCase()}`}>{tablet.badge}</span>}
                                <div className="product-image-container">
                                    <img src={tablet.image} alt={tablet.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <div className="product-brand">{tablet.brand}</div>
                                    <h3 className="product-name">{tablet.name}</h3>
                                    <div className="product-actions">
                                        <span className="availability">In store</span>
                                        <a href="/stores" className="btn-outline">Find in Store</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Laptops Section */}
            <div id="laptops" className="products-section">
                <div className="section-container">
                    <h2 className="section-title">Laptops</h2>
                    <div className="products-grid">
                        {laptops.map((laptop) => (
                            <div key={laptop.id} className="premium-card">
                                {laptop.badge && <span className={`badge ${laptop.badge.toLowerCase()}`}>{laptop.badge}</span>}
                                <div className="product-image-container">
                                    <img src={laptop.image} alt={laptop.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <div className="product-brand">{laptop.brand}</div>
                                    <h3 className="product-name">{laptop.name}</h3>
                                    <div className="product-actions">
                                        <span className="availability">In store</span>
                                        <a href="/stores" className="btn-outline">Find in Store</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accessories Section */}
            <div id="accessories" className="products-section">
                <div className="section-container">
                    <h2 className="section-title">Accessories</h2>
                    <div className="products-grid">
                        {accessories.map((accessory) => (
                            <div key={accessory.id} className="premium-card">
                                {accessory.badge && <span className={`badge ${accessory.badge.toLowerCase()}`}>{accessory.badge}</span>}
                                <div className="product-image-container">
                                    <img src={accessory.image} alt={accessory.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <div className="product-brand">{accessory.brand}</div>
                                    <h3 className="product-name">{accessory.name}</h3>
                                    <div className="product-actions">
                                        <span className="availability">In store</span>
                                        <a href="/stores" className="btn-outline">Find in Store</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="products-cta">
                <div className="section-container">
                    <h2>Experience Our Products</h2>
                    <p>Visit one of our stores to see our full range of premium devices and accessories</p>
                    <div className="cta-buttons">
                        <a href="/stores" className="btn-primary">Find a Store →</a>
                        <a href="/contact" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;