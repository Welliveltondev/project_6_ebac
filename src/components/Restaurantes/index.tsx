import {
  DesText,
  Descricao,
  RestContainer,
  NotaCont,
  Categoria,
  Destaque,
  Avaliacao,
  DesCat,
  BotaoLink
} from './styles'
import NotaImg from '../../assets/image/star_favorite.png'
import Massa from '../../assets/image/macarrao.png'
import { Link, Links } from 'react-router-dom'

const Restaurante = () => (
  <RestContainer className="container-restaurante">
    <div>
      <img src={Massa} alt="" />
      <DesCat>
        <Destaque>Destaque da semana</Destaque>
        <Categoria>Japonesa</Categoria>
      </DesCat>
    </div>

    <NotaCont>
      <div>
        <h2>Hioki Sushi </h2>
        <div>
          <span>4.9</span> <Avaliacao src={NotaImg} alt="" />
        </div>
      </div>
    </NotaCont>

    <Descricao>
      <DesText>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </DesText>
    </Descricao>
    <BotaoLink href="/restaurantes">Saiba mais</BotaoLink>
  </RestContainer>
)

export default Restaurante
