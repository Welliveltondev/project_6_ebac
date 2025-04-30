import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Lista } from './styles'
import Restaurante from '../../components/Restaurantes'
import { HomeCon } from './styles'
import Perfil from '../../components/Perfil'

const Home = () => (
  <>
    <HomeCon>
      <Header />
      <Lista>
        <Restaurante
          nome={'Hioki Sushi'}
          destaque="Destaque da semana"
          categoria="Italyana"
          avaliacoes={5}
        />
        <Restaurante
          nome={'Sushi'}
          destaque="Destaque da semana"
          categoria="Suiça"
          avaliacoes={4}
        />
        <Restaurante
          nome={'La Dolce Vita Trattoria'}
          destaque="Destaque da semana"
          categoria="Norte Americana"
          avaliacoes={4}
        />
        <Restaurante
          nome={'Sushi'}
          destaque="Destaque da semana"
          categoria="Arabica"
          avaliacoes={4}
        />
        <Restaurante
          nome={'Hioki Sushi'}
          destaque="Destaque da semana"
          categoria="Brasileira"
          avaliacoes={4}
        />
        <Restaurante
          nome={'La Dolce Vita Trattoria'}
          destaque="Destaque da semana"
          categoria="Indiana"
          avaliacoes={4}
        />
        <Restaurante
          nome={'Sushi'}
          destaque="Destaque da semana"
          categoria="Francesa"
          avaliacoes={4}
        />
        <Restaurante
          nome={'La Dolce Vita Trattoria'}
          destaque="Destaque da semana"
          categoria="Alemã"
          avaliacoes={4}
        />
      </Lista>
    </HomeCon>
    <Footer />
  </>
)

export default Home
