import './Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
 return(
   <nav>
     <ul>
      <Link to='/' className='nav-link'><li>Home</li></Link>
      <Link to='/shop' className='nav-link'><li>Shop</li></Link>
     </ul>
   </nav>
 ) 
}

export default Nav