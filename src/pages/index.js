import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroComponent from "../components/hero"
import SEO from "../components/seo"
import heroData from "../../data/hero.yml"

const IndexPage = () => {
  const { 
    heading,
    subheading,
    image
  } = heroData

  return (
    <Layout>
      <SEO title="Home" />
      <HeroComponent hero={{
        Heading: heading,
        SubHeading: subheading,
        Image: image
      }} />
    </Layout>
  )
}

export default IndexPage
