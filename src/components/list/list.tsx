import React, { FC } from 'react';
import { Layout, Button, Input, List as AntList } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import withStyles, { WithStylesProps } from 'react-jss';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-store';
import ListItem from './list-item';
import { colors } from '../../less/variables';

const List: FC<WithStylesProps<typeof styles>> = observer(({ classes }) => {
  const { listItemStore } = useStores();
  const { Header } = Layout;

  return (
    <section className={classes.container}>
      <Header className={classes.header}>
        <Button type="primary" icon={<PlusOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
        <Input
          placeholder="Название название задачи"
          onChange={(e: any) => listItemStore.setTitle(e.target.value)}
          className={classes.input}
        />
        <Button type="primary" icon={<EyeOutlined />} />
        <Button type="primary" icon={<EyeInvisibleOutlined />} />
      </Header>
      <AntList split={false}>
        <ListItem />
      </AntList>
    </section>
  );
});

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
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
    '&::placeholder': {
      color: '#4e9097',
    },
  },
};

export default withStyles(styles)(List);
