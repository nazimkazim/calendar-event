import { FC, useState } from "react"
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from '../models/IEvent';
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date:formatDate(date.toDate())})
    }


  }

  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required("Обязательное поле")]}
      >
        <Input
          onChange={e => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        //onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Введите дату"
        name="date"
        rules={[rules.required("Обязательное поле")]}
      >
        <DatePicker
          onChange={date => selectDate(date)}
        />
      </Form.Item>

      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required("Обязательное поле")]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map(guest =>
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
