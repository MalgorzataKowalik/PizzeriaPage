import React from 'react'
import Card from '../UI/Card'
import PizzaItem from './PizzaItem/PizzaItem'
import classes from './PizzasMenu.module.css'

  const MENU = [
  {
    id: 'p1',
    name: 'Margherita',
    description: 'tomato sauce, mozarella, fresh basil',
    price: 19.90,
  },
  {
    id: 'p2',
    name: 'Capriccosa',
    description: 'tomato sauce, mozarella, mushrooms, tomatoes, black olives',
    price: 22.90,
  },
  {
    id: 'p3',
    name: 'Salame',
    description: 'tomato sauce, mozarella, salami pepperoni',
    price: 24.90,
  },
  {
    id: 'p4',
    name: 'Bacon',
    description: 'tomato sauce, mozarella, tomatoes, bacon, black olives',
    price: 24.90,
  },
  {
    id: 'p5',
    name: 'Hawai',
    description: 'tomato sauce, mozarella, ham, pineapple',
    price: 24.90,
  },
  {
    id: 'p6',
    name: 'Scampi',
    description: 'tomato sauce, mozarella, tomatoes, shrimps, black olives, red onion',
    price: 26.90,
  },
  {
    id: 'p7',
    name: 'Broccoli',
    description: 'tomato sauce, mozarella, tomatoes, broccoli, red pepper, black olives, red onion',
    price: 22.90,
  },
  {
    id: 'p8',
    name: 'Vegetariana',
    description: 'tomato sauce, mozarella, tomatoes, red pepper, yellow pepper, black olives, red onion, parmesan',
    price: 22.90,
  },
  {
    id: 'p9',
    name: 'Picante',
    description: 'tomato sauce, mozarella, salami pepperoni, red pepper, chilli pepper',
    price: 24.90,
  }
]

const PizzasMenu = () => {
  const menuList = MENU.map(pizza => <PizzaItem key={pizza.id} id={pizza.id} name={pizza.name} description={pizza.description} price={pizza.price} url={pizza.url}/>)

  return (
    <section className={classes.pizzas}>
      <Card>
        <ul>
          {menuList}
        </ul>
      </Card>

    </section>
  )
}

export default PizzasMenu