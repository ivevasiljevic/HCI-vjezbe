import React from 'react'

import styles from './style.module.css'
import Logo from '../logo'
import Navigation from '../navigation'

const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation />
  </section>
)
export default NavigationHeader