(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(144),l=a(141),s=a(143),m=a.n(s),p={apiEndpoint:"https://gandymainwebsite.cdn.prismic.io/api/v2",linkResolver:function(e){return"/"}};a.d(t,"default",function(){return d}),a(140);var u={FaFacebook:o.a,FaGithub:o.c,FaLinkedin:o.d,FaSteam:o.e,FaFileAlt:o.b},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={homePageData:null},a.buildContext().then(function(e){e.api.query(m.a.Predicates.at("document.type","homepage"),{orderings:"[my.homepage.date desc]"}).then(function(e){a.setState({homePageData:e.results[0]})})}).catch(function(e){console.error("Cannot contact the API, check your prismic configuration:\n"+e)}),a}r()(t,e);var a=t.prototype;return a.render=function(){var e=this.state.homePageData?this.state.homePageData.data:null,t=e?e.main_header[0].text:"Joe Gandy",a=e?e.tag_line[0].text:"Web Developer",n=e?e.main_links:[];return c.a.createElement("div",{className:"_main_wrapper"},c.a.createElement(l.Helmet,{title:t+" - "+a},c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("meta",{name:"description",content:"Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby"}),c.a.createElement("meta",{name:"keywords",content:"drupal, react, developer, web, php, derby"}),c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{className:"_center_box"},c.a.createElement("div",{className:"_avatar"}),c.a.createElement("h1",{className:"_main_title"},t," ",c.a.createElement("span",null,a)),c.a.createElement("ul",{className:"_icons"},n.map(function(e,t){var a=u[e.item_icon];return c.a.createElement("li",{key:t},c.a.createElement("a",{href:e.item_link.url,target:"_blank",title:e.item_text[0].text,rel:"noopener"},c.a.createElement(a,{size:"2em"})))}))))},a.buildContext=function(){var e=p.accessToken;return m.a.api(p.apiEndpoint,{accessToken:e}).then(function(t){return{api:t,endpoint:p.apiEndpoint,accessToken:e,linkResolver:p.linkResolver}})},t}(c.a.Component)},140:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-homepage-js-5b32bb5347d9b3dbb1f9.js.map