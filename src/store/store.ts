import { configureStore } from '@reduxjs/toolkit';

import listItem from './slices/listItemSlice';
import list from './slices/listSlice';

const store = configureStore({
  reducer: {
    listItem,
    list,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
