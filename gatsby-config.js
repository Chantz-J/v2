
module.exports = {
 siteMetadata: {
   title: 'Chantz Johnson',
   author: 'Chantz Johnson',
   description: `I'm Chantz, a web developer specializing in 
   building exceptional websites, applications,
   and everything in between.`,
   siteURL: '',
   email: 'johnson.chantz@gmail.com',
   github: 'https://github.com/Chantz-J',
   linkedIn: 'https://www.linkedin.com/in/chantz-j-603034206/',
   codePen: 'https://codepen.io/Moon_River',

   menuLinks: [
     {
       name: 'Home',
       link: '/'
     },
     {
       name: 'About',
       link: '/about'
     },
     {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
  
   ],
   lineSpans: [
     {
       text: "Hi there, I'm Chantz",
       id: 1
     },
     {
      text: " and I'm a Web Developer",
      id: 2
    }
   ]
   



 },
  plugins: [
    
    {  
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: `gatsby-source-filesystem`, //Pull content/markdown from files
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: { 
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
        ],
        // commonmark: true,
        // footnotes: true,
        // pedantic: true,
        // gfm: true,
        // name: `src`,
        // path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-react-helmet'


  ],
}
