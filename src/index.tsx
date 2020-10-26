import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.less';
import './styles/index.scss';
import App from './components/App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
