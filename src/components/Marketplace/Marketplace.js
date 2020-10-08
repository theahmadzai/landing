import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Card, Statistic } from 'antd'
import {
  PlusOutlined,
  EyeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'
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
    <Row gutter={24}>
      <Col md={6}>
        <Card
          cover={<Img fluid={bitcoin.sharp.fluid} />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        >
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col md={6}>
        <Card
          cover={<Img fluid={etherium.sharp.fluid} />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        >
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Marketplace
