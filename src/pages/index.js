import React from 'react'
import { navigate } from 'gatsby'

import Layout from 'components/layout'
import Header from 'components/header'

import styles from 'styles/pages/index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <Header link='/'><h1>CSS Grid Experiments</h1></Header>
      <nav className={styles.links}>
        <div className={styles.links__link} onClick={() => navigate('/exp-1')}>1</div>
        <div className={styles.links__link} onClick={() => navigate('/exp-2')}>2</div>
      </nav>
    </div>
  </Layout>
)

export default IndexPage
