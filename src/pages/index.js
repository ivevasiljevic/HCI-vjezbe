import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import PageContent from "../modules/content-page"
import TitlePage from '../modules/title-page'
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage/>
    <PageContent/>
  </HeaderFooterLayout>
)
 
export default IndexPage