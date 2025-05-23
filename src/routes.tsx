import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './components/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil produtos={[]} />} />
  </Routes>
)

export default Rotas

//componente que servirá de rotas para as elementos especificado no path e o component que será exibido está no element//
