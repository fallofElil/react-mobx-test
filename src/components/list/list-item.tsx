import React, { FC, Fragment } from 'react';
import { List, Checkbox } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import withStyles, { WithStylesProps } from 'react-jss';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-store';
import { colors } from '../../less/variables';

interface IListItemProps extends WithStylesProps<typeof styles> {
  title: string;
  description: string;
  visible: boolean;
}

const ListItem: FC<WithStylesProps<typeof styles>> = observer((props) => {
  const { classes } = props;
  const { listItemStore } = useStores();
  const { Item } = List;

  const onCheckboxChange = (e: any): void => {
    const eTargetChecked = (e.target as HTMLInputElement).checked;
    console.log('CHECKBOX STATE:', eTargetChecked);
  };

  return (
    <Item className={classes.item}>
      <Item.Meta
        avatar={<Checkbox onChange={onCheckboxChange} />}
        title={listItemStore.title}
        description={
          <Fragment>
            <p>{listItemStore.description}</p>
            <div className={classes.iconWrapper}>
              {listItemStore.visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </Fragment>
        }
        className={classes.meta}
      />
    </Item>
  );
});

const styles = {
  item: {
    padding: 0,
    marginBottom: '0.8rem',
    backgroundColor: colors.background,
    '&:hover': {
      backgroundColor: colors.primaryLight,
      cursor: 'pointer',
    },
  },
  meta: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    '& .ant-list-item-meta-avatar': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      marginRight: 0,
      '& .ant-checkbox-wrapper': {},
    },
    '& .ant-list-item-meta-content': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },
    '& .ant-list-item-meta-title': {
      width: 138,
      paddingLeft: '1rem',
      marginBottom: 0,
      lineHeight: '1em',
      color: colors.txtWhite,
    },
    '& .ant-list-item-meta-description': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
      '& p': {
        width: 190,
        paddingLeft: '1rem',
        lineHeight: '1em',
        marginBottom: 0,
        color: colors.txtWhite,
      },
    },
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    marginLeft: 'auto',
    fontSize: '1.6rem',
    color: colors.txtWhite,
  },
};

// ListItem.defaultProps = {
//   title: 'Нет названия',
//   description: '',
//   visible: true,
// };

export default withStyles(styles)(ListItem);
