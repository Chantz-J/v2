const path = require('path') //Built in node module

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    const projectTemplate = path.resolve(`./src/templates/project.js`)

    const result = await graphql(`
        query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
             allContentfulBlogPost {
                   edges {
                       node {
                           slug     
                           }
                        }
                    }
        }
      `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: projectTemplate,
          context: {
          slug: node.frontmatter.slug,
          },
        })
    })

    result.data.allContentfulBlogPost.edges.forEach(x => {
        createPage({
         path: `/blog/${x.node.slug}`, //The URL
         component: blogPostTemplate,
         context: {
         slug: x.node.slug
        }
     })
 })


}   

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
      // fallback: {
      //   fs: false,
      // },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}
