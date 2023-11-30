import React, { useEffect } from 'react'
import ProductInfo from '../components/ProductctId/ProductInfo'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SimilarProducts from '../components/ProductctId/SimilarProductos'

const ProductId = () => {

  const { id } = useParams()

  const [product, getProduct] = useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  }, [id])
  
  console.log(product)
  return (
    <div>
      <ProductInfo
        product={product}
      />
      <SimilarProducts categoryId={product?.category.id} idProd={product?.id}/>
   
      
    </div>
  )
}

export default ProductId