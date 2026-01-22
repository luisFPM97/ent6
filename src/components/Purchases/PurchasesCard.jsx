const PurchasesCard = ({purchase}) => {
    console.log(purchase)
    
    // Calcular total de la compra
    const totalPurchase = purchase.cart?.reduce((acc, item) => {
        return acc + (Number(item.product.price) * item.quantity)
    }, 0) || 0
    
    // Formatear fecha
    const purchaseDate = new Date(purchase.createdAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
    
    return (
        <article className="purchase_item">
            <div className="purchase_header">
                <h3 className="purchase_date">Compra realizada el {purchaseDate}</h3>
                <span className="purchase_total">Total: ${totalPurchase.toFixed(2)}</span>
            </div>
            <div className="purchase_products">
                {purchase.cart?.map((item, index) => {
                    // Manejar ambos formatos de imagen (string u objeto)
                    const imageUrl = item.product.images?.[0] 
                        ? (typeof item.product.images[0] === 'string' 
                            ? item.product.images[0] 
                            : item.product.images[0].url)
                        : 'https://via.placeholder.com/80?text=Sin+Imagen'
                    
                    return (
                        <div key={index} className="purchase_product_item">
                            <img className="img_purchase" src={imageUrl} alt={item.product.title} />
                            <div className="purchase_product_info">
                                <h4 className="purchase_title">{item.product.title}</h4>
                                <span className="purchase_q">Cantidad: {item.quantity}</span>
                                <span className="purchase_price">${item.product.price?.toFixed(2)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default PurchasesCard