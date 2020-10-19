import { types, Instance } from 'mobx-state-tree';
import { DataListItem, DataList } from './ListItem';

export type RootStoreModel = Instance<typeof RootStore>;

const RootStore = types.model('RootStore', {
  dataListItem: DataListItem,
  dataList: DataList,
});

export default RootStore;
