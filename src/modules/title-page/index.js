import React from 'react'
 
import TitleImage from '../../components/title-image'
import InquiryBlock from '../../components/inquiry-block'
import styles from './style.module.css'
 
const TitlePage = () => (
    <section className={styles.titlePage}>
        <TitleImage />
        <InquiryBlock />
    </section>
)
 
export default TitlePage