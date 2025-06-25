import React, { useEffect, useState } from 'react'
import { Lista } from './styles'
import Produto from '../Produto'
import { RestauranteType } from '../Restaurantes'

const ListaDeProdutos = () => {
  return (
    <Lista>
      <Produto />
    </Lista>
  )
}

export default ListaDeProdutos
