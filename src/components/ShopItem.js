import './ShopItem.css'

const ShopItem = (props) => {
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <form>
        <input type="number" required/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ShopItem