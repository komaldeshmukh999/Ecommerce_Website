import React, { useContext } from 'react';
import './CardModel.css';
import context from '../context/context';

export default function CartModel() {
  const { cart, setCart, showCart, setShowCart } = useContext(context); // Assuming setShowCart is in your context

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className={`cart-container ${showCart ? 'open' : ''}`}>
      {showCart && (
        <div className="card">
          <div className="card-header">
            <h1>Cart</h1>
            <button className="close-btn" onClick={handleCloseCart}>
              &times;
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartitem) => (
                <tr key={cartitem.id}> {/* Add a key prop */}
                  <td>
                    <img src={cartitem.imageUrl} alt={cartitem.title} />
                  </td>
                  <td>{cartitem.title}</td>
                  <td>{cartitem.price}</td>
                  <td>{cartitem.quantity}</td>
                  <td>
                    <button className="btn btn-warn">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">Total: 24</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
