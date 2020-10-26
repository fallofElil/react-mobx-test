import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type listItemState = ListItem;

const initialState: listItemState = {
  id: '',
  title: '',
  description: '',
  visible: false,
};

const listItemSlice = createSlice({
  name: 'ListItem',
  initialState,
  reducers: {
    setId: (state: listItemState, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setTitle: (state: listItemState, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state: listItemState, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setVisible: (state: listItemState, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setItem: (state: listItemState, action: PayloadAction<ListItem>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.visible = action.payload.visible;
    },
    clearItem: () => initialState,
  },
});

export const listItemActions = {
  setId: listItemSlice.actions.setId,
  setTitle: listItemSlice.actions.setTitle,
  setDescription: listItemSlice.actions.setDescription,
  setVisible: listItemSlice.actions.setVisible,
  clearItem: listItemSlice.actions.clearItem,
};

export default listItemSlice.reducer;
