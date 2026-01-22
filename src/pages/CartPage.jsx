import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "../components/CardPage/CartProduct"
import getConfigToken from "../utils/getTokenConfig"
import axios from "axios"
import useLoadingStore from "../hooks/useLoading"
import './styles/CartPage.css'


const CartPage = () => {

    const cart = useSelector(store => store.cart)
    const setLoading = useLoadingStore(state => state.setLoading)

    const dispatch = useDispatch()

    useEffect(() => {
      // Solo cargar del API si el carrito está vacío
      // En modo demo, el carrito ya tiene productos agregados localmente
      if (cart.length === 0) {
        dispatch(getCartThunk())
      }
    }, [])
    

   const totalPriceCart = cart.reduce((acc, cv)=>{
    const price = Number(cv.product.price)
    return acc + price * cv.quantity

   }, 0)



   const handlePurchase =()=>{
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    
    setLoading(true, 'Procesando compra...')
    
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.post(url, '', getConfigToken()), timeout])
    .then(res =>{
      console.log(res.data)
      setLoading(false)
      
      // Guardar compra en localStorage
      const existingPurchases = JSON.parse(localStorage.getItem('purchases') || '[]')
      existingPurchases.push(res.data)
      localStorage.setItem('purchases', JSON.stringify(existingPurchases))
      
      dispatch(setCart([]))
      alert('¡Compra realizada exitosamente!')
    })
    .catch(err => {
        console.log('Purchase API no disponible:', err.message)
        setLoading(false)
        
        // Simular compra exitosa en modo demo
        const mockPurchase = {
          id: Date.now(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: 1,
          cart: cart.map(item => ({
            id: item.id,
            quantity: item.quantity,
            product: item.product
          }))
        }
        
        // Guardar en localStorage
        const existingPurchases = JSON.parse(localStorage.getItem('purchases') || '[]')
        existingPurchases.push(mockPurchase)
        localStorage.setItem('purchases', JSON.stringify(existingPurchases))
        
        dispatch(setCart([]))
        alert('¡Compra realizada exitosamente! (Modo demo)')
    })
   }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <i className='bx bx-cart' style={{ fontSize: '64px', color: 'var(--ml-gray-text)' }}></i>
          <p style={{ fontSize: '18px', color: 'var(--ml-gray-text)', marginTop: '16px' }}>
            Tu carrito está vacío
          </p>
        </div>
      ) : (
        <>
          <div>
            {
              cart.map(prod => (
                  <CartProduct
                  key={prod.id}
                  prod={prod}
                  />
              ))
            }
          </div>
          <hr />
          <footer className="footer_cart">
            <span className="total_cart">Total</span>
            <span className="total_value_cart">${totalPriceCart.toFixed(2)}</span>
            <button className="btn_total_cart" onClick={handlePurchase}>Finalizar Compra</button>
          </footer>
        </>
      )}
    </div>
  )
}

export default CartPage