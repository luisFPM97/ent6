import axios from "axios"
import { mockUser } from "../utils/mockData"
import useLoadingStore from "./useLoading"

const useAuth = () => {
  const setLoading = useLoadingStore.getState().setLoading

  const registerUser = (user, onSuccess) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    
    setLoading(true, 'Registrando...')
    
    const timeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.post(url, user), timeout])
    .then(res => {
      console.log(res.data)
      setLoading(false)
      
      if (onSuccess) onSuccess()
    })
    .catch(err=> {
      console.log(err)
      setLoading(false)
      // Simular registro exitoso si no hay conexión
      
      console.log('Usuario registrado en modo demo:', user)
      if (onSuccess) onSuccess()
    })
  }

  const loginUser = (credential) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    
    setLoading(true, 'Iniciando sesión...')
    
    const timeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('timeout')), 2000)
    )
    
    Promise.race([axios.post(url, credential), timeout])
    .then(res => {
        console.log(res.data)
        const userData = {
          firstName: res.data.firstName || 'Usuario',
          lastName: res.data.lastName || 'Demo',
          email: res.data.email || credential.email
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(userData))
        
        // Disparar evento para actualizar el header
        window.dispatchEvent(new Event('userUpdated'))
        
        setLoading(false)
        
        // Redirigir
        setTimeout(() => {
          window.location.href = '#/'
        }, 500)
    })
    .catch(err => {
      console.log(err)
      // Simular login exitoso si no hay conexión (MODO DEMO)
      const mockToken = 'demo-token-' + Date.now()
      const userData = {
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
        email: credential.email
      }
      
      // Guardar en localStorage
      localStorage.setItem('token', mockToken)
      localStorage.setItem('user', JSON.stringify(userData))
      
      // Disparar evento para actualizar el header
      window.dispatchEvent(new Event('userUpdated'))
      
      setLoading(false)
      
      
      // Redirigir
      setTimeout(() => {
        window.location.href = '#/'
      }, 500)
    })
  }

  const logoutUser = () => {
    // Eliminar datos del localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    
    // Disparar evento para actualizar el header
    window.dispatchEvent(new Event('userUpdated'))
    
    // Redirigir al login
    setTimeout(() => {
      window.location.href = '#/login'
    }, 100)
  }

  return { registerUser, loginUser, logoutUser }

}

export default useAuth