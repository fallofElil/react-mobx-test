import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Button, Input, List as AntList } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import ListItem from './list-item/list-item';
import styles from './list.module.scss';
import { RootState } from '../../store/store';

const List: FC = () => {
  const { items } = useSelector((state: RootState) => state.list);
  const { Header } = Layout;

  return (
    <section className={styles.container}>
      <Header className={styles.header}>
        <Button type="primary" icon={<PlusOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
        <Input
          placeholder="Название название задачи"
          onChange={(e: any) => console.log(e)}
          className={styles.input}
        />
        <Button type="primary" icon={<EyeOutlined />} />
        <Button type="primary" icon={<EyeInvisibleOutlined />} />
      </Header>
      <AntList split={false}>
        {/*{items.map((item: ListItem) => (*/}
        {/*))}*/}
      </AntList>
    </section>
  );
};

export default List;
