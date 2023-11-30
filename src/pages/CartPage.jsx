import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "../components/CardPage/CartProduct"


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
      <footer>
        <span>Total</span>
        <span>{totalPriceCart}</span>
      </footer>
    </div>
  )
}

export default CartPage