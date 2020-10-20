import { createContext } from 'react';
import listItemStore from '../store/list-item';

export const storesContext = createContext({
  listItemStore,
});
