import React, { FC, Fragment } from 'react';
import { List, Checkbox } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import styles from './list-item.module.scss';
import './antd-custom.scss';

const ListItem: FC = () => {
  const { Item } = List;

  const tempState = true;

  const onCheckboxChange = (e: any): void => {
    const eTargetChecked = (e.target as HTMLInputElement).checked;
    console.log('CHECKBOX STATE:', eTargetChecked);
  };

  return (
    <Item className={styles.item}>
      <Item.Meta
        avatar={<Checkbox onChange={onCheckboxChange} />}
        title={''}
        description={
          <Fragment>
            <p>{''}</p>
            <div className={styles.icon_wrapper}>{tempState ? <EyeOutlined /> : <EyeInvisibleOutlined />}</div>
          </Fragment>
        }
        className={styles.meta}
      />
    </Item>
  );
};

// ListItem.defaultProps = {
//   title: 'Нет названия',
//   description: '',
//   visible: true,
// };

export default ListItem;
