import React from 'react'
import { Row, Col } from 'antd'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Row>
      <Col span={24} md={8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis
        asperiores ea est labore voluptatum rerum molestias, eum architecto
        omnis ad nostrum nesciunt, nulla, aut quibusdam suscipit provident odit
        cum!
      </Col>
      <Col span={24} md={8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis
        asperiores ea est labore voluptatum rerum molestias, eum architecto
        omnis ad nostrum nesciunt, nulla, aut quibusdam suscipit provident odit
        cum!
      </Col>
      <Col span={24} md={8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis
        asperiores ea est labore voluptatum rerum molestias, eum architecto
        omnis ad nostrum nesciunt, nulla, aut quibusdam suscipit provident odit
        cum!
      </Col>
    </Row>
  </footer>
)

export default Footer
