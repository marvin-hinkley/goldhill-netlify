import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroComponent from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroComponent hero={{Heading: '', SubHeading: '', Image: { url: '' }}} />
    </Layout>
  )
}

export default IndexPage
