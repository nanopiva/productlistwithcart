import "./App.css";
import { useState } from "react";
import Desserts from "./Desserts";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const removeTotalFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return updatedCart;
      } else {
        const newCart = [...prevCart, { ...product, quantity: 1 }];

        return newCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          const updatedCart = prevCart.filter((item) => item.id !== productId);

          return updatedCart;
        } else {
          const updatedCart = prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return updatedCart;
        }
      } else {
        return prevCart;
      }
    });
  };

  return (
    <div className="general-container">
      <Desserts
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeTotalFromCart={removeTotalFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;
