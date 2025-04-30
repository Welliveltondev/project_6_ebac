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

export type PropsRestaurante = {
  nome: string
  destaque: string
  categoria?: string
  avaliacoes?: number
  ref?: string
}

const Restaurante = ({
  nome,
  categoria,
  destaque,
  avaliacoes
}: PropsRestaurante) => (
  <RestContainer className="container-restaurante">
    <div id="#">
      <img src={Massa} alt="" />
      <DesCat>
        <Destaque>{destaque}</Destaque>
        <Categoria>{categoria}</Categoria>
      </DesCat>
    </div>

    <NotaCont>
      <div>
        <h2>{nome} </h2>
        <div>
          <span>{avaliacoes}</span> <Avaliacao src={NotaImg} alt="" />
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
    <BotaoLink href="/perfil">Saiba mais</BotaoLink>
  </RestContainer>
)

export default Restaurante
