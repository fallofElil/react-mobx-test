import React, { FC, Fragment } from 'react';
import { List, Checkbox } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

import { useStores } from '../../../hooks/use-store';
import styles from './list-item.module.scss';

const ListItem: FC = observer(() => {
  const { listItemStore } = useStores();
  const { Item } = List;

  const onCheckboxChange = (e: any): void => {
    const eTargetChecked = (e.target as HTMLInputElement).checked;
    console.log('CHECKBOX STATE:', eTargetChecked);
  };

  return (
    <Item className={styles.item}>
      <Item.Meta
        avatar={<Checkbox onChange={onCheckboxChange} />}
        title={listItemStore.title}
        description={
          <Fragment>
            <p>{listItemStore.description}</p>
            <div className={styles.iconWrapper}>
              {listItemStore.visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </Fragment>
        }
        className={styles.meta}
      />
    </Item>
  );
});

// ListItem.defaultProps = {
//   title: 'Нет названия',
//   description: '',
//   visible: true,
// };

export default ListItem;
