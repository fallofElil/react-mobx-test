import { useContext } from 'react';
import { storesContext } from '../contexts';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStores = () => useContext(storesContext);
