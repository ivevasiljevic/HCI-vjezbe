import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const First = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "first_image.jpg" }) {
       childImageSharp {
         fixed(width: 570) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default First