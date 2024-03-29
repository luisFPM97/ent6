
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { getProductsThunk } from '../store/slices/products.slice'
import { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import './styles/Home.css'

const Home = () => {

  const products =useSelector(store => store.products)

  const [categorySelected, setCategorySelected] = useState('all')

  const [priceRange, setPriceRange] = useState({
    from:0,
    to:Infinity
  })

  const [nameValue, setNameValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk());
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


  return (
    <div className='home'>
      <input className='input_search' ref={inputName} onChange={handleInputName} type="text" />
      <div className='home_container'>
      <div className='filters'>
        <h2>filters</h2>
        <FilterPrice setPriceRange={setPriceRange}/>
        <FilterCategory setCategorySelected={setCategorySelected}/>
      </div>
      <div className='product_container'>
        {
          products?.filter(callbackFilter).map((prod) => (
            <ProductCard 
            key={prod.id} 
            product={prod}
            />
          ))         
        }
      </div>
      </div>
    </div>
  )
}

export default Home