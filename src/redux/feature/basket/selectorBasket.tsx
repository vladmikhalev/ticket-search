import { RootState } from "@/redux/store";
import { TBasketState } from "./basketSlice";


export const selectBasketModule = (state: RootState): TBasketState => state.basket;


export const selectProductAmount = (state: RootState, id: string) => selectBasketModule(state)[id] || 0;

