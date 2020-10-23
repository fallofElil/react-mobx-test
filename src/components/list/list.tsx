import React, { FC } from 'react';
import { Layout, Button, Input, List as AntList } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

import { useStores } from '../../hooks/use-store';
import ListItem from './list-item/list-item';
import styles from './list.module.scss';

const List: FC = observer(() => {
  const { listItemStore } = useStores();
  const { Header } = Layout;

  return (
    <section className={styles.container}>
      <Header className={styles.header}>
        <Button type="primary" icon={<PlusOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
        <Input
          placeholder="Название название задачи"
          onChange={(e: any) => listItemStore.setTitle(e.target.value)}
          className={styles.input}
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

export default List;
