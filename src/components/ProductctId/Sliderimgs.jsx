import { useState } from 'react'
import './styles/Sliderimgs.css'

const Sliderimgs = ({ product }) => {
 console.log(product)

    const [currentIndex, setCurrentIndex] = useState(0)

    const objStyle ={
        transform:`translateX(calc(-${currentIndex} / 3 *100% ))`
    }

    const handlePrev = () => {
      if (currentIndex === 0) {
        return setCurrentIndex(2);
      } else {
        setCurrentIndex((prev) => prev - 1);
      }
    };
    
    const handleNext = () => {
      if (currentIndex === 2) {
        return setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    };

  // Manejar ambos formatos de imagen (string u objeto con .url)
  const getImageUrl = (img) => {
    if (typeof img === 'string') return img
    if (img && img.url) return img.url
    return 'https://via.placeholder.com/400?text=Sin+Imagen'
  }

  return (
    <div className="slider">
        <button onClick={handlePrev} className='slider_btn slider_prev'><i className='bx bx-chevron-left'></i></button>
        <div className="slider_movable" style={objStyle}>
            {
                product?.images?.map((infoImg, index) =>(
                    <div key={index} className="slider_img-container">
                        <img className="slider_img" src={getImageUrl(infoImg)} alt={product?.title || ''} />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className='slider_btn slider_next'><i className='bx bx-chevron-right' ></i></button>
    </div>
  )
}

export default Sliderimgs