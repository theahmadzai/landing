import React from 'react'
import { Row, Col } from 'antd'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Row>
      <Col span={24} md={8}>
        @ World Blockchain Hackathon 2020
      </Col>
    </Row>
  </footer>
)

export default Footer
