import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactSeparator from '../modules/contact-separator'
import ContactForm from '../modules/contact-form' 

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage