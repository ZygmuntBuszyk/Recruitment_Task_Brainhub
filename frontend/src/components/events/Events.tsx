import styles from './Events.module.scss';
import { useEffect } from 'react';
import { Button, Input, Form, DatePicker } from 'antd';
import moment from 'moment';
import { createEvent } from '../../services/events/createEvents';
import { IEventRequest } from '../../services/events/api/apiModels/events';

function Events() {
  const [form] = Form.useForm();

  useEffect(() => {}, []);

  const onSubmit = async (values: IEventRequest) => {
    const response = await createEvent(values);
    form.resetFields();
  };

  const disabledDate = (current: moment.Moment): boolean => {
    return current && current < moment().startOf('day');
  };

  return (
    <Form
      form={form}
      layout='vertical'
      requiredMark={false}
      className={styles['form']}
      onFinish={(values: IEventRequest) => onSubmit(values)}
    >
      <Form.Item
        className={styles['form__item']}
        label={'First Name'}
        name={'firstName'}
        rules={[
          {
            required: true,
            message: 'First Name is required.',
          },
        ]}
        hasFeedback
      >
        <Input
          className={styles['form__item-input']}
          placeholder={'Enter your first name'}
        />
      </Form.Item>

      <Form.Item
        className={styles['form__item']}
        label={'Last Name'}
        name={'lastName'}
        rules={[
          {
            required: true,
            message: 'Last Name is required.',
          },
        ]}
        hasFeedback
      >
        <Input
          className={styles['form__item-input']}
          placeholder={'Enter your last name'}
        />
      </Form.Item>

      <Form.Item
        className={styles['form__item']}
        name={'email'}
        label={'Email'}
        rules={[
          {
            required: true,
            message: 'Email is required.',
          },
          {
            type: 'email',
            message: 'Email should be valid.',
          },
        ]}
        hasFeedback
      >
        <Input placeholder={'Enter your email'} />
      </Form.Item>

      <Form.Item
        className={styles['form__item']}
        name={'eventDate'}
        label={'Date'}
        rules={[
          {
            required: true,
            message: 'Date selection is required.',
          },
        ]}
        hasFeedback
      >
        <DatePicker
          disabledDate={disabledDate}
          className={styles['form__item-antPicker']}
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add Event
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Events;
