import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addProductToCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/ProductCard.css'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const handleNavigate =( ) =>{
    navigate(`/product/${product.id}`)
  }

  const dispatch = useDispatch()

  const handleAddCart = e =>{
    e.stopPropagation()
    dispatch(addProductToCartThunk(product.id))
  }

  return (
    <article className='product' onClick={handleNavigate}>
        <header className='product_header'>
          <img className='product_img product_img-1' src={product.images[0].url} alt="" />
          <img className='product_img product_img-2' src={product.images[1].url} alt="" />
        </header>
        <section className='product_body'>
            <h4 className='product_brand'>{product.brand}</h4>
            <h3 className='product_name'>{product.title}</h3>
            <div className='product_price'>
                <span className='product_price_label'>
                    Price
                </span>
                <span className='product_price_value'>{product.price}</span>
            </div>
            <button className='product_btn' onClick={handleAddCart}>
              <i className='bx bx-cart product_iconcart'></i>
            </button>
        </section>
    </article>
  )
}

export default ProductCard