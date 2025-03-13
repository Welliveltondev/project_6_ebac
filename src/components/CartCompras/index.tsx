import restau from '../../assets/image/Vector.png'
import logo from '../../assets/image/logo.png'
import macarrao from '../../assets/image/macarrao.png'
import ListaDeProdutos from '../ListaDeProduto'
import { CartCo, DivMaior, Macarrao, P1, P2, Pcon } from './styles'
const CartCompras = () => (
  <>
    <CartCo className="opacity" style={{ backgroundImage: `url(${restau})` }}>
      <DivMaior>
        <p>restaurante</p>
        <img src={logo} alt="" />
        <span>0 produto(s) ao carrinho</span>
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
