import React, { useEffect, useState } from 'react';
import { getAllCart } from '../../services/productService';
import './Cart.css';

const Cart = () => {
  const [cartItems, fetchCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getAllCart()
        console.log('check response', response)
        fetchCartItems(response.carts)
      } catch (error) {
        console.log('fetch cart error', error)
      }
    }
    fetchCart()
  });

  return (
    <div className="cart">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống!</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <img
                src={item.imageProduct}
                alt={item.nameProduct}
                style={{
                  width: '186px',
                  height: '248px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{item.nameProduct}</h3>

              <p style={{ color: '#d9534f', fontSize: '16px', fontWeight: 'bold' }}>Price: {item.priceProduct}</p>

            </div>
          ))
          }
        </div>
      )}
    </div>
  );
};

export default Cart;
