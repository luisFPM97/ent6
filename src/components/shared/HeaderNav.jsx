import { Link } from "react-router-dom"
import './styles/HeaderNav.css'


const HeaderNav = () => {
  return (
    <header className="nav_bar">
        <h1 className="nav_title"><Link to='/'>e-commerce</Link></h1>
        <nav className="nav_container">
            <ul className="nav_items">
                <li className="nav_item" ><Link to='/register'><i class='bx bx-user-plus'></i></Link></li>
                <li className="nav_item" ><Link to='/login'><i class='bx bx-user'></i></Link></li>
                <li className="nav_item" ><Link to='/cart'><i class='bx bx-cart'></i></Link></li>
                <li className="nav_item" ><Link to='/purchase'><i class='bx bx-purchase-tag-alt' ></i></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
