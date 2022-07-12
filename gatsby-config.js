const path = require("path")

module.exports = options => ({
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src/pages"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: options.imagesPath || `images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts`),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        breakpoints: [750, 1080, 1366, 1920, 2560],
        quality: 80,
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "dominantColor",
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "always",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
})
