import React from 'react'
import "./foodcard.css";

const Foodcard = ({image,header}) => {
  return (
    <div className='food-card-container'>
      <img src={image} alt="" className='food-card-image' />
      <h2 className='food-card-header'>{header}</h2>
      <p className="food-card-description">Lorem ipsum, dolor sitvsk hurray and ia m very enjoy.</p>
      <button className='food-card-button'>Read Recipe</button>
    </div>
  )
}

export default Foodcard
