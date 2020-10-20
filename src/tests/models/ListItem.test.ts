// import { SnapshotIn } from 'mobx-state-tree';
import shortid from 'shortid';
import { DataListItem, DataListItemModel } from '../../models/ListItem';

it('CREATING INSTANCE OF MODEL', () => {
  // const item: SnapshotIn<DataListItemModel> = {
  //   title: 'Demo content',
  //   description: 'This item exists to show and test functionality of the App',
  //   visible: true,
  // };
  const initialState = {
    id: shortid(),
    title: 'Test title',
    description: 'Test description',
  };
  const item = DataListItem.create(initialState);

  expect(item.title).toBe('Test title');
  expect(item.description).toBe('Test description');
  expect(item.visible).toBe(true);
});
