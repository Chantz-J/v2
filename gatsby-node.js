const path = require('path') //Built in node module

// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const { createPage } = actions
//     const projectTemplate = require.resolve(`./src/templates/project.js`)
//     const result = await graphql(`
//       {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               frontmatter {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)
//     // Handle errors
//     if (result.errors) {
//       reporter.panicOnBuild(`Error while running GraphQL query.`)
//       return
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.slug,
//         component: projectTemplate,
//         context: {
//           slug: node.frontmatter.slug,
//         },
//       })
//     })
// }

// module.exports.createPages = async ({graphql , actions}) => {
//     const { createPage } =  actions
//     const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
//     const result = await graphql(`
//         query {
//             allContentfulBlogPost {
//                 edges {
//                     node {
//                         slug
//                     }
//                 }
//             }
//         }
//     `)
//     result.data.allContentfulBlogPost.edges.forEach(x => {
//         createPage({
//             path: `/blog/${x.node.slug}`, //The URL
//             component: blogPostTemplate,
//             context: {
//                 slug: x.node.slug
//             }
//         })
//     })

//   }

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    const projectTemplate = require.resolve(`./src/templates/project.js`)

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
