import './ShopItem.css'

const ShopItem = (props) => {
  const { updateCart, handleChange } = props
  
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <form onSubmit={updateCart}>
        <input type="number" onChange={handleChange} required/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ShopItem