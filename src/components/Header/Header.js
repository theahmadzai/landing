import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Drawer, Modal, Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import NavLink from '../NavLink/NavLink'
import styles from './Header.module.css'

const ToggleIcon = ({ visible, ...props }) =>
  !visible ? <MenuOutlined {...props} /> : <CloseOutlined {...props} />

const Header = () => {
  const { title } = useSiteMetadata()
  const [visible, setVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const toggleVisible = () => setVisible(visible => !visible)

  const showModal = () => {
    setModalVisible(true)
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  const handleOk = () => {}

  return (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.logo}>{title}</span>
      </Link>

      <nav className={styles.navDesktop}>
        <NavLink href="/">Upload cF</NavLink>
        <NavLink href="/connect">Connect to a Wallet</NavLink>
      </nav>

      <ToggleIcon
        visible={visible}
        className={styles.toggleNav}
        onClick={toggleVisible}
      />

      <Drawer
        title={title}
        visible={visible}
        closeable={false}
        onClose={toggleVisible}
      >
        <nav className={styles.navMobile}>
          <NavLink href="/">Upload cF</NavLink>
          <NavLink href="/connect">Deposit</NavLink>
        </nav>
      </Drawer>

      <Modal
        title={`Connect your wallet to ${title}`}
        visible={modalVisible}
        closeable={true}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Connect
          </Button>,
        ]}
      >
        <p>Wallet 1</p>
        <p>Wallet 2</p>
        <p>Wallet 3</p>
      </Modal>
    </header>
  )
}

export default Header
