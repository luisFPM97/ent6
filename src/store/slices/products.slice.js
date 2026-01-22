import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mockProducts } from "../../utils/mockData";

const productsSlice = createSlice({
    name: 'cproducts',
    initialState: null,
    reducers: {
        setProducts:(currentValue,action)=>action.payload
    }
})
export const {setProducts} = productsSlice.actions
export default productsSlice.reducer

export const getProductsThunk = ()=>(dispatch)=>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    
    // Timeout de 2 segundos - si no responde, usar datos simulados
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 2000)
    );
    
    Promise.race([axios.get(url), timeout])
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => {
            console.log('API no disponible, usando datos simulados:', err.message)
            // Usar datos simulados inmediatamente
            dispatch(setProducts(mockProducts))
        })
}