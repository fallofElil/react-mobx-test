import { types, Instance } from 'mobx-state-tree';
import { DataListItem, DataList, DataListModel } from './ListItem';

export type RootStoreModel = Instance<typeof RootStore>;
export type RootStoreEnv = {
  dataList: DataListModel;
};

const RootStore = types.model('RootStore', {
  dataListItem: DataListItem,
  dataList: DataList,
});

export default RootStore;
