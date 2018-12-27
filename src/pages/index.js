import React from 'react'
import { navigate } from 'gatsby'

import Layout from 'components/layout'

import styles from 'styles/pages/index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__title}><h1>CSS Grid Experiments</h1></div>
      </header>
      <nav className={styles.links}>
        <div className={styles.links__link} onClick={() => navigate('/exp-1')}>1</div>
        <div className={styles.links__link} onClick={() => navigate('/exp-2')}>2</div>
      </nav>
    </div>
  </Layout>
)

export default IndexPage
