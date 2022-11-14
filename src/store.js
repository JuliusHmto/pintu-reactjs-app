import { configureStore } from '@reduxjs/toolkit'
import cryptosReducer from './reducers/cryptoSlice';
import pricesReducer from './reducers/priceSlice';
import errorsReeducer from './reducers/errorSlice';

export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    prices: pricesReducer,
    errors: errorsReeducer
  }
})