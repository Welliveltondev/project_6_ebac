import { useEffect, useState } from 'react'
import esfirra from '../../assets/image/esfirra.png'
import close from '../../assets/image/close.png'

import * as S from './styles'
import { getDescription, RestauranteType } from '../Restaurantes'
import { useDispatch } from 'react-redux'
type ProdutTypes = {
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

type ProdutoProps = {
  produto: RestauranteType
}

import { add, open } from '../../store/reducer/cart'
import { useGetFullResQuery } from '../../services/api'

const Produto = ({ produto }: ProdutoProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    setModalOpen(true)
    dispatch(open())
  }

  const [stateProdutos, setProdutos] = useState<RestauranteType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])
  const [modalOpen, setModalOpen] = useState(true)

  const { data } = useGetFullResQuery()
  return (
    <div>
      {data?.map((item: RestauranteType) => (
        <S.DivProduto key={item.id}>
          <S.ImgProdu src={item.capa} alt="" />
          <S.H3Produ>{item.titulo}</S.H3Produ>
          <S.ParagraPro>{getDescription(item.descricao)}</S.ParagraPro>
          <S.BotaoProdu onClick={() => setModalOpen(false)}>
            Adicionar ao carrinho
          </S.BotaoProdu>
        </S.DivProduto>
      ))}

      <S.ModalCon className={modalOpen ? 'visivel' : 'overlay'}>
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
              <S.SaibaMais onClick={addToCart}>
                Adicionar ao carrinho - R$60,60
              </S.SaibaMais>
            </S.Botao_Modal>
          </div>
        </S.Conteudo>
      </S.ModalCon>
    </div>
  )
}

export default Produto
