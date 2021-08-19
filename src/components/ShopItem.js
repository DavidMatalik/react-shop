import './ShopItem.css'
import { useState } from 'react'

const ShopItem = (props) => {
  const  { updateCart } = props
  const  [itemState, setItemState] = useState(0)

  const handleChange = (ev) =>  {
    const { value } = ev.target
    setItemState(value)
  }

  const handleSubmit = (ev) => {
    updateCart(ev, itemState)
    setItemState(0)
  }
  
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input value={itemState} type="number" onChange={handleChange} required min="0"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ShopItem