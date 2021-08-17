import ShopCart from "./ShopCart"
import ShopItem from "./ShopItem"
import './Shop.css'

const Shop = () => {
  // Implement Logic for itemcounter

  return (
    <div>
      <h1>This is Shop</h1>
      <section id="items">
        <ShopCart itemCounter="5"/>
        <ShopItem title="Item 1"/>
        <ShopItem title="Item 2"/>
        <ShopItem title="Item 3"/>
        <ShopItem title="Item 4"/>
      </section>
    </div>
  )
}

export default Shop