import { observable, makeObservable } from 'mobx';
import { IListItemStoreProps } from './list-item';

export interface IListStore {
  items: IListItemStoreProps[];
  //addItem(item: IListItemStore): void;
}

class ListStore implements IListStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
    });
  }

  // addItem(item: IListItemStoreProps): void {
  //   this.items.push(item);
  // }
}

export default new ListStore();
