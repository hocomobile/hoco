import React from 'react';

const StoreCard = ({ store }) => {
    return (
        <div className="store-card">
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Phone: {store.phone}</p>
            <p>Hours: {store.hours}</p>
        </div>
    );
};

export default StoreCard;