import React, { useEffect, useState } from 'react'
import { Lista } from './styles'
import Restaurante, { RestauranteType } from '../Restaurantes'
import Footer from '../Footer'

const ListaDeRestaurantes = () => {
  const [stateRestaurantes, setRestaurante] = useState<RestauranteType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <>
      <Lista>
        {stateRestaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            cardapio={restaurante.cardapio}
            destacado={restaurante.destacado}
          />
        ))}
      </Lista>
      <Footer />
    </>
  )
}

export default ListaDeRestaurantes
