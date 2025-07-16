import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { useGetFullResQuery } from '../../services/api'
import { RestauranteType } from '../Restaurantes'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data } = useGetFullResQuery()
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
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {data &&
              items.map((item: RestauranteType) => (
                <LiProduto key={item.id}>
                  <ImgCart src={pizza} alt="" />
                  <ConatinerTextCart>
                    <Titlecart>{item.titulo}</Titlecart>
                    <PrecoCart>{item.preco}</PrecoCart>
                  </ConatinerTextCart>
                  <Lixeira onClick={() => removeItem(item.id)}>
                    {' '}
                    <img src={lixeira} alt="" />
                  </Lixeira>
                </LiProduto>
              ))}
          </ul>
          <Totalcart>
            <p>Valor total</p>
            <span>R$ {getTotalPrice()}</span>
          </Totalcart>
          <ButonCart
            onClick={() => {
              navigate('/payment')
            }}
            type="button"
          >
            Continuar com a compra
          </ButonCart>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
