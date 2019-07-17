const siteUrl = "https://www.joegandy.co.uk/"

module.exports = {
	siteMetadata: {
		siteUrl
	},
    plugins: [
		{
		  resolve: `gatsby-source-prismic`,
		  options: {
			repositoryName: `gandymainwebsite`,
			accessToken: `MC5YUzlqTkJBQUFDVUF2ZVFz.77-9Myvvv73vv71OF--_ve-_ve-_vTcIf1vvv73vv73vv71aEe-_vWkn77-977-9TAYl77-9TRg8aw`
		  },
		}, 
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-49984946-7"
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {},
				allPageHeaders: [],
				mergeSecurityHeaders: true,
				mergeLinkHeaders: true,
				mergeCachingHeaders: true,
				transformHeaders: (headers, path) => headers,
				generateMatchPathRewrites: true,
			},
		},
		{
		resolve: `gatsby-plugin-netlify-headers`,
			options: {
				headers: {},
				allPageHeaders: [],
				mergeSecurityHeaders: true,
				mergeLinkHeaders: true,
				mergeCachingHeaders: true, 
				transformHeaders: (headers, path) => headers,
				generateMatchPathRewrites: true,
			},
		},
	    {
			resolve: `gatsby-plugin-manifest`,
				options: {
					name: "Joes-Porfolio-Website",
					short_name: "Joes-Webste",
					start_url: "/",
					background_color: "#e4e7eb",
					theme_color: "#2200ff",
					display: "standalone",
					icon: "static/favicon.png"
			},
	    },
	    {
	    resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./static/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
	    },
  		{
  			resolve: `gatsby-plugin-sharp`,
  			options: {
  				useMozJpeg: true,
  				stripMetadata: true,
  			},
  		},
      `gatsby-plugin-sass`,
      `gatsby-plugin-offline`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-netlify`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-netlify-headers`,
      `gatsby-plugin-robots-txt`
    ],
}
