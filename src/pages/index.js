import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Result, Row, Col, Typography, Button } from 'antd'
import Tabs from '../components/Tabs/Tabs'

const { Title, Paragraph } = Typography

export default () => {
  const { flow } = useStaticQuery(graphql`
    query {
      flow: file(relativePath: { eq: "moneyflow.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Row gutter={48}>
        <Col span={24} md={12}>
          <Title>CryptoFlow (cF) - Even your mom start earn with crypto</Title>
          <Paragraph>
            Trusted decentralizd place where you can start invest your
            crypto-assets in 1-click in different profit strategies
            (cryptoFlows), which are uploaded by trusted developers
          </Paragraph>
          <Button type="primary">Start Investing</Button>
        </Col>
        <Col span={24} md={12}>
          <Img fluid={flow.sharp.fluid} />
        </Col>
      </Row>
      <Tabs />
    </Fragment>
  )
}
