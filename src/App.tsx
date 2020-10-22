import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';
import withStyles, { WithStylesProps } from 'react-jss';

import { colors } from './less/variables';
import Header from './components/header/header';
import List from './components/list/list';
import Form from './components/form';

const App: FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout className={classes.layout}>
        <Header />
        <Content className={classes.content}>
          <Row justify="space-between" className={classes.row}>
            <Col span={12} className={classes.column}>
              <List />
            </Col>
            <Col span={12} className={classes.column}>
              <Form />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

const styles = {
  layout: {
    backgroundColor: colors.background,
  },
  content: {
    width: 900,
    height: 495,
    margin: '0 auto',
    backgroundColor: colors.txtWhite,
  },
  row: {
    alignItems: 'stretch',
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  column: {
    '&:first-child': {
      borderRight: `2px solid ${colors.primary}`,
    },
    '&:last-child': {
      borderLeft: `2px solid ${colors.primary}`,
    },
  },
};

export default withStyles(styles)(App);
