import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Foodcard from './components/foodcard/Foodcard'
import burger from "./assets/images/burgar.jpg"
import pizza from "./assets/images/pizza.jpg";
import biryani from "./assets/images/biryani.jpg"
import shawarma from "./assets/images/Shawarma.jpg"
import chicken from "./assets/images/chicken.jpg"
import mutton from "./assets/images/mutton.jpg"
import noodles from "./assets/images/noodles.jpg"
import paneer from "./assets/images/paneer.jpg"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='food-cards-container'>
      <Foodcard image={burger} header="Burger"/>
      <Foodcard image={pizza} header="Pizza"/>
      <Foodcard image={paneer} header="Paneer"/>
      <Foodcard image={biryani} header="Biryani"/>
      <Foodcard image={chicken} header="Chicken Curry"/>
      <Foodcard image={mutton} header="Mutton Curry"/>
      <Foodcard image={noodles} header="Noodles"/>
      <Foodcard image={shawarma} header="Shawarma"/>
      </div>
    </div>
  )
}

export default App
