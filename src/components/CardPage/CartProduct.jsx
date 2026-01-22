import { useDispatch } from "react-redux"
import { deleteProductFromCart } from "../../store/slices/cart.slice"
import useLoadingStore from "../../hooks/useLoading"

const CartProduct = ({prod}) => {

    const dispatch = useDispatch()
    const setLoading = useLoadingStore(state => state.setLoading)

    const handleDelete =()=>{
        setLoading(true, 'Eliminando producto...')
        dispatch(deleteProductFromCart(prod.id))
        // Dar feedback visual después de un momento
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }

    // Obtener URL de imagen manejando ambos formatos (objeto o string)
    const getImageUrl = () => {
        if (prod.product.images && prod.product.images[0]) {
            return typeof prod.product.images[0] === 'string' 
                ? prod.product.images[0] 
                : prod.product.images[0].url
        }
        return 'https://via.placeholder.com/150?text=Sin+Imagen'
    }

  return (
    <div className="cart_general"> 
    <section className="cart_product">
        <header className="header_cart_product">
            <img className="img_cart_product" src={getImageUrl()} alt={prod.product.title} />
        </header>
        <article className="cart_product_info">
            <h3 className="cart_product_title">{prod.product.title}</h3>
            <span className="cart_product_q">Cantidad: {prod.quantity}</span>
            <div className="cart_product_price">
                <span>Precio</span>
                <span className="cart_product_price_value">${prod.product.price?.toFixed(2)}</span>
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