import shortid from 'shortid';
import List from '../list';
import { IListItemStoreProps } from '../list-item';

describe('List store', () => {
  it('checks initial state', () => {
    expect(List.items).toStrictEqual([]);
  });

  it('check Item push to ListItem array', () => {
    const item0: IListItemStoreProps = {
      _id: shortid(),
      _title: 'Test title 0',
      _description: 'Test description',
      _visible: true,
    };

    const item1: IListItemStoreProps = {
      _id: shortid(),
      _title: 'Test title 1',
      _description: 'Test description',
      _visible: true,
    };

    List.addItem(item0);
    List.addItem(item1);
    expect(List.items.length).toBe(2);
    //expect(List.items[0].)
  });
});
