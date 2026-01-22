import './styles/ProductCardSkeleton.css';

const ProductCardSkeleton = () => {
  return (
    <article className='product-card-skeleton'>
      <div className='skeleton-image'></div>
      <div className='skeleton-content'>
        <div className='skeleton-title'></div>
        <div className='skeleton-title short'></div>
        <div className='skeleton-price'></div>
        <div className='skeleton-shipping'></div>
        <div className='skeleton-button'></div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
