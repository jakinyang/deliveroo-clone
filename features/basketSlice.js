import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
  
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let newItems = state.filter(() => newItems !== action.payload)
      state.items = [...newItems];
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = basketSlice.actions

export const selectBasketItems = state => state.basket.items;

export default basketSlice.reducer