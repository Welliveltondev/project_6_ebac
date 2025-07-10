import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './components/Perfil'
import Checkout from './pages/Checkout/Checkout'
import Payment from './pages/Payment/Payment'
import Order from './pages/Order/Order'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/order" element={<Order />} />
  </Routes>
)

export default Rotas

//componente que servirá de rotas para as elementos especificado no path e o component que será exibido está no element//
