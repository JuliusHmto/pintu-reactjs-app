import { createSlice } from '@reduxjs/toolkit'

const pricesSlice = createSlice({
  name: 'prices',
  initialState: [],
  reducers: {
    priceAdded(state, action) {
      state.push({
        payload: action.payload,
      })
    },
  }
})

export const { priceAdded } = pricesSlice.actions
export default pricesSlice.reducer