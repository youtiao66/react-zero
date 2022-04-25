import React from 'react'
import styles from './index.module.less'

export default ({ children }) => (
  <>
    <p className={styles.title}>{children}</p>
  </>
)