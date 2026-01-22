import axios from "axios"
import { useState } from "react"
import { mockProducts } from "../utils/mockData"

const useFetch = () => {

    const [infoApi, setInfoApi] = useState()

    const getApi = (url, config ={}) =>{
        const timeout = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('timeout')), 2000)
        )
        
        Promise.race([axios.get(url, config), timeout])
        .then(res => setInfoApi(res.data))
        .catch(err => {
            console.log('API no disponible:', err.message)
            // Si no hay conexión, usar datos simulados
            if (url.includes('products')) {
                // Detectar si es producto individual por ID
                const productIdMatch = url.match(/\/products\/(\d+)$/)
                if (productIdMatch) {
                    const productId = Number(productIdMatch[1])
                    const product = mockProducts.find(p => p.id === productId)
                    console.log('Usando producto simulado individual:', productId)
                    setInfoApi(product)
                } else if (url.includes('categoryId=')) {
                    // Productos por categoría
                    const categoryIdMatch = url.match(/categoryId=(\d+)/)
                    if (categoryIdMatch) {
                        const categoryId = Number(categoryIdMatch[1])
                        const filteredProducts = mockProducts.filter(p => p.category.id === categoryId)
                        console.log('Usando productos simulados por categoría:', categoryId)
                        setInfoApi(filteredProducts)
                    }
                } else {
                    console.log('Usando datos simulados de productos')
                    setInfoApi(mockProducts)
                }
            } else if (url.includes('purchases')) {
                console.log('Cargando compras desde localStorage')
                const localPurchases = JSON.parse(localStorage.getItem('purchases') || '[]')
                setInfoApi(localPurchases)
            }
        })
    }

    return [infoApi, getApi]
}

export default useFetch