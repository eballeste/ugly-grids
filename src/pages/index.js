import React from 'react'
import { navigate } from 'gatsby'

import Layout from 'components/layout'

import styles from 'styles/pages/index.module.scss'

const IndexPage = () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.main__titlebox}>
        <div className={styles.main__title}><h1>CSS Grid Experiments</h1></div>
      </div>
      <div className={styles.main__listbox}>
        <div className={styles.main__link} onClick={() => navigate('/exp-1')}>1</div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
