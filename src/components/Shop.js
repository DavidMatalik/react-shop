import ShopCart from './ShopCart'
import ShopItem from './ShopItem'
import { useState } from 'react'
import './Shop.css'

const Shop = () => {
  const [itemsTotal, setItemTotal] = useState(0)

  const updateCart = (ev, items) => {
    const form = ev.target
    ev.preventDefault()

    if (form.checkValidity()){
      items = parseInt(items)
      setItemTotal(items + itemsTotal)
    }
  }

  return (
    <div>
      <h1>This is Shop</h1>
      <section id="items">
        <ShopCart itemsTotal={itemsTotal}/>
        <ShopItem title="Item 1" updateCart={updateCart} />
        <ShopItem title="Item 2" updateCart={updateCart} />
        <ShopItem title="Item 3" updateCart={updateCart} />
        <ShopItem title="Item 4" updateCart={updateCart} />
      </section>
    </div>
  )
}

export default Shop