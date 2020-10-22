import React from "react"

import ContactBar from '../components/contact-bar'
import NavigationHeader from '../components/navigation-header'

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab="Home" />
  </main>
)

export default IndexPage