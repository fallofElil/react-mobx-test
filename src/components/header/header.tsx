import React, { FC } from 'react';
import { Layout, Button, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { colors } from '../../styles/variables';
import styles from './header.module.scss';

const Header: FC = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header className={styles.header}>
      <Title className={styles.title}>Тестовое задание</Title>
      <Button type="text" icon={<ExportOutlined style={{ color: colors.txtWhite }} />} />
    </Header>
  );
};

export default Header;
