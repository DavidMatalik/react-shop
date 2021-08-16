import './ShopCart.css'

const ShopCart = (props) => {
  return (
    <div id="shop-cart">
      <p>Shopping Cart</p>
      <p>Items: {props.itemCounter}</p>
      <button>Checkout</button>
    </div>
  )
}

export default ShopCart