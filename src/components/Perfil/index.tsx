import Footer from '../Footer'
import Produto from '../Porduto'
import {
  HeaderPerfil,
  Logo,
  PerfilContainer,
  RestPerfil,
  CartPefil,
  Apresentacao,
  Paragrafo2,
  ListaProdutos,
  Paragrafo
} from './styles'

import LogoImg from '../../assets/image/logo.png'
import Massa from '../../assets/image/macarrao.png'
import Vetor from '../../assets/image/Vector.png'

const Perfil = () => {
  return (
    <>
      <PerfilContainer id="perfil">
        <HeaderPerfil style={{ backgroundImage: `url(${Vetor})` }}>
          <div>
            <RestPerfil>restaurante</RestPerfil>
            <Logo>
              <img src={LogoImg} alt="" />
            </Logo>
            <CartPefil>0 produtos no carrinho </CartPefil>
          </div>
        </HeaderPerfil>
        <Apresentacao style={{ backgroundImage: `url(${Massa})` }}>
          <div>
            <Paragrafo>italiana</Paragrafo>
            <Paragrafo2>La Dolce Vita Trattoria</Paragrafo2>
          </div>
        </Apresentacao>
      </PerfilContainer>
      <ListaProdutos>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
      </ListaProdutos>
      <Footer />
    </>
  )
}

export default Perfil
