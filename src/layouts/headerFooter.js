import React from 'react'
import NavigationHeader from '../modules/navigation-header'
import Footer from '../modules/footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavigationHeader activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout