import { createSlice } from '@reduxjs/toolkit';

const allUserSlice = createSlice({
   name: "allUser",
   initialState: [],
   reducers: {
      setAllUser: (state, action) => {
         // console.log(action.payload);
         return action.payload;
      },
      deleteAllUser: () => {
         return [];
      }
   }
});

export const { setAllUser, deleteAllUser } = allUserSlice.actions;
export default allUserSlice.reducer;
