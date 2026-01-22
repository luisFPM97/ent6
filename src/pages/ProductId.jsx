import React, { useEffect } from 'react'
import ProductInfo from '../components/ProductctId/ProductInfo'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SimilarProducts from '../components/ProductctId/SimilarProductos'
import Sliderimgs from '../components/ProductctId/Sliderimgs'
import './styles/ProductId.css'

const ProductId = () => {

  const { id } = useParams()

  const [product, getProduct] = useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  }, [id])
  
  console.log(product)
  
  if (!product) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <i className='bx bx-loader-alt bx-spin' style={{ fontSize: '48px', color: 'var(--ml-blue)' }}></i>
        <p style={{ marginTop: '16px', color: 'var(--ml-gray-text)' }}>Cargando producto...</p>
      </div>
    )
  }
  
  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <Sliderimgs product={product}/>
        <ProductInfo product={product} />
      </div>
      <div className="similar-products-section">
        <SimilarProducts categoryId={product?.category?.id} idProd={product?.id}/>
      </div>
    </div>
  )
}

export default ProductId