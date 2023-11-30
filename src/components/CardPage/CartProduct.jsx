import { useDispatch } from "react-redux"
import { deleteProductFromCart } from "../../store/slices/cart.slice"

const CartProduct = ({prod}) => {

    const dispatch = useDispatch()

    const handleDelete =()=>{
        dispatch(deleteProductFromCart(prod.id))
    }

  return (
    <div className="cart_general"> 
    <section className="cart_product">
        <header className="header_cart_product">
            <img className="img_cart_product" src={prod.product.images[0].url} alt="" />
        </header>
        <article className="cart_product_info">
            <h3 className="cart_product_title">{prod.product.title}</h3>
            <span className="cart_product_q">{prod.quantity}</span>
            <div className="cart_product_price">
                <span>Price</span>
                <span>{prod.product.price}</span>
            </div>
        </article>
        <button className="btn_cart_product" onClick={handleDelete}>
        <i className='bx bx-trash'></i>
        </button>
    </section>

    </div>
  )
}

export default CartProduct