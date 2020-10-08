import React from 'react'
import Img from 'gatsby-image'
import styles from './WalletButton.module.css'

const WalletButton = ({ icon, onClick, title, ...props }) => (
  <div onClick={onClick} {...props} className={styles.button}>
    {title}
    <Img fixed={icon.sharp.fixed} alt={title} />
  </div>
)

export default WalletButton
