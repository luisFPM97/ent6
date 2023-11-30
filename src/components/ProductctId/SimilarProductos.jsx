import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../Home/ProductCard";


const SimilarProducts = ({categoryId, idProd}) => {

  const [productsByCategory, getProductsByCategory] =  useFetch();

  useEffect(() => {
    if(categoryId) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
      getProductsByCategory(url)}
  }, [categoryId])
  
  console.log(productsByCategory)

  return (
    <article>
        <h2>similar Products t</h2>
        <div className="product_container">
          {
            productsByCategory?.filter(prod=>prod.id!==idProd).map(product=>(
              <ProductCard
                  key={product.id}
                  product={product}
              />
            ))
          }
        </div>
    </article>
  )
}

export default SimilarProducts