import { Button, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const {fetchGuests} = useActions()
  const {guests} = useTypedSelector(state => state.event)

  useEffect(() => {
    fetchGuests()
  }, [fetchGuests])




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
        <EventForm 
          guests={guests}
        />
      </Modal>
      <EventCalendar events={[]} />
    </div>
  )
}

export default Event
