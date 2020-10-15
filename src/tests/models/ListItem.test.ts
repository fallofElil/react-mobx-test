import { DataListItem } from '../../models/ListItem';

it('can create an instance of a model', () => {
  const item = DataListItem.create({
    title: 'Demo content',
    description: 'This item exists to show and test functionality of the App',
    visible: true,
  });

  expect(item.title).toBe('Demo content');
  expect(item.description).toBe('This item exists to show and test functionality of the App');
  expect(item.visible).toBe(true);
});
