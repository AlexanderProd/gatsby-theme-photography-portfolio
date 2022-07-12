const categoriesQuery = async graphql =>
  await graphql(`
    {
      categories: allDirectory(filter: { relativeDirectory: { eq: "" } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

const imagesQuery = async (graphql, directory) =>
  await graphql(`
    {
      images: allFile(filter: { relativeDirectory: { eq: "${directory}" } }) {
        edges {
          node {
            id
            name
            absolutePath
          }
        }
      }
    }
  `)

module.exports = { categoriesQuery, imagesQuery }
