import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductId from './pages/ProductId';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  

  return (
   <div>hola
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductId/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </div>
  )
}

export default App
