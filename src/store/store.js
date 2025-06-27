import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
