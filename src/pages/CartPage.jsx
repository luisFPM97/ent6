import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "../components/CardPage/CartProduct"
import getConfigToken from "../utils/getTokenConfig"
import axios from "axios"


const CartPage = () => {

    const cart = useSelector(store => store.cart)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCartThunk())
    }, [])
    

   const totalPriceCart = cart.reduce((acc, cv)=>{
    const price = Number(cv.product.price)
    return acc + price * cv.quantity

   }, 0)



   const handlePurchase =()=>{
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, '', getConfigToken())
    .then(res =>{
      console.log(res.data)
      dispatch(setCart([]))
    })
    .cathc(err => console.log(err))
   }

  return (
    <div>
      <h1>Cart</h1>
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
        <span className="total_value_cart">{totalPriceCart}</span>
        <button className="btn_total_cart" onClick={handlePurchase}>Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage