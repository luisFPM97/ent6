import { useState } from "react";
import { addProductToCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import useLoadingStore from "../../hooks/useLoading";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const setLoading = useLoadingStore(state => state.setLoading)
  
  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddTocart =()=>{
    setLoading(true, 'Agregando al carrito...')
    dispatch(addProductToCartThunk(product.id, quantity))
    // Dar feedback visual después de un momento
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  return (
    <article className="product-info-detail">
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <div className="product-footer">
        <div className="product-price-section">
          <span>Precio</span>
          <span>${product?.price?.toFixed(2)}</span>
        </div>
        <div className="product-quantity">
          <span>Cantidad:</span>
          <div className="quantity-controls">
            <button onClick={handleMinus}>-</button>
            <div className="quantity-value">{quantity}</div>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddTocart}>
          <span>Agregar al carrito</span>
          <i className="bx bx-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductInfo;
