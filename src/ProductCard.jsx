import { useState, useEffect } from "react";

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantityAdded, setQuantityAdded] = useState(false);

  const buttonContainerStyle = {
    backgroundColor: isHovered || quantityAdded ? `hsl(14, 86%, 42%)` : `#fff`,
    transition: "background-color 0.3s ease",
    display: `flex`,
    justifyContent: isHovered || quantityAdded ? `space-between` : `center`,
    border: isHovered || quantityAdded ? `none` : `1px solid hsl(7, 20%, 60%)`,
    position: `absolute`,
  };

  const borderCardDinamic = {
    border: `2px solid hsl(14, 86%, 42%)`,
  };
  useEffect(() => {
    const productInCart = props.cart.find((p) => p.id === props.product.id);
    if (productInCart && productInCart.quantity > 0) {
      setQuantityAdded(true);
    } else {
      setQuantityAdded(false);
    }
  }, [props.cart, props.product.id]);

  return (
    <div className="card-container">
      <div className="img-card-container">
        <picture>
          <source
            srcSet={props.product.image.desktop}
            media="(min-width: 1024px)"
          ></source>
          <source
            srcSet={props.product.image.tablet}
            media="(min-width:576px ) and (max-width: 1023px)"
          ></source>
          <source
            srcSet={props.product.image.mobile}
            media="(max-width: 575px)"
          ></source>
          <img
            src={props.product.image.mobile}
            className="img-card"
            alt={props.product.name}
            style={quantityAdded ? borderCardDinamic : {}}
          ></img>
        </picture>

        <div
          className="button-container"
          style={buttonContainerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered && !quantityAdded ? (
            <>
              <img
                className="shop-icon"
                src="../public/assets/images/icon-add-to-cart.svg"
                alt="Add to cart icon"
              ></img>
              <p className="addToCartButton">Add to Cart</p>
            </>
          ) : (
            <>
              <button
                className="decrementButton"
                onClick={() => props.removeFromCart(props.product.id)}
              >
                <img
                  className="subItemIcon"
                  src="../public/assets/images/icon-decrement-quantity.svg"
                  alt="Decrement quantity of the product"
                ></img>
              </button>
              <p className="quantityCardButton">
                {props.cart.find((p) => p.id === props.product.id)?.quantity ||
                  0}
              </p>
              <button
                className="incrementButton"
                onClick={() => props.addToCart(props.product)}
              >
                <img
                  className="addItemIcon"
                  src="../public/assets/images/icon-increment-quantity.svg"
                  alt="Increment quantity of the product"
                ></img>
              </button>
            </>
          )}
        </div>
      </div>

      <p className="sname-card">{props.product.category}</p>
      <p className="dname-card">{props.product.name}</p>
      <p className="price-card">${props.product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
