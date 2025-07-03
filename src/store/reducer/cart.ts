import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestauranteType } from '../../components/Restaurantes'

type CartState = {
  items: RestauranteType[]
  isopen: boolean
}

const initialState: CartState = {
  items: [],
  isopen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestauranteType>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isopen = true
    },
    close: (state) => {
      state.isopen = false
    }
  }
})

export const { add, close, open } = cartSlice.actions
export default cartSlice.reducer
