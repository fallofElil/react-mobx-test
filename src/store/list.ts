import { observable, action, makeObservable } from 'mobx';
// import shortid from 'shortid';
import { IListItemStore } from './list-item';

export interface IListStore {
  items: IListItemStore[];
  addItem(item: IListItemStore): void;
}

class ListStore implements IListStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addItem: action,
    });
  }

  addItem(item: IListItemStore): void {
    this.items.push(item);
  }
}

export default new ListStore();
