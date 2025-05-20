import esfirra from '../../assets/image/esfirra.png'
import close from '../../assets/image/close.png'

import Produto, { RestauranteType } from '../Produto'
import {
  HeaderPerfil,
  Logo,
  PerfilContainer,
  RestPerfil,
  CartPefil,
  Apresentacao,
  Paragrafo2,
  ListaProdutos,
  Paragrafo,
  Title,
  Botao_Modal,
  Description,
  SaibaMais,
  ImgModal,
  Conteudo,
  Modal
} from './styles'

import LogoImg from '../../assets/image/logo.png'
import Massa from '../../assets/image/macarrao.png'
import Vetor from '../../assets/image/Vector.png'
import { useState } from 'react'

const Perfil = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PerfilContainer id="perfil">
        <HeaderPerfil style={{ backgroundImage: `url(${Vetor})` }}>
          <div>
            <RestPerfil>Restaurante</RestPerfil>
            <Logo>
              <img src={LogoImg} alt="" />
            </Logo>
            <CartPefil onClick={() => setModalOpen(true)}>
              0 produtos no carrinho{' '}
            </CartPefil>
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

      <Modal className="overlay">
        <Conteudo className={modalOpen ? 'visivel' : ''}>
          <div>
            <ImgModal src={esfirra} alt="" />
          </div>
          <div>
            <span>
              <Title>Pizza Marguerita</Title>
              <img onClick={() => setModalOpen(false)} src={close} alt="" />
            </span>

            <Description>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </Description>
            <Botao_Modal onClick={() => setModalOpen(false)}>
              <SaibaMais>Adicionar ao carrinho - R$60,60</SaibaMais>
            </Botao_Modal>
          </div>
        </Conteudo>
      </Modal>
    </>
  )
}

export default Perfil
