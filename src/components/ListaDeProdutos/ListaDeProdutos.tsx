import React, { useEffect, useState } from 'react'
import { Lista } from './styles'
import Produto from '../Produto'
import { RestauranteType } from '../Restaurantes'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeProdutos = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Lista>
      <Produto
        produto={{
          id: 0,
          titulo: '',
          destacado: undefined,
          tipo: '',
          avaliacao: 0,
          descricao: '',
          capa: '',
          cardapio: undefined,
          preco: undefined
        }}
      />
      <Produto
        produto={{
          id: 0,
          titulo: '',
          destacado: undefined,
          tipo: '',
          avaliacao: 0,
          descricao: '',
          capa: '',
          cardapio: undefined,
          preco: undefined
        }}
      />
    </Lista>
  )
}

export default ListaDeProdutos
