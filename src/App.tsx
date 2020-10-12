import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Button type="primary">
        Sample Button
      </Button>
    </div>
  );
};

export default App;
