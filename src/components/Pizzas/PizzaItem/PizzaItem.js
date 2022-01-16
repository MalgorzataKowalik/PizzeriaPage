import React, { useContext } from 'react';
import PizzaItemForm from './PizzaItemForm';
import CartContext from '../../../store/cart-context';
import classes from './PizzaItem.module.css';

const PizzaItem = props => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)} zł`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.pizza}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PizzaItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default PizzaItem