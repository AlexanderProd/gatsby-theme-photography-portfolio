<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://github.com/AlexanderProd/gatsby-theme-photography-portfolio">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/AlexanderProd/gatsby-theme-photography-portfolio/master/src/images/grid-cursor.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme Photography Portfolio
</h1>

This is a gatsby theme with big image grid and a minimalistic interface, the whole UI stays out of the way unless opened by hamburger menu. Perfect for keeping the focus on the images.

Every image has its own fullscreen page and all images of a category can be flipped through quickly. Thanks to `gatsby-plugin-sharp` and `gatsby-plugin-image` the load times are are also very short.

If you want to categorize your images just put them in different folders.

Check out a [live demo](https://photography.alexanderhoerl.de).

## 💎 Features

- Swipe gesture support
- Short loading times
- Social media share images
- Quick to navigate
- Minimalistic unobtrusive UI
- Background based on main color

## 🚀 Installation

### For a new site

1.  Create a Gatsby site.

    To quickly create a new Gatsby page with the `gatsb-theme-photography-portfolio` you can use my starter.

    ```shell
    npx gatsby new gatsby-photography-portfolio https://github.com/AlexanderProd/gatsby-starter-photography-portfolio
    ```

### For an existing site

If you already have a site you’d like to add the blog theme to, you can manually configure it.

1.  Install the photography portfolio theme

    ```shell
    npm install gatsby-theme-photography-portfolio
    ```

2.  Add the configuration to your gatsby-config.js file

    ```JS
    // gatsby-config.js
    module.exports = {
      plugins: [
        {
          resolve: `gatsby-theme-photography-portfolio`,
          options: {
            // basePath defaults to `/`
            basePath: `/portfolio`,
          },
        },
      ],
    }
    ```

3.  Add images

    Add images to your site by adding them to `images` directory in the root of your site. You can create categories by putting the images in subfolders.

## Usage

### Theme options

| Key          | Default value | Description                                |
| ------------ | ------------- | ------------------------------------------ |
| `imagesPath` | `images`      | The directory where the images are stored. |

## Deploy

Checkout my other open-source project [JAMStackBox](https://github.com/AlexanderProd/jam-stack-box) to continuously deploy your Gatsby site on your own server.
