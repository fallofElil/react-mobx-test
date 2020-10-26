import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface listState {
  items: ListItem[];
}

const initialState: listState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state: listState, action: PayloadAction<ListItem>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const listActions = {
  addItem: listSlice.actions.addItem,
};

export default listSlice.reducer;
