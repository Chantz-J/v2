const path = require('path') //Built in node module

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark'){
        // console.log(node)
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))
        // console.log('@@@@@@@@@', slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }  
}

module.exports.createPages = async ({graphql , actions}) => {
    const { createPage } =  actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(x => {
        createPage({
            path: `/blog/${x.node.fields.slug}`, //The URL
            component: blogPostTemplate,
            context: {
                slug: x.node.fields.slug
            }
        })
    })

}