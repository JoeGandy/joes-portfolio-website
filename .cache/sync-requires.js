const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/joe/misc/joes-portfolio-website/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/joe/misc/joes-portfolio-website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/joe/misc/joes-portfolio-website/src/pages/index.js")))
}

