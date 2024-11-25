import React, { useContext } from "react";
import "./ProductDisplay.css";
import { CatalogueContext } from "../../Context/Catalogue";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(CatalogueContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* Dynamic Image List */}
        <div className="productdisplay-img-list">
          {Array(4) // Assuming 4 thumbnails for demonstration
            .fill(product.image)
            .map((img, index) => (
              <img key={index} src={img} alt={`${product.name} thumbnail ${index + 1}`} />
            ))}
        </div>
        {/* Main Image */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={`${product.name} main`}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price.toFixed(2)}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price.toFixed(2)}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem volupt.
        </div>
        {/* Size Selection */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>
        {/* Add to Cart */}
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Trending, Latest, Modern
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
