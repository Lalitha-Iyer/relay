(self.webpackChunk=self.webpackChunk||[]).push([[64809],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),p=a,m=s["".concat(i,".").concat(p)]||s[p]||h[p]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(44256),a=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var c=function(){var e=a.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return a.createElement(i,null,a.createElement(l,null),a.createElement(c,null))},s=function(){return a.createElement(i,null,a.createElement(c,null))};const u=function(){return(0,n.fbContent)({internal:a.createElement(d,null),external:a.createElement(s,null)})}},20207:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>s,toc:()=>u,default:()=>h});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=r(68629),c=["components"],l={id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},d=void 0,s={unversionedId:"principles-and-architecture/videos",id:"version-v13.0.0/principles-and-architecture/videos",isDocsHomePage:!1,title:"Videos",description:"Relay videos",source:"@site/versioned_docs/version-v13.0.0/principles-and-architecture/videos.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/videos/",permalink:"/docs/principles-and-architecture/videos/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/principles-and-architecture/videos.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Bar Ulman",lastUpdatedAt:1643915618,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},sidebar:"version-v13.0.0/docs",previous:{title:"Runtime Architecture",permalink:"/docs/principles-and-architecture/runtime-architecture/"},next:{title:"Community Learning Resources",permalink:"/docs/community-learning-resources/"}},u=[{value:"React Conf 2021",id:"react-conf-2021",children:[{value:"Re-introducing Relay | Robert Balicki",id:"re-introducing-relay--robert-balicki",children:[],level:3}],level:2},{value:"React Conf 2019",id:"react-conf-2019",children:[{value:"Data Fetching With Suspense In Relay | Joe Savona",id:"data-fetching-with-suspense-in-relay--joe-savona",children:[],level:3}],level:2},{value:"Facebook F8 2019",id:"facebook-f8-2019",children:[{value:"Building the new Facebook.com with React, GraphQL and Relay",id:"building-the-new-facebookcom-with-react-graphql-and-relay",children:[],level:3}],level:2},{value:"Facebook F8 2017",id:"facebook-f8-2017",children:[{value:"The Evolution of React and GraphQL at Facebook and Beyond",id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond",children:[],level:3}],level:2},{value:"Silicon Valley ReactJS Meetup",id:"silicon-valley-reactjs-meetup",children:[{value:"Relay Modern: simpler, faster, more predictable (slides)",id:"relay-modern-simpler-faster-more-predictable-slides",children:[],level:3},{value:"Zero to GraphQL in 30 minutes",id:"zero-to-graphql-in-30-minutes",children:[],level:3}],level:2},{value:"GraphQL Europe 2018",id:"graphql-europe-2018",children:[{value:"Data Masking in GraphQL Clients",id:"data-masking-in-graphql-clients",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"react-conf-2021"},"React Conf 2021"),(0,o.mdx)("h3",{id:"re-introducing-relay--robert-balicki"},"Re-introducing Relay | Robert Balicki"),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/lhVGdErZuN4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,o.mdx)("h2",{id:"react-conf-2019"},"React Conf 2019"),(0,o.mdx)("h3",{id:"data-fetching-with-suspense-in-relay--joe-savona"},"Data Fetching With Suspense In Relay | Joe Savona"),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/Tl0S7QkxFE4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,o.mdx)("h2",{id:"facebook-f8-2019"},"Facebook F8 2019"),(0,o.mdx)("h3",{id:"building-the-new-facebookcom-with-react-graphql-and-relay"},(0,o.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/"},"Building the new Facebook.com with React, GraphQL and Relay")),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/WxPtYJRjLL0?start=215",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,width:"640",height:"360",frameBorder:"0"}),(0,o.mdx)("h2",{id:"facebook-f8-2017"},"Facebook F8 2017"),(0,o.mdx)("h3",{id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond"},(0,o.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/f8-2017/the-evolution-of-react-and-graphql-at-facebook-and-beyond/"},"The Evolution of React and GraphQL at Facebook and Beyond")),(0,o.mdx)("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers%2Fvideos%2F10154614710193553%2F&show_text=0&width=640",width:640,height:360,frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h2",{id:"silicon-valley-reactjs-meetup"},(0,o.mdx)("a",{parentName:"h2",href:"http://www.meetup.com/Silicon-Valley-ReactJS-Meetup/"},"Silicon Valley ReactJS Meetup")),(0,o.mdx)("h3",{id:"relay-modern-simpler-faster-more-predictable-slides"},"Relay Modern: simpler, faster, more predictable (",(0,o.mdx)("a",{parentName:"h3",href:"https://speakerdeck.com/wincent/relay-2-simpler-faster-more-predictable"},"slides"),")"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/OEfUBN9dAI8",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h3",{id:"zero-to-graphql-in-30-minutes"},"Zero to GraphQL in 30 minutes"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/UBGzsb2UkeY",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h2",{id:"graphql-europe-2018"},(0,o.mdx)("a",{parentName:"h2",href:"https://www.graphql-europe.org/"},"GraphQL Europe 2018")),(0,o.mdx)("h3",{id:"data-masking-in-graphql-clients"},"Data Masking in GraphQL Clients"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/ww5UQ50oHok",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);