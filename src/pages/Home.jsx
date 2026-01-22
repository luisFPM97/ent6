
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { getProductsThunk } from '../store/slices/products.slice'
import { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import ProductCardSkeleton from '../components/Home/ProductCardSkeleton'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import './styles/Home.css'

const Home = () => {

  const products = useSelector(store => store.products)
  const [isLoading, setIsLoading] = useState(true)

  const [categorySelected, setCategorySelected] = useState('all')

  const [priceRange, setPriceRange] = useState({
    from:0,
    to:Infinity
  })

  const [nameValue, setNameValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductsThunk())
    // Simular tiempo mínimo de carga para mostrar skeletons
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  const inputName = useRef();

  const handleInputName=()=>{
    setNameValue(inputName.current.value.toLowerCase().trim())
  };

  const callbackFilter = prod=>{
    //filtrado por nombre
    const filterName = prod.title.toLowerCase().includes(nameValue);
    //filtrado pot tipo
    const filterCategory = categorySelected =='all' ? true : categorySelected === prod.category.id;
    //filtrafo por precio
    const price = prod.price
    const filterPrice = priceRange.from <= price && price <= priceRange.to;
    return filterName && filterCategory && filterPrice;
  };

  const filteredProducts = products?.filter(callbackFilter) || []

  return (
    <div className='home-ml'>
      <div className='home-banner'>
        <div className='container'>
          <h1>Encuentra todo lo que buscas</h1>
          <p>Miles de productos con envío gratis y ofertas increíbles</p>
        </div>
      </div>
      
      <div className='container home-main'>
        <aside className='filters-sidebar'>
          <div className='filter-section'>
            <h3>Buscar</h3>
            <input 
              className='search-input' 
              ref={inputName} 
              onChange={handleInputName} 
              type="text" 
              placeholder="Buscar productos..."
            />
          </div>
          
          <div className='filter-section'>
            <h3>Precio</h3>
            <FilterPrice setPriceRange={setPriceRange}/>
          </div>
          
          <div className='filter-section'>
            <h3>Categorías</h3>
            <FilterCategory setCategorySelected={setCategorySelected}/>
          </div>
        </aside>
        
        <main className='products-main'>
          <div className='products-header'>
            <h2>
              {isLoading ? 'Cargando productos...' : `${filteredProducts.length} Resultados`}
            </h2>
          </div>
          
          <div className='products-grid'>
            {isLoading ? (
              // Mostrar 8 skeleton cards mientras carga
              Array(8).fill(0).map((_, index) => (
                <ProductCardSkeleton key={`skeleton-${index}`} />
              ))
            ) : (
              // Mostrar productos reales una vez cargados
              filteredProducts.map((prod) => (
                <ProductCard 
                  key={prod.id} 
                  product={prod}
                />
              ))
            )}
          </div>
          
          {!isLoading && filteredProducts.length === 0 && (
            <div className='no-results'>
              <i className='bx bx-search-alt'></i>
              <h3>No encontramos resultados</h3>
              <p>Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Home