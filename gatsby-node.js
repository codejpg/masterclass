const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post

  const portfolioPost = path.resolve('./src/templates/portfolio-post.js')
  const personPost = path.resolve('./src/templates/person-post.js')
  const mentorPost = path.resolve('./src/templates/mentor-post.js')

  const result = await graphql(
    `
      {
        allContentfulPerson {
          nodes {
            name
            slug
          }
        }
        allContentfulMentors {
          nodes {
            name
            slug
          }
        }
        allContentfulPortfolioPost {
          nodes {
            title
            slug
          }
        }
        
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const portfolioPosts = result.data.allContentfulPortfolioPost.nodes
  const personPosts = result.data.allContentfulPerson.nodes
  const mentorPosts = result.data.allContentfulMentors.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL


  if (portfolioPosts.length > 0) {
    portfolioPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : portfolioPosts[index - 1].slug
      const nextPostSlug =
        index === portfolioPosts.length - 1 ? null : portfolioPosts[index + 1].slug

      createPage({
        path: `/artists/${post.slug}/`,
        component: portfolioPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  if (mentorPosts.length > 0) {
    mentorPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : mentorPosts[index - 1].slug
      const nextPostSlug =
        index === mentorPosts.length - 1 ? null : mentorPosts[index + 1].slug

      createPage({
        path: `/mentors/${post.slug}/`,
        component: mentorPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  if (personPosts.length > 0) {
    personPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : personPosts[index - 1].slug
      const nextPostSlug =
        index === personPosts.length - 1 ? null : personPosts[index + 1].slug

      createPage({
        path: `/participants/${post.slug}/`,
        component: personPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}
