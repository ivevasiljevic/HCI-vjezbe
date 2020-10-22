import React from "react"

import ContactBar from '../components/contact-bar'
import NavigationHeader from '../components/navigation-header'
import Footer from '../components/footer'

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab="Home" />
    <Footer />
  </main>
)

export default IndexPage