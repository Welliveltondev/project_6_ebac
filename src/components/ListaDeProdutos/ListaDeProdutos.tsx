import React from 'react'
import { Lista } from './styles'
import Produto from '../Produto'
import { RestauranteType } from '../Restaurantes'

const ListaDeProdutos = () => {
  return (
    <Lista>
      <Produto />
      <Produto />
      <Produto />
    </Lista>
  )
}

export default ListaDeProdutos
