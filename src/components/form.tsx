import React, { FC } from 'react';
import { Typography, Input, Checkbox, Button } from 'antd';
import withStyles, { WithStylesProps } from 'react-jss';
import { colors } from '../less/variables';

const Form: FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  const { Title } = Typography;
  const { TextArea } = Input;

  return (
    <section className={classes.wrapper}>
      <Title level={2}>Редактирование элемента</Title>
      <form>
        <Input className={classes.field} placeholder={'Название'} />

        <TextArea rows={6} className={classes.field} placeholder={'Описание'} />

        <Checkbox className={classes.checkbox}>Видимый</Checkbox>

        <div className={classes.btnWrapper}>
          <Button className={classes.btn}>Применить</Button>
          <Button className={classes.btn}>Отменить</Button>
        </div>
      </form>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: '20px 2rem',
    '& h2.ant-typography': {
      color: colors.txtDark,
      fontSize: '18px',
      fontWeight: 'normal',
    },
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  field: {
    marginBottom: 16,
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
    '&::placeholder': {
      color: '#4e9097',
    },
  },
  checkbox: {
    marginBottom: '2rem',
    color: colors.txtDark,
  },
  btn: {
    width: 174,
    backgroundColor: colors.lightBackground,
    color: colors.txtDark,
    '&:hover': {
      backgroundColor: colors.primaryLight,
      borderColor: colors.primaryLight,
    },
  },
};

export default withStyles(styles)(Form);
