import { useEffect } from "react";

function Modal(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClickCloseModal = () => {
    props.clearCart();
    props.onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src="../public/assets/images/icon-order-confirmed.svg"
          alt="Icon order confirmed"
        ></img>
        <h3 className="titleOrderConfirmed">Order confirmed</h3>
        <p className="subtitleOrderConfirmed">We hope you enjoy your food!</p>
        <div className="productsOrderConfirmed">
          {props.cart.map((item) => (
            <div key={item.id * 999} className="productContainerOC">
              <div className="containerQuantitiesPlusImg">
                <img
                  src={item.image.thumbnail}
                  className="imgProductOC"
                  alt="Thumbnail of product purchased"
                ></img>
                <div className="nameQuantityPriceOC">
                  <p className="nameProductOC">{item.name}</p>
                  <div className="quantityPriceOC">
                    <p className="quantityOC">{item.quantity}x</p>
                    <p className="priceOC">@{item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <p className="totalProductOC">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="totalPriceOCContainer">
          <p className="titleTotalOC">Order Total</p>
          <p className="totalPriceOC">${props.totalAmount.toFixed(2)}</p>
        </div>

        <button
          onClick={() => handleClickCloseModal()}
          className="modal-close-button"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
