import { observable, action, computed, makeObservable } from 'mobx';
import shortid from 'shortid';

export interface IListItemStoreProps {
  _id: string;
  _title: string;
  _description: string;
  _visible: boolean;
  // title(): string;
  // setTitle(title: string): void;
  // setDescription(description: string): void;
  // setVisible(visible: boolean): void;
}

class ListItemStore implements IListItemStoreProps {
  private _initialState: IListItemStoreProps = {
    _id: '',
    _title: '',
    _description: '',
    _visible: true,
  };

  private _id: string = this._initialState._id;
  private _title: string = this._initialState._title;
  private _description: string = this._initialState._description;
  private _visible: boolean = this._initialState._visible;

  constructor() {
    this._id = shortid();

    makeObservable(this, {
      _id: observable,
      id: computed,
      _title: observable,
      title: computed,
      setTitle: action,
      _description: observable,
      description: computed,
      setDescription: action,
      _visible: observable,
      visible: computed,
      setVisible: action,
    });
  }

  public get id(): string {
    return this._id;
  }

  // public setId(id: string) {
  //   this._id = id;
  // }

  public get title(): string {
    return this._title;
  }

  public setTitle(title: string): void {
    this._title = title;
  }

  public get description(): string {
    return this._description;
  }

  public setDescription(description: string): void {
    this._description = description;
  }

  public get visible(): boolean {
    return this._visible;
  }

  public setVisible(visible: boolean): void {
    this._visible = visible;
  }

  public setInitialState(): void {
    this._id = this._initialState._id;
    this._title = this._initialState._title;
    this._description = this._initialState._description;
    this._visible = this._initialState._visible;
  }
}

export default new ListItemStore();
