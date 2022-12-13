require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Working With Waste",
    description: "IKF Masterclass",
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
          families: ['Minion']
        },
      
      },
    },
  ],
  
};
