import React from 'react'

import styles from './style.module.css'
import Logo from '../logo'
import Navigation from '../navigation'

const NavigationHeader = (props) => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation activeTab={props.activeTab} />
  </section>
)
export default NavigationHeader