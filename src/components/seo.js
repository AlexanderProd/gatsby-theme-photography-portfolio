import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../utils/hooks"

function Seo({ description, lang, meta, keywords, title, thumbnail }) {
  const siteMetadata = useSiteMetadata()
  const metaDescription = description || siteMetadata.description
  const thumbnailImage = thumbnail || siteMetadata.siteImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: thumbnailImage,
        },
        {
          name: `og:image:alt`,
          content: siteMetadata.siteImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: thumbnailImage,
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ].concat(meta)}
    ></Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
