import { useState } from 'react'
import esfirra from '../../assets/image/esfirra.png'

import * as S from './styles'

export type RestauranteType = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: string
  preco: number
}

const Produto = () => {
  return (
    <>
      <S.DivProduto>
        <S.ImgProdu src={esfirra} alt="" />
        <S.H3Produ>Pizza margareti</S.H3Produ>
        <S.ParagraPro>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </S.ParagraPro>
        <S.BotaoProdu>Adicionar ao carrinho</S.BotaoProdu>
      </S.DivProduto>

      {/*Modal aqui*/}
    </>
  )
}

export default Produto
