import React, { useContext } from 'react'
import './CSS/Catalogue.css'
import { CatalogueContext } from '../Context/Catalogue' 
import Items from '../Components/Items/Items'

const Catalogue = (props) => {
  const {allProduct} = useContext(CatalogueContext);
  return (
    <div className='catalogue'>
      <img className='catalogue-banner' src={props.banner} alt=""  />
      <div className="catalogue-indexSort">
        <p>
          <span>Showing All 13 products</span> 
        </p>
        <div className="catalogue-products">
          {allProduct.map((item,i)=>{
            if (props.Catalogue===item.Catalogue) {
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Catalogue
