import React from 'react'
import pizza from '../../assets/image/macarrao.png'
import lixeira from '../../assets/image/lixeira-de-reciclagem 1.png'
import {
  ButonCart,
  CartContainer,
  ConatinerTextCart,
  ImgCart,
  LiProduto,
  Lixeira,
  Overlay,
  PrecoCart,
  Sidebar,
  Titlecart,
  Totalcart
} from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <LiProduto>
            <ImgCart src={pizza} alt="" />
            <ConatinerTextCart>
              <Titlecart>Pizza Marguerita</Titlecart>
              <PrecoCart>R$ 60,90</PrecoCart>
            </ConatinerTextCart>
            <Lixeira>x</Lixeira>
          </LiProduto>

          <LiProduto>
            <ImgCart src={pizza} alt="" />
            <ConatinerTextCart>
              <Titlecart>Pizza Marguerita</Titlecart>
              <PrecoCart>R$ 60,90</PrecoCart>
            </ConatinerTextCart>
            <Lixeira>x</Lixeira>
          </LiProduto>
        </ul>
        <Totalcart>
          <p>Valor total</p>
          <span>R$ 182,7</span>
        </Totalcart>
        <ButonCart type="button">Continuar com a compra</ButonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
