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
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducer/cart'

const Cart = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, valor) => {
      return (acumulator += valor.preco!)
    }, 0)
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <LiProduto key={item.id}>
              <ImgCart src={item.capa} alt="" />
              <ConatinerTextCart>
                <Titlecart>{item.titulo}</Titlecart>
                <PrecoCart>{item.preco}</PrecoCart>
              </ConatinerTextCart>
              <Lixeira onClick={() => removeItem(item.id)}>x</Lixeira>
            </LiProduto>
          ))}
        </ul>
        <Totalcart>
          <p>Valor total</p>
          <span>R$ {getTotalPrice()}</span>
        </Totalcart>
        <ButonCart type="button">Continuar com a compra</ButonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
