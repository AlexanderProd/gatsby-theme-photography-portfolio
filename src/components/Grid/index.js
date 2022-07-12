import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import slugify from "slugify"

const Grid = ({ images, style, prefix }) => (
  <ResponsiveMasonry style={style}>
    <Masonry gutter="1rem">
      {images.map(({ node }) => (
        <Link
          id={node.name}
          key={node.name}
          to={`${prefix ? prefix + "/" : ""}${slugify(node.name)}`}
        >
          <GatsbyImage
            alt={node.name}
            image={getImage(node)}
            style={{ cursor: "pointer" }}
          />
        </Link>
      ))}
    </Masonry>
  </ResponsiveMasonry>
)

export default Grid
