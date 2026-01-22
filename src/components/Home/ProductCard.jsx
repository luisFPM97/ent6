import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addProductToCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import useLoadingStore from '../../hooks/useLoading'
import './styles/ProductCard.css'

const ProductCard = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const setLoading = useLoadingStore(state => state.setLoading)

  const handleNavigate =( ) =>{
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = e =>{
    e.stopPropagation()
    setLoading(true, 'Agregando al carrito...')
    dispatch(addProductToCartThunk(product.id))
    // Dar feedback visual después de un momento
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  // Manejo de imágenes con fallback
  const getImageUrl = (index) => {
    if (product.images && product.images[index]) {
      return product.images[index].url || product.images[index]
    }
    return 'https://via.placeholder.com/300x300?text=Sin+Imagen'
  }

  return (
    <article className='product-card-ml' onClick={handleNavigate}>
        <div className='product-image-container'>
          <img className='product-image' src={getImageUrl(0)} alt={product.title} />
          {product.discount && (
            <span className='product-discount'>-{product.discount}%</span>
          )}
        </div>
        <div className='product-content'>
            <h3 className='product-title'>{product.title}</h3>
            <div className='product-pricing'>
                <span className='product-price'>${product.price?.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className='product-old-price'>${product.oldPrice.toFixed(2)}</span>
                )}
            </div>
            <p className='product-shipping'>
              <i className='bx bxs-truck'></i>
              Envío gratis
            </p>
            <button className='product-add-cart' onClick={handleAddCart}>
              <i className='bx bx-cart'></i>
              Agregar al carrito
            </button>
        </div>
    </article>
  )
}

export default ProductCard