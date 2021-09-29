import { Button, Modal, Row } from 'antd'
import React, { FC, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'

const Event:FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <div>
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal 
      title="Добавить событие"
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={null}
      >
        <EventForm/>
      </Modal>
      <EventCalendar events={[]}/>
    </div>
  )
}

export default Event
