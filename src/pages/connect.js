import React from 'react'
import { Row, Col } from 'antd'
import useIcons from '../hooks/use-icons'
import WalletButton from '../components/WalletButton/WalletButton'
import metamaskHandler from '../wallet-handlers/metamask'

export default () => {
  const {
    metamask,
    walletconnect,
    coinbasewallet,
    fortmatic,
    portis,
  } = useIcons()

  const wallets = [
    {
      title: `${
        typeof window !== 'undefined' && window.web3 === undefined
          ? 'Install '
          : ''
      }Metamask`,
      icon: metamask,
      handler: metamaskHandler,
    },
    {
      title: 'WalletConnect',
      icon: walletconnect,
      handler: metamaskHandler,
    },
    {
      title: 'Coinbase Wallet',
      icon: coinbasewallet,
      handler: metamaskHandler,
    },
    {
      title: 'Fortmatic',
      icon: fortmatic,
      handler: metamaskHandler,
    },
    {
      title: 'Portis',
      icon: portis,
      handler: metamaskHandler,
    },
  ]

  return (
    <Row gutter={24}>
      {wallets.map((wallet, i) => (
        <Col span={24} sm={12} md={8}>
          <WalletButton
            key={i}
            title={wallet.title}
            icon={wallet.icon}
            onClick={wallet.handler}
          />
        </Col>
      ))}
    </Row>
  )
}
