import React, { FC } from 'react';
import { Layout, Button, Input, List as AntList } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import withStyles, { WithStylesProps } from 'react-jss';
import ListItem from './list-item';

const List: FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  const { Header } = Layout;

  return (
    <section className={classes.container}>
      <Header className={classes.header}>
        <Button type="primary" icon={<PlusOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
        <Input placeholder="Название название задачи" className={classes.input} />
        <Button type="primary" icon={<EyeOutlined />} />
        <Button type="primary" icon={<EyeInvisibleOutlined />} />
      </Header>
      <AntList split={false}>
        <ListItem title={'Заголовок'} description={'Описание'} visible={true} />
        <ListItem title={'Заголовок'} description={'Описание'} visible={true} />
        <ListItem title={'Заголовок'} description={'Описание'} visible={true} />
      </AntList>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '0 2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'white',
  },
  input: {
    width: 250,
  },
};

export default withStyles(styles)(List);
