import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import styles from 'styles/components/header.module.scss'

const Header = ({link, children}) => (
  <header className={styles.header}>
    <div className={styles.header__title} onClick={() => navigate(link)}>{children}</div>
  </header>
)

Header.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Header
