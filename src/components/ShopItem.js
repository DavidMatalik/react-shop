import './ShopItem.css'
import { useState } from 'react'

const ShopItem = (props) => {
  const { updateCart } = props
  const [itemState, setItemState] = useState(0)

  const handleChange = (ev) => {
    const { value } = ev.target
    setItemState(value)
  }

  const handleSubmit = (ev) => {
    updateCart(ev, itemState)
    setItemState(0)
  }

  return (
    <div className='item'>
      <h2>{props.title}</h2>
      <img alt={props.title} src={props.image} />
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input
          className='item-input'
          value={itemState}
          type='number'
          onChange={handleChange}
          required
          min='0'
        />
        <input className='item-btn' type='submit' value='Add to Cart' />
      </form>
    </div>
  )
}

export default ShopItem
