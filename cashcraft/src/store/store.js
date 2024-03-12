import { configureStore } from '@reduxjs/toolkit';
import allUserSlice from '../slices/allUserSlice';
import currUserSlice from '../slices/currUserSlice';
import groupSlice from '../slices/groupSlice';
import expensesSlice from '../slices/expensesSlice';

const store = configureStore({
   reducer: {
      allUser: allUserSlice,
      currUser: currUserSlice,
      groups: groupSlice,
      expenses: expensesSlice,
   },
});

export default store;


