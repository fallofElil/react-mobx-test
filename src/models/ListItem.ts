import { types } from 'mobx-state-tree';

export const DataListItem = types.model('DataListItem', {
  title: types.string,
  description: types.string,
  visible: types.boolean,
});

export const DataList = types.model({
  items: types.optional(types.array(DataListItem), []),
});
