import React from "react";
import PizzasMenu from "./PizzasMenu";
import PizzasSummary from "./PizzasSummary";

const Pizzas = () => {
  return (
    <React.Fragment>
      <PizzasSummary/>
      <PizzasMenu/>
    </React.Fragment>
  )
}

export default Pizzas