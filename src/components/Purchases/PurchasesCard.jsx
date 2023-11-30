const PurchasesCard = ({purchase}) => {
    console.log(purchase)
  return (
    <article className="purchase_item">
        <header className="header_purchase">
            <img className="img_purchase" src={purchase.product.images[0].url} alt="" />
        </header>
        <h3 className="purchase_title">{purchase.product.title}</h3>
        <span className="purchase_q">{purchase.quantity}</span>
        <div className="purchase_price">{purchase.product.price}</div>
        <hr />
    </article>
    
  )
}

export default PurchasesCard