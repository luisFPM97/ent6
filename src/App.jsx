import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductId from './pages/ProductId';
import Register from './pages/Register';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import HeaderNav from './components/shared/HeaderNav';
import Footer from './components/shared/Footer';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Purchase from './pages/Purchase';
import LoadingModal from './components/shared/LoadingModal';
import useLoadingStore from './hooks/useLoading';

function App() {
  const { isLoading, message } = useLoadingStore()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeaderNav />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductId />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/cart" element={<CartPage />} />
            <Route path='/purchase' element={<Purchase/>}/>
          </Route>
        </Routes>
      </div>
      <Footer />
      <LoadingModal isVisible={isLoading} message={message} />
    </div>
  );
}

export default App
