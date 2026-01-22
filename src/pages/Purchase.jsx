import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchasesCard from "../components/Purchases/PurchasesCard"
import './styles/Purchase.css'

const Purchase = () => {

  const [purchases, getPurchases] =  useFetch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    getPurchases(url, getConfigToken())
  }, [])
  
  console.log(purchases)
  return (
    <div className="purchases_general">
        <h1>Mis Compras</h1>
        {purchases?.length === 0 || !purchases ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <i className='bx bx-shopping-bag' style={{ fontSize: '64px', color: 'var(--ml-gray-text)' }}></i>
            <p style={{ fontSize: '18px', color: 'var(--ml-gray-text)', marginTop: '16px' }}>
              Aún no has realizado compras
            </p>
          </div>
        ) : (
          <div className="purchases_list">
              { 
              purchases?.map(infoPurchase => (
                  <PurchasesCard
                  key={infoPurchase.id}
                  purchase={infoPurchase}
                  />
              ))
              }
          </div>
        )}
    </div>
  )
}

export default Purchase