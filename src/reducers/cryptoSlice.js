import { createSlice } from '@reduxjs/toolkit'

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState: [],
  reducers: {
    cryptoAdded(state, action) {
      state.push({
        payload: action.payload,
      })
    },
  }
})

export const { cryptoAdded } = cryptoSlice.actions
export default cryptoSlice.reducer