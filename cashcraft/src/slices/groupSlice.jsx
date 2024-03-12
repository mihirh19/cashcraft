import { createSlice } from '@reduxjs/toolkit';

const groupSlice = createSlice({
   name: "groups",
   initialState: null,
   reducers: {
      setGroups: (state, action) => {

         return action.payload;
      },
      addGroup: (state, action) => {
         state.push(action.payload);
      },
   }
});

export const { setGroups, addGroup } = groupSlice.actions;
export default groupSlice.reducer;