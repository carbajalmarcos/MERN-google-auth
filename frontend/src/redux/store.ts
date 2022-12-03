import budgetReducer from './states/budget';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch