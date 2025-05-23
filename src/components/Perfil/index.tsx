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

const Perfil = ({ produtos }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [produto, setProdut] = useState<RestauranteType>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdut(res))
  }, [])

  return (
    <>
      <S.PerfilContainer id="perfil">
        <S.HeaderPerfil style={{ backgroundImage: `url(${Vetor})` }}>
          <div>
            <S.RestPerfil>Restaurante</S.RestPerfil>
            <S.Logo>
              <img src={LogoImg} alt="" />
            </S.Logo>
            <S.CartPefil onClick={() => setModalOpen(false)}>
              0 produtos no carrinho{' '}
            </S.CartPefil>
          </div>
        </S.HeaderPerfil>
        <S.Apresentacao style={{ backgroundImage: `url(${Massa})` }}>
          <div>
            <S.Paragrafo>italiana</S.Paragrafo>
            <S.Paragrafo2>La Dolce Vita Trattoria</S.Paragrafo2>
          </div>
        </S.Apresentacao>
        <ListaDeProdutos />
      </S.PerfilContainer>
      {/* <Modal /> */}

      <S.Modal className={modalOpen ? 'visivel' : 'overlay'}>
        <S.Conteudo>
          <div>
            <S.ImgModal src={esfirra} alt="" />
          </div>
          <div>
            <span>
              <S.Title>Pizza Marguerita</S.Title>
              <img onClick={() => setModalOpen(true)} src={close} alt="" />
            </span>

            <S.Description>
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
            </S.Description>
            <S.Botao_Modal>
              <S.SaibaMais>Adicionar ao carrinho - R$60,60</S.SaibaMais>
            </S.Botao_Modal>
          </div>
        </S.Conteudo>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Perfil
