import React from 'react'
import { Link } from 'gatsby'
import styles from './NavLink.module.css'

const NavLink = ({ children, ...props }) => {
  return (
    <div className={styles.link} {...props}>
      {children}
    </div>
  )
}

export default NavLink
