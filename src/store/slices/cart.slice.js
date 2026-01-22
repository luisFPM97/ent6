import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getTokenConfig";
import { mockProducts } from "../../utils/mockData";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart:(currentValue, action)=>[...currentValue, action.payload],
        removeFromCart:(currentValue,action) => currentValue.filter(prod=> prod.id !== action.payload),
        setCart:(currentValue, action)=>action.payload
    }
    
})

export const {addToCart,removeFromCart,setCart}=cartSlice.actions

export default cartSlice.reducer

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

export const getCartThunk = () => (dispatch, getState) =>{
    const url=`${baseUrl}`
    
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.get(url, getConfigToken()), timeout])
        .then(res => dispatch(setCart(res.data)))
        .catch(err => {
            console.log('Cart API no disponible:', err.message)
            // NO vaciar el carrito en modo demo - mantener estado local
            // Solo intentar cargar si hay token real
            const currentCart = getState().cart
            if (currentCart.length === 0) {
                // Solo establecer vacío si realmente no hay nada
                console.log('Carrito vacío - modo demo activo')
            }
        })
}

export const addProductToCartThunk =(productId, quantity = 1)=>(dispatch)=>{
    const url = `${baseUrl}`
    const data ={ productId, quantity }
    
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.post(url, data, getConfigToken()), timeout])
        .then(res => {
            console.log(res.data)
            // Recargar el carrito después de agregar
            dispatch(getCartThunk())
        })
        .catch(err => {
            console.log('Add to cart API no disponible:', err.message)
            // En modo demo, buscar el producto real de mockProducts
            const product = mockProducts.find(p => p.id === productId)
            if (product) {
                const mockCartItem = {
                    id: Date.now() + Math.random(), // ID único
                    productId,
                    quantity,
                    product: product // Producto completo con toda la info
                }
                dispatch(addToCart(mockCartItem))
            }
        })
}

export const deleteProductFromCart =(id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.delete(url,getConfigToken()), timeout])
        .then(res=> {
            console.log(res.data)
            dispatch(removeFromCart(id))
        })
        .catch(err => {
            console.log('Delete from cart API no disponible:', err.message)
            // Eliminar del estado local de todos modos
            dispatch(removeFromCart(id))
        })
}

