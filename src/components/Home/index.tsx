import Header from '../Header'
import { Lista } from '../Listagem/styles'
import Restaurante from '../Restaurantes'
import { HomeCon } from './styles'

const Home = () => (
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
)

export default Home
