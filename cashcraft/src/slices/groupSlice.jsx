import { createSlice } from '@reduxjs/toolkit';

const groupSlice = createSlice({
   name: "groups",
   initialState: [],
   reducers: {
      setGroups: (state, action) => {

         return action.payload;
      },
      addGroup: (state, action) => {
         state.push(action.payload);
      },
      deleteGroup: (state, action) => {
         return state.filter(group => group.id !== action.payload);
      },
      deleteGroups: () => {
         return [];
      }
   }
});

export const { setGroups, addGroup, deleteGroup, deleteGroups } = groupSlice.actions;
export default groupSlice.reducer;