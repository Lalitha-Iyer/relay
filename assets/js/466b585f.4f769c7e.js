(self.webpackChunk=self.webpackChunk||[]).push([[15541],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>d,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(o),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},33476:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>u});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i=["components"],c={id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},s=void 0,l={unversionedId:"introduction-to-relay",id:"version-v10.0.1/introduction-to-relay",isDocsHomePage:!1,title:"Introduction to Relay",description:"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.",source:"@site/versioned_docs/version-v10.0.1/Introduction-IntroductionToRelay.md",sourceDirName:".",slug:"/",permalink:"/docs/v10.0.1/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.1/Introduction-IntroductionToRelay.md",version:"v10.0.1",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1626724418,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},sidebar:"version-v10.0.1/docs",next:{title:"Prerequisites",permalink:"/docs/v10.0.1/prerequisites"}},d=[],p={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")," allows views to be defined as components where every component is responsible for rendering a part of the UI. Composing other components is how to build complex UIs. Each React component doesn't need to know the inner workings of the composed components."),(0,a.kt)("p",null,"Relay couples React with GraphQL and develops the idea of encapsulation further. It allows components to specify what data they need and the Relay framework provides the data. This makes the data needs of inner components opaque and allows composition of those needs. Thinking about what data an app needs becomes localized to the component making it easier to reason about what fields are needed or no longer needed."))}u.isMDXComponent=!0}}]);