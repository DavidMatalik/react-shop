import './ShopCart.css'

const ShopCart = (props) => {
  return (
    <div id='shop-cart'>
      <p>Items: {props.itemsTotal}</p>
      <button id='cart-btn'>Checkout</button>
    </div>
  )
}

export default ShopCart
