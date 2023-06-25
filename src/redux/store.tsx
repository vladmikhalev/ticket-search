import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./feature/basket/basketSlice";
import { movieApi } from "./services/movieApi";
// import { movieApi } from "@/redux/services/movieApi";


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
// const state = store.getState();
// console.log(state, 'state');