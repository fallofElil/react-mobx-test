import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';

import Header from './header/header';
import List from './list/list';
import Form from './form/form';
import styles from './App.module.scss';

const App: FC = () => {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout className={styles.layout}>
        <Header />
        <Content className={styles.content}>
          <Row justify="space-between" className={styles.row}>
            <Col span={12} className={styles.column}>
              <List />
            </Col>
            <Col span={12} className={styles.column}>
              <Form />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
