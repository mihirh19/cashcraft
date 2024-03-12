import { createSlice } from '@reduxjs/toolkit';

const currUserSlice = createSlice({
   name: "currUser",
   initialState: null,
   reducers: {
      setCurrUser: (state, action) => {
         return action.payload;
      },
   }
});

export const { setCurrUser } = currUserSlice.actions;
export default currUserSlice.reducer;