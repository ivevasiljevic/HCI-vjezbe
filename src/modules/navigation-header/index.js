import React from 'react'

import styles from './style.module.css'
import Logo from '../../components/logo'
import Navigation from '../../components/navigation'
import ContactBar from '../../components/contact-bar'

const NavigationHeader = (props) => (
  <>
  <ContactBar />
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation activeTab={props.activeTab} />
  </section>
  </>
)
export default NavigationHeader