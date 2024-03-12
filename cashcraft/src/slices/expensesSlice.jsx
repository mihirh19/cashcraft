import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
   name: "expenses",
   initialState: null,
   reducers: {
      setExpenses: (state, action) => {
         return action.payload;
      },
      addExpense: (state, action) => {
         state.push(action.payload);
      },
      removeExpense: (state, action) => {
         return state.filter(expense => expense.id !== action.payload);
      },
   }
});

export default expensesSlice.reducer;
export const { setExpenses, addExpense, removeExpense } = expensesSlice.actions;
