import ProductCard from "./ProductCard";
import data from "./data.json";

const Desserts = (props) => {
  return (
    <div className="titlewithcontainer">
      <h2 className="titleDesserts">Desserts</h2>
      <div className="general-card-container">
        {data.map((dessert, index) => (
          <ProductCard
            key={index}
            product={dessert}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cart={props.cart}
          />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
