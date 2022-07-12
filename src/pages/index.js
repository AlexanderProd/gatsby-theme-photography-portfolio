import React, { useContext } from "react"
import { graphql } from "gatsby"

import { Main, SidebarButtonWrapper } from "../utils/styles"
import { CloseIcon, HamburgerIcon } from "../components/ui/icons"
import LayoutContext from "../context/LayoutContext"
import Sidebar from "../components/Sidebar"
import Grid from "../components/Grid"
import Seo from "../components/seo"
import Layout from "../layouts"

const IndexPage = ({ data }) => {
  const images = data.images.edges
  const categories = data.categories.edges
  const { sidebarVisible, toggleSidebar } = useContext(LayoutContext)

  return (
    <Layout>
      <Seo title="Home" />
      <SidebarButtonWrapper>
        {sidebarVisible ? (
          <CloseIcon onClick={toggleSidebar} />
        ) : (
          <HamburgerIcon onClick={toggleSidebar} />
        )}
      </SidebarButtonWrapper>
      <Sidebar categories={categories} />

      <Main sidebarVisible={sidebarVisible}>
        <Grid images={images} prefix="Main" />
      </Main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "Main" } }) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    categories: allDirectory(filter: { relativeDirectory: { eq: "" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
