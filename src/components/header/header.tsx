import React, { FC } from 'react';
import { Layout, Button, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { colors } from '../../less/variables';
import './header.less';

const Header: FC = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header className={'header'}>
      <Title className={'title'}>Тестовое задание</Title>
      <Button type="text" icon={<ExportOutlined style={{ color: colors.txtWhite }} />} />
    </Header>
  );
};

export default Header;
