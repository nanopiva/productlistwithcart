import { useState } from "react";
import Modal from "./Modal";

const Cart = (props) => {
  const totalAmount = props.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h3 className="yourcarttitle">Your cart ({props.cart.length})</h3>
        {props.cart.length === 0 ? (
          <>
            <img
              className="backimg-cart"
              src="../public/assets/images/illustration-empty-cart.svg"
              alt="Icon of an empty cart"
            ></img>
            <p className="uritemswillappear">
              Your added items will appear here
            </p>
          </>
        ) : (
          <div className="products-container">
            {props.cart.map((item) => (
              <div key={item.id} className="productInCart">
                <div className="productDataPlusBottonCart">
                  <div className="nameQuantityAndPricesCart">
                    <p className="productNameCart">{item.name}</p>
                    <div className="quantityAndPricesCart">
                      <p className="productQuantityCart">{item.quantity}x</p>
                      <p className="productIPriceCart">
                        @{item.price.toFixed(2)}
                      </p>
                      <p className="productTPriceCart">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="deleteProductCart"
                    onClick={() => props.removeTotalFromCart(item.id)}
                  >
                    <img
                      className="deleteProductCartIcon"
                      src="./assets/images/icon-remove-item.svg"
                      alt="Icon to delete a product from the cart"
                    ></img>
                  </button>
                </div>
              </div>
            ))}
            <div className="cartTotal">
              <h4 className="totalTitle">Total:</h4>
              <p className="totalPriceCart"> ${totalAmount.toFixed(2)}</p>
            </div>
            <div className="carbonNeutralCartContainer">
              <img
                src="../public/assets/images/icon-carbon-neutral.svg"
                className="carbonNeutralCartImg"
                alt="Icon of carbon-neutral product"
              ></img>
              <p className="carbonNeutralCartText">
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>

            <button
              className="confirmOrderCart"
              onClick={() => setIsModalOpen(true)}
            >
              Confirm Order
            </button>
            {isModalOpen && (
              <Modal
                onClose={() => setIsModalOpen(false)}
                cart={props.cart}
                totalAmount={totalAmount}
                clearCart={props.clearCart}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
