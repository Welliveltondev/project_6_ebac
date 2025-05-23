import { useEffect, useState } from 'react'
import esfirra from '../../assets/image/esfirra.png'

import * as S from './styles'
import { RestauranteType } from '../Restaurantes'

const Produto = () => {
  const [modal, setModal] = useState(false)
  const [produto, setProduto] = useState<RestauranteType>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProduto(res))
  }, [])
  return (
    <>
      <S.DivProduto>
        <S.ImgProdu src={esfirra} alt="" />
        <S.H3Produ>Pizza margareti</S.H3Produ>
        <S.ParagraPro>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </S.ParagraPro>
        <S.BotaoProdu onClick={() => setModal(true)}>
          Adicionar ao carrinho
        </S.BotaoProdu>
      </S.DivProduto>
    </>
  )
}

export default Produto
