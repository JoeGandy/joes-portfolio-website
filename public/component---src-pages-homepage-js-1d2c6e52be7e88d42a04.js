(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(e,a,t){"use strict";t.r(a);t(160);var n=t(8),r=t.n(n),c=t(0),i=t.n(c),o=t(164),s=t(161),l=t(163),m=t.n(l),u={apiEndpoint:"https://gandymainwebsite.cdn.prismic.io/api/v2",linkResolver:function(e){return"/"}};t.d(a,"default",function(){return h}),t(159);var d={FaFacebook:o.a,FaGithub:o.c,FaLinkedin:o.f,FaSteam:o.h,FaFileAlt:o.b,FaRssSquare:o.g,FaGitlab:o.d,FaLastfmSquare:o.e},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={homePageData:null,tracks:[]},t.buildContext().then(function(e){e.api.query(m.a.Predicates.at("document.type","homepage"),{orderings:"[my.homepage.date desc]"}).then(function(e){t.setState({homePageData:e.results[0]})}),fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joegandy1&api_key=6900d6827e2c0d6248e54a385fe242b6&format=json").then(function(e){return e.json()}).then(function(e){return t.setState({tracks:e.recenttracks.track})})}).catch(function(e){console.error("Cannot contact the API, check your prismic configuration:\n"+e)}),t}r()(a,e);var t=a.prototype;return t.render=function(){var e=this.state.homePageData?this.state.homePageData.data:null,a=e?e.main_header[0].text:"Joe Gandy",t=e?e.tag_line[0].text:"Web Developer",n=e?e.main_links:[],r=this.state.tracks;return i.a.createElement("div",{className:"_main_wrapper"},i.a.createElement(s.Helmet,{title:a+" - "+t},i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"description",content:"Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby"}),i.a.createElement("meta",{name:"keywords",content:"drupal, react, developer, web, php, derby"}),i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:"_center_box"},i.a.createElement("div",{className:"_avatar"}),i.a.createElement("h1",{className:"_main_title"},a,i.a.createElement("span",null,t)),i.a.createElement("ul",{className:"_icons"},n.map(function(e,a){var t=d[e.item_icon];return i.a.createElement("li",{key:a},i.a.createElement("a",{href:e.item_link.url,target:"_blank",title:e.item_text[0].text,rel:"noopener"},i.a.createElement(t,{size:"2em"})))}))),r.length>0?i.a.createElement("div",{className:"_recent_tracks "+(r.length>0?"load":"")},i.a.createElement("h3",null,"What I've been listening too"),r.map(function(e,a){if(!(a>5)){var t=e["@attr"]&&e["@attr"].nowplaying;return i.a.createElement("a",{key:a,href:e.url,target:"_blank"},i.a.createElement("div",{className:"_track"},i.a.createElement("div",{className:"_image"},i.a.createElement("img",{src:e.image[0]["#text"]})),i.a.createElement("p",{className:"_track_artist"},e.artist["#text"]),i.a.createElement("p",{className:"_track_name"},e.name),t?i.a.createElement("p",{className:"_play_status _now_playing"},"Playing now"):i.a.createElement("p",{className:"_play_status _played"},function(e,a){var t=e-a;if(t<6e4){var n=1!==Math.round(t/1e3);return Math.round(t/1e3)+" sec"+(n?"s":"")+" ago"}if(t<36e5){var r=1!==Math.round(t/6e4);return Math.round(t/6e4)+" min"+(r?"s":"")+" ago"}if(t<864e5){var c=1!==Math.round(t/36e5);return Math.round(t/36e5)+" hour"+(c?"s":"")+" ago"}if(t<2592e6){var i=1!==Math.round(t/864e5);return Math.round(t/864e5)+" day"+(i?"s":"")+" ago"}if(t<31536e6){var o=1!==Math.round(t/2592e6);return Math.round(t/2592e6)+" month"+(o?"s":"")+" ago"}var s=1!==Math.round(t/31536e6);return Math.round(t/31536e6)+" year"+(s?"s":"")+" ago"}(new Date,new Date(1e3*e.date.uts)))))}})):"")},t.buildContext=function(){var e=u.accessToken;return m.a.api(u.apiEndpoint,{accessToken:e}).then(function(a){return{api:a,endpoint:u.apiEndpoint,accessToken:e,linkResolver:u.linkResolver}})},a}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-homepage-js-1d2c6e52be7e88d42a04.js.map