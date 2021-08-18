import './ShopItem.css'
import { useState } from 'react'

const ShopItem = (props) => {
  const  { updateCart } = props
  const  [itemState, setItemState] = useState(0)

  const handleChange = (ev) =>  {
    const { value } = ev.target
    setItemState(value)
  }
  
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <form onSubmit={(ev) => updateCart(ev, itemState)}>
        <input type="number" onChange={handleChange} required/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ShopItem