import React from "react";
import classes from './PizzasSummary.module.css'

const PizzasSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious italian stone-baked Neapolitan pizzas delivered to your home</h2>
      <p>
        All our pizzas are made by experienced chefs. We use only high-quality ingredients!
      </p>
    </section>
  )
}

export default PizzasSummary