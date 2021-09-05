import ShopCart from './ShopCart'
import ShopItem from './ShopItem'
import { useState, useEffect } from 'react'
import './Shop.css'

const Shop = () => {
  const [itemsTotal, setItemTotal] = useState(0)
  const [items, setItems] = useState([])

  const updateCart = (ev, items) => {
    const form = ev.target
    ev.preventDefault()

    if (form.checkValidity()) {
      items = parseInt(items)
      setItemTotal((itemsTotal) => items + itemsTotal)
    }
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((fetchedItems) => {
        setItems(
          fetchedItems.map((item, i) => {
            return (
              <ShopItem
                title={item.title}
                image={item.image}
                key={i}
                updateCart={updateCart}
              />
            )
          })
        )
      })
  }, [])

  return (
    <div>
      <h1></h1>
      <section id='items'>
        <ShopCart itemsTotal={itemsTotal} />
        {items}
      </section>
    </div>
  )
}

export default Shop
