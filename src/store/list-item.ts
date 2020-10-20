import { observable, action } from 'mobx';
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
  @observable readonly id: string;
  @observable title: string;
  @observable description: string;
  @observable visible: boolean;

  constructor(id: string, description: string, title: string, visible: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.visible = visible;
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

export default new ListItemStore(shortid(), '', 'Нет заголовка', true);
