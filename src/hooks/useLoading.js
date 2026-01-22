import { create } from 'zustand'

const useLoadingStore = create((set) => ({
  isLoading: false,
  message: 'Cargando...',
  setLoading: (isLoading, message = 'Cargando...') => set({ isLoading, message }),
}))

export default useLoadingStore
