import React, { useState, useEffect } from 'react'
import "../index.css"
import "../header.css"
import Header from '../components/header'
import Products from '../products/products'
import axios from "axios"

export const Home = () => {

  const [Count,setConst]=useState(0);

  const Server = "http://localhost:3000/cart";

  const addToCart = async (item) => {

    try {
      const res = await axios.post(Server, item);
      console.log(res.data);

    } catch (err) {
      console.log(err.message);

    }

  }








  return (
    <>
      <Header Count={Count}/>

      <div className="home-page">
        <div className="products-grid">
          {Products.map(item => (
            <div className="product-container" key={item.id}>

              <div className="product-image-container">
                <img className="product-image"
                  src={item.image} />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {item.name}
              </div>

              <div className="product-rating-container">
                <img className="product-rating-stars"
                  src={`images/ratings/rating-${item.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                  {item.rating.count}
                </div>
              </div>

              <div className="product-price">
                ${(item.priceCents / 100).toFixed(2)}
              </div>

              <div className="product-quantity-container">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
              </div>

              <button className="add-to-cart-button button-primary" onClick={() => { addToCart(item),setCount(prev=>prev+1) }}>
                Add to Cart
              </button>
            </div>

          ))}
        </div>

      </div>
    </>
  )
}

export default Home;
