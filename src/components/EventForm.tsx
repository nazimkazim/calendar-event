import { FC } from "react"
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from "../utils/rules";

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required("Обязательное поле")]}
      >
        <Input
          value={'username'}
        //onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Введите дату"
        name="date"
        rules={[rules.required("Обязательное поле")]}
      >
        <DatePicker
          //onChange={onChange}
          picker="week"
        />
      </Form.Item>
      <Form.Item
        label="Введите дату"
        name="date"
        rules={[rules.required("Обязательное поле")]}
      >
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
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
