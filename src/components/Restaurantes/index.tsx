import {
  DesText,
  Descricao,
  RestContainer,
  NotaCont,
  Categoria,
  Destaque,
  Avaliacao,
  DesCat,
  BotaoLink,
  ImgRest
} from './styles'
import NotaImg from '../../assets/image/star_favorite.png'
import Massa from '../../assets/image/macarrao.png'
import { useEffect, useState } from 'react'

// export type PropsRestaurante = {
//   nome: string
//   destaque: string
//   categoria?: string
//   avaliacoes?: number
//   ref?: string
// }

export type RestauranteType = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: string
  preco?: number
}

const Restaurante = ({
  avaliacao,
  capa,
  cardapio,
  descricao,
  destacado,
  id,
  preco,
  tipo,
  titulo
}: RestauranteType) => {
  return (
    <RestContainer className="container-restaurante">
      <div key={id}>
        <ImgRest src={capa} alt="" />
        <DesCat>
          <Destaque>{titulo}</Destaque>
          <Categoria>{tipo}</Categoria>
        </DesCat>
      </div>

      <NotaCont>
        <div>
          <h2>{titulo} </h2>
          <div>
            <span>{avaliacao}</span> <Avaliacao src={NotaImg} alt="" />
          </div>
        </div>
      </NotaCont>

      <Descricao>
        <DesText>{descricao}</DesText>
      </Descricao>
      <BotaoLink href="/perfil">Saiba mais</BotaoLink>
    </RestContainer>
  )
}

export default Restaurante
