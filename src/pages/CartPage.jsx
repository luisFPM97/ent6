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
    

    console.log(cart)

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
    </div>
  )
}

export default CartPage