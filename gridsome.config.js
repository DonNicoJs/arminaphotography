// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "arminaphotography",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },
  templates: {
    Albums: "/album/:slug",
    Pages: "/blog/:slug"
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/albums/*.md",
        typeName: "Albums"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/pages/*.md",
        typeName: "Pages"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/social.md",
        typeName: "Social"
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
};
