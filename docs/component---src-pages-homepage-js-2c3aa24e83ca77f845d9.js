(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){"use strict";a.r(t);var n=a(179),r=a(0),o=a.n(r),i=a(184),c=a(182),l=(a(58),a(178),a(7).default.enqueue,o.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,i=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,i&&r(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(l.Consumer,null,function(e){return o.a.createElement(m,{data:t,query:a,render:n||r,staticQueryData:e})})};a(33);var s=function(e){var t,a;function n(t){var a;return a=e.call(this,t)||this,"undefined"!=typeof fetch&&fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joegandy1&api_key=6900d6827e2c0d6248e54a385fe242b6&format=json").then(function(e){return e.json()}).then(function(e){return a.setState({tracks:e.recenttracks.track})}),a.state={tracks:[]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.tracks;return e.length<1?o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"_recent_tracks "+(e.length>0?"load":"")},o.a.createElement("h3",null,"What I've been listening too"),e.map(function(e,t){if(!(t>9)){var a=e["@attr"]&&e["@attr"].nowplaying;return o.a.createElement("a",{key:t,href:e.url,rel:"noopener",target:"_blank"},o.a.createElement("div",{className:"_track"},o.a.createElement("div",{className:"_image"},o.a.createElement("img",{src:e.image[0]["#text"]})),o.a.createElement("p",{className:"_track_artist"},e.artist["#text"]),o.a.createElement("p",{className:"_track_name"},e.name),a?o.a.createElement("p",{className:"_play_status _now_playing"},"Playing now"):o.a.createElement("p",{className:"_play_status _played"},function(e,t){var a=e-t;if(a<6e4){var n=1!==Math.round(a/1e3);return Math.round(a/1e3)+" sec"+(n?"s":"")+" ago"}if(a<36e5){var r=1!==Math.round(a/6e4);return Math.round(a/6e4)+" min"+(r?"s":"")+" ago"}if(a<864e5){var o=1!==Math.round(a/36e5);return Math.round(a/36e5)+" hour"+(o?"s":"")+" ago"}if(a<2592e6){var i=1!==Math.round(a/864e5);return Math.round(a/864e5)+" day"+(i?"s":"")+" ago"}if(a<31536e6){var c=1!==Math.round(a/2592e6);return Math.round(a/2592e6)+" month"+(c?"s":"")+" ago"}var l=1!==Math.round(a/31536e6);return Math.round(a/31536e6)+" year"+(l?"s":"")+" ago"}(new Date,new Date(1e3*e.date.uts)))))}}))},n}(o.a.Component);a.d(t,"query",function(){return d}),a.d(t,"default",function(){return p}),a(181);var d="2853665799",p=function(e){var t,a;function r(t){return e.call(this,t)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return o.a.createElement(u,{query:d,render:function(e){return o.a.createElement("div",{className:"_main_wrapper"},o.a.createElement(c.Helmet,{title:"Joe Gandy // Developer"},o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:"Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby"}),o.a.createElement("meta",{name:"keywords",content:"drupal, react, developer, web, php, derby"}),o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"_center_box"},o.a.createElement("div",{className:"_avatar"}),o.a.createElement("h1",{className:"_main_title"},e.allPrismicHomepage.nodes[0].data.main_header.raw[0].text,o.a.createElement("span",null,e.allPrismicHomepage.nodes[0].data.tag_line.text)),o.a.createElement("ul",{className:"_icons"},e.allPrismicHomepage.nodes[0].data.main_links.map(function(e,t){var a=i[e.item_icon]||null;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.item_link.url,target:"_blank",title:e.item_text.text,rel:"noopener"},o.a.createElement(a,{size:"2em"})))}))),o.a.createElement(s,null))},data:n})},r}(o.a.Component)},178:function(e,t,a){var n;e.exports=(n=a(180))&&n.default||n},179:function(e){e.exports={data:{allPrismicHomepage:{nodes:[{id:"Prismic__Homepage__XGaTnBEAAB8Aa4WI",type:"homepage",data:{main_header:{raw:[{text:"Joe Gandy"}]},main_links:[{item_icon:"FaFacebook",item_link:{url:"https://www.facebook.com/ijoegandy"},item_text:{text:"Facebook"}},{item_icon:"FaLinkedin",item_link:{url:"https://www.linkedin.com/in/joegandy"},item_text:{text:"LinkedIn"}},{item_icon:"FaSteam",item_link:{url:"https://steamcommunity.com/id/joegandy1"},item_text:{text:"Steam"}},{item_icon:"FaGithub",item_link:{url:"https://github.com/JoeGandy"},item_text:{text:"GitHub"}},{item_icon:"FaFileAlt",item_link:{url:"https://docs.google.com/document/d/1KKVEXU2plx6Ea5rQVY9RID-1u3E0jcxqmON6-qEppkU/preview"},item_text:{text:"My Resume"}},{item_icon:"FaRssSquare",item_link:{url:"https://log.jiy.io"},item_text:{text:"My Blog"}},{item_icon:"FaLastfmSquare",item_link:{url:"https://www.last.fm/user/JoeGandy1"},item_text:{text:"Last.FM"}}],tag_line:{text:"Web Developer"}}}],totalCount:1}}}},180:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-homepage-js-2c3aa24e83ca77f845d9.js.map