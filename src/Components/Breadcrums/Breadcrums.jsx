import React from 'react'
import './Breadcrums.css'
const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
       {product.name}
    </div>
  )
}

export default Breadcrums
