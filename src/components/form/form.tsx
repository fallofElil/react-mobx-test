import React, { FC } from 'react';
import { Typography, Input, Checkbox, Button } from 'antd';

import styles from './form.module.scss';

const Form: FC = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  return (
    <section className={styles.wrapper}>
      <Title level={2} className={styles.title}>
        Редактирование элемента
      </Title>
      <form>
        <Input className={styles.field} placeholder={'Название'} />

        <TextArea rows={6} className={styles.field} placeholder={'Описание'} />

        <Checkbox className={styles.checkbox}>Видимый</Checkbox>

        <div className={styles.btnWrapper}>
          <Button className={styles.btn}>Применить</Button>
          <Button className={styles.btn}>Отменить</Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
