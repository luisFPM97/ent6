import { useState } from "react"


const ProductInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const handleMinus = () =>{
        if(quantity - 1 >= 1){
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = ( ) =>{setQuantity(quantity + 1)} 

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <span>Price</span>
                <span>{product?.price}</span>
            </div>
            <div>
                <button onClick={handleMinus}>-</button>
                <div>{quantity}</div>
                <button onClick={handlePlus}>+</button>
            </div>
            <button>Add to cart<i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo