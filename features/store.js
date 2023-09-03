import { configureStore } from "@reduxjs/toolkit";
import iconslice from './slice';

const store = configureStore({
   reducer: {
      main: iconslice
   }
})
export default store;