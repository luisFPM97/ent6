import { useForm } from "react-hook-form"

const FilterPrice = ({ setPriceRange }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit =(data)=>{
        const from = +data.from
        const to = +data.to
    setPriceRange({
        from,
        to: to === 0 ? Infinity : to
    });

    reset({
        from: '',
        to: ''
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="price-filter-form">
        <div className="price-inputs">
          <input 
            {...register('from')} 
            type="number" 
            placeholder="Mínimo"
            min="0"
          />
          <span className="price-separator">-</span>
          <input 
            {...register('to')} 
            type="number" 
            placeholder="Máximo"
            min="0"
          />
        </div>
        <button className="btn-primary" type="submit">Aplicar</button>
    </form>
  )
}

export default FilterPrice