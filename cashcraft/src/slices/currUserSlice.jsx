import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   userFirstName: "",
   userLastName: "",
   userEmail: "",
   id: "",

}

const currUserSlice = createSlice({
   name: "currUser",
   initialState,
   reducers: {
      setCurrUser: (state, action) => {
         return action.payload;
      },
      deleteCurrUser: () => {
         return initialState;
      }
   }
});

export const { setCurrUser, deleteCurrUser } = currUserSlice.actions;
export default currUserSlice.reducer;