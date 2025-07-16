import React, { useEffect, useState } from 'react'
import { Lista } from './styles'
import Restaurante, { RestauranteType } from '../Restaurantes'
import Footer from '../Footer'
import { useGetFullResQuery } from '../../services/api'

const ListaDeRestaurantes = () => {
  // const [stateRestaurantes, setRestaurante] = useState<RestauranteType[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRestaurante(res))
  // }, [])
  const { data } = useGetFullResQuery()
  return (
    <>
      <Lista>
        {data &&
          data.map((restaurante: RestauranteType) => (
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
              preco={restaurante.preco}
            />
          ))}
      </Lista>
      <Footer />
    </>
  )
}

export default ListaDeRestaurantes
