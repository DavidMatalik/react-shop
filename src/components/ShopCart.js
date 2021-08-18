import './ShopCart.css'

const ShopCart = (props) => {
  return (
    <div id="shop-cart">
      <p>Shopping Cart</p>
      <p>Items: {props.itemsTotal}</p>
      <button>Checkout</button>
    </div>
  )
}

export default ShopCart