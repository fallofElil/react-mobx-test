import { SnapshotIn } from 'mobx-state-tree';
import shortid from 'shortid';
import { DataList, DataListItem, DataListItemModel } from './ListItem';
import RootStore, { RootStoreModel, RootStoreEnv } from './RootStore';

const testItem: SnapshotIn<DataListItemModel> = {
  id: shortid(),
  title: 'Test title',
  description: 'Test description',
};

export const createStore = (): RootStoreModel => {
  const dataList = DataList.create({
    items: [testItem],
  });

  const dataListItem = DataListItem.create({
    id: shortid(),
    title: '',
    description: '',
  });

  const env: RootStoreEnv = { dataList };

  const rootStore = RootStore.create(
    {
      dataList,
      dataListItem,
    },
    env,
  );
  return rootStore;
};
