import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteType } from '../components/Restaurantes'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFullRes: builder.query<RestauranteType[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFullResQuery } = api
export default api
