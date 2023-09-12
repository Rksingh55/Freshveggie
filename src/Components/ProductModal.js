import React from "react";

function ProductCardModal({ product, onClose }) {
  return (
    <div className="product-card-modal">
      <div className="product-card-modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="product-card">
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardModal;
