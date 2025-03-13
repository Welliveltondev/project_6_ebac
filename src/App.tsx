import CartCompras from './components/CartCompras'
import Footer from './components/Footer'
import Home from './components/Home'
import Restaurante from './components/Restaurantes'
import { GlobalStyle } from './styles'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: '/restaurantes',
    element: <Restaurante />
  }
])

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurante />} />
  </Routes>
)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
