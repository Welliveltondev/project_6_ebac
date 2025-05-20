import React, { useEffect, useState } from 'react'
import { Lista } from './styles'
import Restaurante, { RestauranteType } from '../Restaurantes'

type Aderreços = {
  restaurantes: RestauranteType[]
}

const ListaDeRestaurantes = () => {
  const [stateRestaurante, setRestaurante] = useState<RestauranteType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <Lista>
      {stateRestaurante.map((restau) => (
        <Restaurante
          key={restau.id}
          id={restau.id}
          titulo={restau.titulo}
          tipo={restau.tipo}
          avaliacao={restau.avaliacao}
          descricao={restau.descricao}
          capa={restau.capa}
          cardapio={restau.cardapio}
          destacado={restau.destacado}
        />
      ))}
    </Lista>
  )
}

export default ListaDeRestaurantes
