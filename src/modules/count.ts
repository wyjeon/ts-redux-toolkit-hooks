import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 상태의 타입
type CounterState = {
  number: number;
};

// 초기상태
const initialState: CounterState = {
  number: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.number = state.number + action.payload;
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
