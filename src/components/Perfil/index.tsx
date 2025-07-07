import { open } from '../../store/reducer/cart'

import * as S from './styles'
import LogoImg from '../../assets/image/logo.png'
import Massa from '../../assets/image/macarrao.png'
import Vetor from '../../assets/image/Vector.png'
import ListaDeProdutos from '../ListaDeProdutos/ListaDeProdutos'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Perfil = () => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <S.Father>
      <S.PerfilContainer>
        <S.HeaderPerfil style={{ backgroundImage: `url(${Vetor})` }}>
          <div>
            <S.RestPerfil>Reastaurantes</S.RestPerfil>
            <S.Logo>
              <img src={LogoImg} alt="" />
            </S.Logo>
            <S.CartPefil onClick={openCart}>
              {items.length} produtos no carrinho{' '}
            </S.CartPefil>
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
