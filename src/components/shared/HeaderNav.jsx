import { Link, useNavigate } from "react-router-dom"
import './styles/HeaderNav.css'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import useAuth from "../../hooks/useAuth"

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [user, setUser] = useState(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const { logoutUser } = useAuth()
  
  // Función para cargar usuario desde localStorage
  const loadUser = () => {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error('Error parsing user data:', error)
        setUser(null)
      }
    } else {
      setUser(null)
    }
  }
  
  useEffect(() => {
    loadUser()
    
    // Escuchar eventos de storage para actualizar cuando cambie en otra pestaña
    const handleStorageChange = (e) => {
      if (e.key === 'user' || e.key === null) {
        loadUser()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Escuchar evento personalizado para actualización en la misma pestaña
    const handleUserUpdate = () => {
      loadUser()
    }
    
    window.addEventListener('userUpdated', handleUserUpdate)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('userUpdated', handleUserUpdate)
    }
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery}`)
    }
  }

  const handleLogout = () => {
    setUser(null)
    logoutUser()
  }

  const cartItemsCount = cart?.length || 0

  return (
    <header className="header-ml">
      <div className="header-top">
        <div className="header-container">
          <Link to='/' className="logo">
            <span className="logo-text">E-Commerce</span>
          </Link>
          
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Buscar productos, marcas y más..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <i className='bx bx-search'></i>
            </button>
          </form>
          
          <div className="header-promo">
            <i className='bx bxs-discount'></i>
            <span>Envío gratis desde $40</span>
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <div className="header-container">
          <nav className="nav-links">
            <Link to='/'>Inicio</Link>
            <Link to='/?category=ofertas'>Ofertas</Link>
            <Link to='/?category=destacados'>Destacados</Link>
            <Link to='/purchase'>Mis compras</Link>
          </nav>
          
          <div className="user-actions">
            {user ? (
              <>
                <div 
                  className="user-logged"
                  onMouseEnter={() => setShowUserMenu(true)}
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <div className="user-info">
                    <i className='bx bxs-user-circle'></i>
                    <span className="user-name">
                      Hola, {user.firstName}
                    </span>
                    <i className='bx bx-chevron-down'></i>
                  </div>
                  {showUserMenu && (
                    <div className="user-menu">
                      <Link to='/purchase' className="menu-item">
                        <i className='bx bx-shopping-bag'></i>
                        Mis compras
                      </Link>
                      <button onClick={handleLogout} className="menu-item logout">
                        <i className='bx bx-log-out'></i>
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to='/register' className="user-link">
                  <i className='bx bx-user-plus'></i>
                  <span>Registrarse</span>
                </Link>
                <Link to='/login' className="user-link">
                  <i className='bx bx-user'></i>
                  <span>Ingresar</span>
                </Link>
              </>
            )}
            <Link to='/cart' className="cart-link">
              <i className='bx bx-cart'></i>
              {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
