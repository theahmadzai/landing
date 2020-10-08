import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Card } from 'antd'
import { PlusOutlined, EyeOutlined } from '@ant-design/icons'
import styles from './Marketplace.module.css'

const Marketplace = () => {
  const { bitcoin, etherium } = useStaticQuery(graphql`
    query {
      bitcoin: file(relativePath: { eq: "bitcoin.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      etherium: file(relativePath: { eq: "etherium.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Row gutter={24} className={styles.marketplace}>
      <Col md={6}>
        <Card
          cover={<Img fluid={bitcoin.sharp.fluid} />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        />
      </Col>
      <Col md={6}>
        <Card
          cover={<Img fluid={etherium.sharp.fluid} />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        />
      </Col>
    </Row>
  )
}

export default Marketplace
