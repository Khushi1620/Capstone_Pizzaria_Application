import "./Menu.css";

import pizzas from "../../data/pizzas";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

function Menu() {
  return (
    <div className="menu-container">

      <h1 className="menu-heading">
        Our Delicious Pizzas 🍕
      </h1>

      <p className="menu-subtitle">
        Choose your favourite pizza and customize it just the way you like.
      </p>

      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
          />
        ))}
      </div>

    </div>
  );
}


export default Menu;