import React, { FC } from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import { colors } from './styles/variables';

import Header from './components/header';

const App: FC = () => {
  const { Content } = Layout;
  const classes = useStyles();

  return (
    <div className="App">
      <Layout className={classes.layout}>
        <Header />
        <Content className={classes.content}></Content>
      </Layout>
    </div>
  );
};

const useStyles = createUseStyles({
  layout: {
    backgroundColor: colors.background,
  },
  content: {
    display: 'flex',
    width: 900,
    height: 495,
    margin: '0 auto',
    backgroundColor: colors.txtWhite,
  },
});

export default App;
