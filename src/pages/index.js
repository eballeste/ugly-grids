import React from 'react'

import Layout from 'components/layout'

import styles from 'styles/pages/index.module.scss'

const IndexPage = () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.title}><h1>CSS Grid Experiments</h1></div>
    </main>
  </Layout>
)

export default IndexPage
