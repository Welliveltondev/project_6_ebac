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
          id: 1,
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
      {/* {items.map((item) => (
        <Produto
          key={item.id}
          produto={{
            id: item.id,
            titulo: item.titulo,
            destacado: undefined,
            tipo: '',
            avaliacao: 0,
            descricao: item.descricao,
            capa: item.capa,
            cardapio: undefined,
            preco: undefined
          }}
        />
      ))} */}
    </Lista>
  )
}

export default ListaDeProdutos
