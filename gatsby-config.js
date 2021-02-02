
module.exports = {
 siteMetadata: {
   title: 'Chantz Johnson',
   author: 'Chantz Johnson',
   description: `I'm a web developer based in Tampa, FL specializing in 
   building 🤠 exceptional websites, applications,
   and everything in between.`
 },
  plugins: [
    
    {  
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: `gatsby-source-filesystem`, //Pull content from external source
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    

  ],
}
