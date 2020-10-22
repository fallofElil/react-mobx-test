import React, { FC } from 'react';
import { Layout, Button, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import withStyles, { WithStylesProps } from 'react-jss';

import { colors } from '../less/variables';

const Header: FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header className={classes.header}>
      <Title>Тестовое задание</Title>
      <Button type="text" icon={<ExportOutlined style={{ color: colors.txtWhite }} />} />
    </Header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '& h1.ant-typography': {
      marginBottom: 0,
      color: colors.txtWhite,
      fontWeight: 400,
      fontSize: '2rem',
    },
  },
};

export default withStyles(styles)(Header);
