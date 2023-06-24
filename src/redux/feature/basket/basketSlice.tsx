"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TBasketState = {
  [id: string]: number;
};

const initialState: TBasketState = {};

interface IPayloadId {
  id: string;
}
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IPayloadId>) => {
      const count = state[action.payload.id] || 0;
      if (count < 30) {
        state[action.payload.id] = count + 1;

      }
    },
    decrement: (state, action: PayloadAction<IPayloadId>) => {
      const id = action.payload.id;
      const count = state[id];

      if (!count) {
        return
      }

      if (count === 1) {
        delete state[id];
        return;
      }

      state[id] = count - 1;

    }
  },
});

export interface State {
  options: TBasketState
}

export const { increment, decrement} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

