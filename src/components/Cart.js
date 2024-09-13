import { useState } from "react";
const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    const removeFromCart = (id) => {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    return (
      <div>
        <h1>Cart</h1>
        {cart.map(item => (
          <div key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cart;
  