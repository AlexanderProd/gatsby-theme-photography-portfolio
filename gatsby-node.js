const fs = require("fs")
const path = require("path")
const slugify = require("slugify")
const exif = require("exif")
const { promisify } = require("util")

const exifImage = promisify(exif)

const { imagesQuery, categoriesQuery } = require("./queries")

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `images`
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ graphql, actions }, options) => {
  const basePath = options.basePath || "/"
  const { createPage } = actions

  const {
    data: { categories },
  } = await categoriesQuery(graphql)

  categories.edges.forEach(async ({ node: { name, id } }) => {
    const categoryName = name
    const categorySlug = slugify(categoryName)

    await createPage({
      path: path.join(basePath, categorySlug),
      component: require.resolve("./src/templates/CategoryPage/index.js"),
      context: {
        id,
        categoryName,
      },
    })

    const {
      data: { images },
    } = await imagesQuery(graphql, categoryName)

    images.edges.forEach(async (image, i) => {
      const { id, name, absolutePath } = image.node

      let exifData
      try {
        exifData = await exifImage(absolutePath)
      } catch {}

      const previousImage = `/${categorySlug}/${slugify(
        images.edges[i === 0 ? images.edges.length - 1 : i - 1].node.name
      )}`

      const nextImage = `/${categorySlug}/${slugify(
        images.edges[i === images.edges.length - 1 ? 0 : i + 1].node.name
      )}`

      await createPage({
        path: path.join(basePath, categorySlug, slugify(name)),
        component: require.resolve("./src/templates/PhotoPage/index.js"),
        context: {
          id,
          name,
          categoryName: categorySlug,
          previousImage,
          nextImage,
          exifData,
        },
      })
    })
  })
}
