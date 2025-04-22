import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Restaurante from './components/Restaurantes'
import CartCompras from './components/CartCompras'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurante />} />
    <Route path="/carrinho:id" element={<CartCompras />} />
  </Routes>
)

export default Rotas

//componente que servirá de rotas para as elementos especificado no path e o component que será exibido está no element//
