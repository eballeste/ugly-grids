import React from 'react'
import PropTypes from 'prop-types'

import styles from 'styles/components/description.module.scss'

const Description = ({children}) => (
  <section className={styles.description}>
    <div className={styles.description__text}>{children}</div>
  </section>
)

Description.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Description
