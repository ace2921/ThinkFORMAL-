import React, { useContext } from 'react'
import { CatalogueContext } from '../Context/Catalogue'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import DescriptionBox from '../Components/Descriptionbox/DescriptionBox';

const Product = () => {
    const {allProduct} = useContext(CatalogueContext);
    const {productId} = useParams();
    const product = allProduct.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
