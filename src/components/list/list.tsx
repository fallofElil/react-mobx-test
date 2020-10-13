import React, { FC } from 'react';
import { Layout, Button, Input } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import withStyles, { WithStylesProps } from 'react-jss';

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
      <div>List Content</div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: 'white',
  },
  input: {
    width: 250,
  },
};

export default withStyles(styles)(List);
