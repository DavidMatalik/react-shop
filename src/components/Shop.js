import ShopCart from './ShopCart'
import ShopItem from './ShopItem'
import { useState } from 'react'
import './Shop.css'

const Shop = () => {
  const [itemCounter, setItemCounter] = useState(0)
  const  [item1State, setItem1State] = useState(0)

  const handleChange = (ev) =>  {
    const { value } = ev.target
    setItem1State(value)
  }

  const updateCart = (ev) => {
    const form = ev.target
    ev.preventDefault()

    if (form.checkValidity()){
      setItemCounter(item1State)
    }
  }

  return (
    <div>
      <h1>This is Shop</h1>
      <section id="items">
        <ShopCart itemCounter={itemCounter}/>
        <ShopItem title="Item 1" updateCart={updateCart} handleChange={handleChange}/>
        <ShopItem title="Item 2" />
        <ShopItem title="Item 3" />
        <ShopItem title="Item 4" />
      </section>
    </div>
  )
}

export default Shop