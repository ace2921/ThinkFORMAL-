import React from 'react'

const Items = (props) => {
  return (
    <div className='items'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="items-price-new">
            ${props.new_price}
        </div>
        <div className="itemss-price-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
