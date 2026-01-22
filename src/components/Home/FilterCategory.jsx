import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import { mockCategories } from "../../utils/mockData";

const FilterCategory = ({setCategorySelected}) => {

  const [categories, getCategories] =  useFetch()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
    getCategories(url);
  }, [])
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const handleCategory = id =>{
    setCategorySelected(id);
  };
  
  const handleSelectChange = (e) => {
    setCategorySelected(e.target.value === 'all' ? 'all' : Number(e.target.value));
  };

  // Usar categorías simuladas si no hay datos de la API
  const displayCategories = categories || mockCategories;

  if (isMobile) {
    return (
      <div className="filter-select-container">
        <select 
          className="filter-select"
          onChange={handleSelectChange}
          defaultValue="all"
        >
          <option value="all">Todas las categorías</option>
          {
            displayCategories?.map(category => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))
          }
        </select>
      </div>
    )
  }

  return (
    <div className="filter-list">
        <button 
          className="filter-item" 
          onClick={()=>handleCategory('all')}
        >
          Todas las categorías
        </button>
        {
            displayCategories?.map(category => (
                <button  
                  className="filter-item"
                  onClick={()=>handleCategory(category.id)} 
                  key={category.id}
                >
                  {category.name}
                </button>
            ))
        }
    </div>
  )
}

export default FilterCategory