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

Every image has its own fullscreen page and all images of a category can be flipped through quickly. Thanks to `gatsby-plugin-sharp` and `gatsby-plugin-image` it also loads very quickly and viewing the images in a "dia show" kind of way is fun.

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

If you’re creating a new site and want to use this theme, you can use the default gatsby starter and add install the photography portfolio theme.

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
