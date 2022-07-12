import { navigate, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import tinycolor from "tinycolor2"
import { useSwipeable } from "react-swipeable"

import { IconWrapper, Overlay, ThreeThirdsGrid, Third, Wrapper } from "./styles"
import { CloseIcon } from "../../components/ui/icons"
import { useKeyPress } from "../../utils/hooks"
import Seo from "../../components/seo"
import Layout from "../../layouts"

const PhotoPage = ({ data, pageContext }) => {
  const { previousImage, nextImage, name, categoryName } = pageContext
  const image = getImage(data.file)
  const isLight = tinycolor(image.backgroundColor).isLight()

  const goToPreviousImage = () => navigate(previousImage)
  const goToCategory = () =>
    navigate(`/${categoryName}/#${encodeURIComponent(name)}`)
  const goToNextImage = () => navigate(nextImage)

  useKeyPress("ArrowRight", goToNextImage)
  useKeyPress("ArrowLeft", goToPreviousImage)
  useKeyPress("Escape", goToCategory)

  const handlers = useSwipeable({
    onSwipedRight: goToNextImage,
    onSwipedLeft: goToPreviousImage,
  })

  return (
    <Layout>
      <Seo title={name} thumbnail={image.images.fallback.src} />
      <Wrapper backgroundColor={image.backgroundColor}>
        <IconWrapper>
          <Link to={`/${categoryName}/#${name}`}>
            <CloseIcon color={isLight ? "black" : "white"} />
          </Link>
        </IconWrapper>
        <Overlay {...handlers}>
          <ThreeThirdsGrid>
            <Third left onClick={goToPreviousImage} isLight={isLight} />
            <Third middle onClick={goToCategory} isLight={isLight} />
            <Third right onClick={goToNextImage} isLight={isLight} />
          </ThreeThirdsGrid>
        </Overlay>
        <GatsbyImage
          image={image}
          alt={name}
          objectFit="contain"
          style={{ maxHeight: "100%" }}
        />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    file(id: { eq: $id }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default PhotoPage
