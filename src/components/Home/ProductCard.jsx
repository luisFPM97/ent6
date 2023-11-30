import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const handleNavigate =( ) =>{
    navigate(`/product/${product.id}`)
  }

  return (
    <article onClick={handleNavigate}>
        <header><img src={product.images[0].url} alt="" /></header>
        <section>
            <h4>{product.brand}</h4>
            <h3>{product.title}</h3>
            <div>
                <span>
                    Price
                </span>
                <span>{product.price}</span>
            </div>
            <button>
              <i className='bx bx-cart'></i>
            </button>
        </section>
    </article>
  )
}

export default ProductCard