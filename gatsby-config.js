const path = require("path");

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 768px)",
  md: "(max-width: 1024px)",
  l: "(max-width: 1536px)",
  portrait: "(orientation: portrait)",
};

module.exports = {
  siteMetadata: {
    title: "Логистика и дистрибуция",
    description: "",
    author: "alexander.alyavdin",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-119418003-5",
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Логистика и дистрибуция",
        short_name: "Лоджистик-Юг",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/style")],
        },
        additionalData: `@import "core.scss";`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Montserrat:400,700",
            "Kaushan+Script",
            "Droid+Serif:400,700,400italic,700italic",
            "Roboto+Slab:400,100,300,700",
          ],
        },
      },
    },
  ],
};
