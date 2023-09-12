import { createSlice } from "@reduxjs/toolkit";

const creatSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const{addItem}=creatSlice.actions
export default creatSlice.reducer;
