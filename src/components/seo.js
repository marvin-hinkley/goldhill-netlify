import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ seo = {} }) => {
  const getMetaTags = () => {
    const tags = []

    return tags
  }

  return (
    <Helmet
      title={seo.title}
      link={[
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
      ]}
      script={[]}
      meta={getMetaTags()}
    >
      <script src="https://kit.fontawesome.com/d4b38b5d52.js" crossorigin="anonymous"></script>
      <script>UPLOADCARE_PUBLIC_KEY = '9a4db2023ea4408d1b48';</script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}