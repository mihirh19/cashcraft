import { createSlice } from '@reduxjs/toolkit';

const allUserSlice = createSlice({
   name: "allUser",
   initialState: null,
   reducers: {
      setAllUser: (state, action) => {
         // console.log(action.payload);
         return action.payload;
      },
   }
});

export const { setAllUser } = allUserSlice.actions;
export default allUserSlice.reducer;
