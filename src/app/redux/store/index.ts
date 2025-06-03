import { configureStore } from '@reduxjs/toolkit';
import { medicineReducer } from '../reducers/medicine.reducers';

export const store = configureStore({
  reducer: {
    medicine: medicineReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch