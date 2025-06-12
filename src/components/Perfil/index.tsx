type Props = {
  produtos: RestauranteType[]
}
import { RestauranteType } from '../Restaurantes'
import * as S from './styles'
import esfirra from '../../assets/image/esfirra.png'
import close from '../../assets/image/close.png'

import LogoImg from '../../assets/image/logo.png'
import Massa from '../../assets/image/macarrao.png'
import Vetor from '../../assets/image/Vector.png'
import { useEffect, useState } from 'react'
import ListaDeProdutos from '../ListaDeProdutos/ListaDeProdutos'
import Footer from '../Footer'
import { useGetFullResQuery } from '../../services/api'

const Perfil = () => {
  const [modalOpen, setModalOpen] = useState(false)
  // const [produto, setProdut] = useState<RestauranteType>() //estado para definir produtos atraves da api
  const { data: produto } = useGetFullResQuery()
  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setProdut(res))
  // }, [])

  return (
    <S.Father>
      <S.PerfilContainer>
        <S.HeaderPerfil style={{ backgroundImage: `url(${Vetor})` }}>
          <div>
            <S.RestPerfil>Reastaurantes</S.RestPerfil>
            <S.Logo>
              <img src={LogoImg} alt="" />
            </S.Logo>
            <S.CartPefil>0 produtos no carrinho </S.CartPefil>
          </div>
        </S.HeaderPerfil>
        <S.Apresentacao style={{ backgroundImage: `url(${Massa})` }}>
          <div>
            <span>
              <S.Paragrafo>italiana</S.Paragrafo>
              <S.Paragrafo2>La Dolce Vita Trattoria</S.Paragrafo2>
            </span>
          </div>
        </S.Apresentacao>

        <ListaDeProdutos />
      </S.PerfilContainer>

      <Footer />
    </S.Father>
  )
}

export default Perfil
