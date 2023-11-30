import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"

const FilterCategory = ({setCategorySelected}) => {

  const [categories, getCategories] =  useFetch()



  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
    getCategories(url);
  }, [])
  
  const handleCategory = id =>{
    setCategorySelected(id);
  };

  return (
    <section className="filter_category">
        <h3>Category</h3>
        <hr />
        <ul className="filter_category_items">
            <li onClick={()=>handleCategory('all')} >All categories</li>
            {
                categories?.map(category => (
                    <li  onClick={()=>handleCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default FilterCategory