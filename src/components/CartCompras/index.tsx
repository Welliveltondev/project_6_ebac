import restau from '../../assets/image/Vector.png'
import logo from '../../assets/image/logo.png'
import macarrao from '../../assets/image/macarrao.png'
import ListaDeProdutos from '../ListaDeProduto'
import { CartCo, DivMaior, LinkCart, Macarrao, P1, P2, Pcon } from './styles'
import { useParams } from 'react-router-dom'

// const { id } = useParams()
const CartCompras = () => (
  <>
    <CartCo style={{ backgroundImage: `url(${restau})` }}>
      <DivMaior>
        <p>restaurante</p>
        <img src={logo} alt="" />
        <LinkCart href="carrinho">0 produto(s) no carrinho</LinkCart>
      </DivMaior>
    </CartCo>
    <Macarrao style={{ backgroundImage: `url(${macarrao})` }}>
      <Pcon>
        <P1>Italiana</P1>
        <P2>La Dolce Vita Trattoria</P2>
      </Pcon>
    </Macarrao>
    <ListaDeProdutos />
  </>
)

export default CartCompras
