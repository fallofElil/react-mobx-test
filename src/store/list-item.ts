import { observable, action, makeObservable } from 'mobx';
import shortid from 'shortid';

export interface IListItemStore {
  id?: string;
  title: string;
  description: string;
  visible: boolean;
  setTitle(title: string): void;
  setDescription(description: string): void;
  setVisible(visible: boolean): void;
}

class ListItemStore implements IListItemStore {
  readonly id: string = shortid();
  title = 'Нет заголовка';
  description = '';
  visible = true;

  constructor() {
    makeObservable(this, {
      title: observable,
      description: observable,
      visible: observable,
    });
  }

  @action setDescription(description: string): void {
    this.description = description;
  }

  @action setTitle(title: string): void {
    this.title = title;
  }

  @action setVisible(visible: boolean): void {
    this.visible = visible;
  }
}

export default new ListItemStore();
