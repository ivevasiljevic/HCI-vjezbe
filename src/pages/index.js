import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/title-page'
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage/>
  </HeaderFooterLayout>
)
 
export default IndexPage