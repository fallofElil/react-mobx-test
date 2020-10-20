import ListItemStore from '../list-item';

describe('ListItem store', () => {
  it('checks initial state', () => {
    expect(ListItemStore.title).toBe('Нет заголовка')
    expect(ListItemStore.description).toBe('')
    expect(ListItemStore.visible).toBe(true)
  })

  it('checks immutability', () => {
    ListItemStore.description = 'I am mutable description'

    expect(ListItemStore.description).toBe('I am mutable description')
    //expect(ListItemStore.description).toBe('')
  })
})

