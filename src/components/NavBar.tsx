import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes/index';
import { useActions } from '../hooks/useActions';


const NavBar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()
  return (
    <Layout.Header>
      <Row justify="end">
        {
          isAuth
            ?
            <>
              <div style={{ color: 'white' }}>{user.username}</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  onClick={() => logout()}
                  key={1}
                >Выйти
                </Menu.Item>
              </Menu>
            </>
            :
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => router.push(RouteNames.LOGIN)}
                key={1}
              >Логин
              </Menu.Item>
            </Menu>
        }
      </Row>
    </Layout.Header>
  )
}

export default NavBar
