import CartCompras from '../CartCompras'
import Footer from '../Footer'
import Header from '../Header'
import { Lista } from '../Listagem/styles'
import Restaurante from '../Restaurantes'
import { HomeCon } from './styles'

const Home = () => (
  <>
    <HomeCon>
      <Header />
      <Lista>
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
      </Lista>
    </HomeCon>
    <Footer />
    <CartCompras />
  </>
)

export default Home
