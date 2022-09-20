import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroComponent from "../components/hero"
import SEO from "../components/seo"
import heroData from "../../data/hero.yml"
import alertData from "../../data/alerts.yml"
import Alerts from "../components/alerts"

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
      <Alerts alerts={ alertData.alertList } />
    </Layout>
  )
}

export default IndexPage