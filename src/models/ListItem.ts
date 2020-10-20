import { types, Instance } from 'mobx-state-tree';
import shortid from 'shortid';

export type DataListItemModel = Instance<typeof DataListItem>;
export type DataListModel = Instance<typeof DataList>;

export const DataListItem = types.model('DataListItem', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  visible: types.optional(types.boolean, true),
});
// .views((self) => ({
//   get getItem() {
//     return self;
//   },
// }));

export const DataList = types
  .model('DataList', {
    items: types.optional(types.array(DataListItem), []),
  })
  .actions((self) => {
    return {
      addItem(item: DataListItemModel) {
        self.items.push({
          id: shortid(),
          title: item.title,
          description: item.description,
          visible: item.visible,
        });
      },
    };
  });
