import Header from '../../components/Header'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes/ListaDeRestaurantes'
import { HomeCon } from './styles'

const Home = () => {
  return (
    <>
      <HomeCon>
        <Header />
        <ListaDeRestaurantes />
      </HomeCon>
    </>
  )
}

export default Home
