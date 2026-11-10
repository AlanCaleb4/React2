import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import "../general.css"
import "../orders.css"
import axios from 'axios'
const Orders = () => {

  const [Orders, setOrders] = useState([""]);
  const server = "http://localhost:3000/order"

  useEffect(() => async () => {
    try {
      const res = await axios.get(server).then(res => setOrders(res.data));
      console.log(res.data);

    }
    catch (err) {
      console.log(err.message);
    }
  }, [])



  const cancelOrder = async (id) => {
    try {
      await axios.delete('http://localhost:3000/order/' + id)
      setOrders(prevorder =>
        prevorder.filter(item => item.id !== id)
      );
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Header />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {Orders.map(order => (
            <div className="order-container" key={order.id}>

              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>August 12</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>$35.06</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
                </div>
              </div>

              <div className="order-details-grid">
                <div className="product-image-container">
                  <img src={order.image} />
                </div>

                <div className="product-details">
                  <div className="product-name">
                    {order.name}
                  </div>
                  <div className="product-delivery-date">
                    Arriving on: August 15
                  </div>
                  <div className="product-quantity">
                    Quantity: 1
                  </div>
                  <div className="btns">
                    <button className="buy-again-button button-primary">
                      <img className="buy-again-icon" src="images/icons/buy-again.png" />
                      <span className="buy-again-message">Add to Cart</span>
                    </button>
                    <button className='cncl-ord button-secondary' onClick={() => cancelOrder(order.id)}>cancel order</button>
                  </div>
                </div>

                <div className="product-actions">
                  <a href="tracking.html">
                    <button className="track-package-button button-secondary">
                      Track package
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Orders