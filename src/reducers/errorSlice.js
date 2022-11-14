import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    errorAdded(state, action) {
      state.push({
        payload: action.payload,
      })
    },
  }
})

export const { errorAdded } = errorSlice.actions
export default errorSlice.reducer