import { useState } from 'react';
import axios from 'axios';  
const Checkout = () => {
    const [cart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    const placeOrder = async () => {
      await axios.post('http://localhost:5000/orders', { items: cart });
      localStorage.removeItem('cart');
      alert('Order placed successfully!');
    };
  
    return (
      <div>
        <h1>Checkout</h1>
        {cart.map(item => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
        <button onClick={placeOrder}>Place Order</button>
      </div>
    );
  };
  
  export default Checkout;
  