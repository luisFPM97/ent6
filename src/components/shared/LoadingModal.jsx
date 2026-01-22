import './styles/LoadingModal.css'

const LoadingModal = ({ isVisible, message = 'Cargando...' }) => {
  if (!isVisible) return null

  return (
    <div className="loading-modal-overlay">
      <div className="loading-modal-content">
        <div className="loading-spinner"></div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  )
}

export default LoadingModal
