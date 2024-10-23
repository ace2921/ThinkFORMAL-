import React, { useContext } from 'react'
import './ProductDisplay.css'
import { CatalogueContext } from '../../Context/Catalogue';
import allProduct from '../Assets/all_products';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(CatalogueContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
      </div>
      <div className="productdisplay-right-desciption">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem volupl 
      </div>
      <div className="productdisplay-right-size">
        <h1>Select size</h1>
        <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(allProduct.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>Category :</span>Women
        </p>
        <p className="productdisplay-right-category">
            <span>Tags :</span>Trending, Latest, Modern
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
