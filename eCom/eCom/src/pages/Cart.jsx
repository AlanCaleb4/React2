import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import axios from 'axios' 
import "../checkout/checkout.css"
import "../general.css"
import { use } from 'react'

const Cart = () => {
  const [Cart, setCart] = useState([""]);
  const Server = "http://localhost:3000/cart"

  useEffect(() => async () => {
    try {
      const res = await axios.get(Server).then(res => setCart(res.data));
    }
    catch (err) {
      console.log(err.message);

    }
  }, []);




  const cartDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3000/cart/' + id)
      setCart(prevCart =>
        prevCart.filter(item => item.id !== id)
      );
    }
    catch (err) {
      console.log(err);
    }
  }

  const updateOrder = async (item) => {
    try {
      const res = await axios.post('http://localhost:3000/order', item);
    } catch (err) {
      console.log(err.message);
    }
  }








  return (
    <>

      <Header />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <div className="order-summary" >
            {Cart.map(item => (
              <div className="cart-item-container" key={item.id}>




                <div className="delivery-date">
                  Delivery date: Tuesday, June 21{item.id}
                </div>

                <div className="cart-item-details-grid" >
                  <img className="product-image"
                    src={item.image} />

                  <div className="cart-item-details">
                    <div className="product-name">
                      {item.name}
                    </div>
                    <div className="product-price">
                      ${(item.priceCents / 100).toFixed(2)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity: <span className="quantity-label">1</span>
                      </span>

                      <button className="update-quantity-link link-primary" onClick={() => updateOrder(item)}>
                        Update
                      </button>
                      <button onClick={() => cartDelete(item.id)} className="delete-quantity-link link-primary">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    <div className="delivery-option">
                      <input type="radio"
                        className="delivery-option-input"
                        name="delivery-option-1" />
                      <div>
                        <div className="delivery-option-date">
                          Tuesday, June 21
                        </div>
                        <div className="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>
                    <div className="delivery-option">
                      <input type="radio"
                        className="delivery-option-input"
                        name="delivery-option-1" />
                      <div>
                        <div className="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div className="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </div>
                    <div className="delivery-option">
                      <input type="radio"
                        className="delivery-option-input"
                        name="delivery-option-1" />
                      <div>
                        <div className="delivery-option-date">
                          Monday, June 13
                        </div>
                        <div className="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>


          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart