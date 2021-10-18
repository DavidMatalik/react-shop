import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink exact to='/react-shop' id='home-tab' className='nav-link'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/react-shop/shop' id='shop-tab' className='nav-link'>
          <li>Shop</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
