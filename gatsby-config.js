module.exports = {
 siteMetadata: {
   title: 'Chantz',
   author: 'Chantz Johnson',
   description: `I'm Chantz, and I make things for the web.`,
   siteURL: 'www.chantz.io',
   end: " I specialize in building exceptional websites, applications, and everything in between.",
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
      name: 'Contact',
      link: '/contact'
    },
   ],
   

 },
  plugins: [
    
    {  
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL /*|| "http://localhost:1337"*/,
        collectionTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },

    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: `gatsby-source-filesystem`, //Pull content/markdown from files
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    
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

      },
    },
    'gatsby-plugin-react-helmet'


  ],
}
