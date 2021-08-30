import './Home.css'
import { NavLink } from 'react-router-dom'
import cart from '../shopping-cart.svg'

const Home = () => {
  return (
    <section>
      <h1>This is Home</h1>
      <p className='p-home'>Welcome to this shop!</p>
      <p className='p-home'>
        Shop whatever you like but don't shop more than you need. Instead of
        shopping brandnew products also consider shopping second hand articles.
      </p>
      <NavLink to='/shop'>
        <img className='cart-img' src={cart} alt='Shopping cart' />
      </NavLink>
    </section>
  )
}

export default Home
