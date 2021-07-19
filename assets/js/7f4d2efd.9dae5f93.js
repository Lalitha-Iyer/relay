(self.webpackChunk=self.webpackChunk||[]).push([[56044],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47e3:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var a=t(22122),i=t(19756),r=(t(67294),t(3905)),o=["components"],l={id:"pagination-container",title:"Pagination Container",original_id:"pagination-container"},p=void 0,s={unversionedId:"pagination-container",id:"version-v1.6.0/pagination-container",isDocsHomePage:!1,title:"Pagination Container",description:"Pagination Container is also a higher-order component, similar to a Fragment Container, that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out this page.",source:"@site/versioned_docs/version-v1.6.0/Modern-PaginationContainer.md",sourceDirName:".",slug:"/pagination-container",permalink:"/docs/v1.6.0/pagination-container",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.0/Modern-PaginationContainer.md",version:"v1.6.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1626724418,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"pagination-container",title:"Pagination Container",original_id:"pagination-container"},sidebar:"version-v1.6.0/docs",previous:{title:"Refetch Container",permalink:"/docs/v1.6.0/refetch-container"},next:{title:"Mutations",permalink:"/docs/v1.6.0/mutations"}},c=[{value:"<code>@connection</code>",id:"connection",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>createPaginationContainer</code>",id:"createpaginationcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"<code>hasMore()</code>",id:"hasmore",children:[]},{value:"<code>isLoading</code>",id:"isloading",children:[]},{value:"<code>loadMore</code>",id:"loadmore",children:[{value:"Arguments:",id:"arguments-1",children:[]}]},{value:"<code>refetchConnection</code>",id:"refetchconnection",children:[{value:"Arguments:",id:"arguments-2",children:[]}]},{value:"Pagination Example",id:"pagination-example",children:[]}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pagination Container is also a ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order component"),", similar to a ",(0,r.kt)("a",{parentName:"p",href:"./fragment-container"},"Fragment Container"),", that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"this page"),"."),(0,r.kt)("p",null,"Table of Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connection"},(0,r.kt)("inlineCode",{parentName:"a"},"@connection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createpaginationcontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"createPaginationContainer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hasmore"},(0,r.kt)("inlineCode",{parentName:"a"},"hasMore"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isloading"},(0,r.kt)("inlineCode",{parentName:"a"},"isLoading"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#loadmore"},(0,r.kt)("inlineCode",{parentName:"a"},"loadMore"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#refetchconnection"},(0,r.kt)("inlineCode",{parentName:"a"},"refetchConnection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pagination-example"},"Pagination Example"))),(0,r.kt)("h2",{id:"connection"},(0,r.kt)("inlineCode",{parentName:"h2"},"@connection")),(0,r.kt)("p",null,"Pagination Container works in a very similar way to the ",(0,r.kt)("a",{parentName:"p",href:"./#fragment-container"},"Fragment Container")," in that you also specify the data requirements for a component via GraphQL fragments in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fragmentSpec"),"."),(0,r.kt)("p",null,"However, when ",(0,r.kt)("a",{parentName:"p",href:"#createpaginationcontainer"},"specifying connection fragments")," for a Pagination Container, it is expected that at least one of the fragments contains a ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"GraphQL connection")," to paginate over, and that that the connection field is annotated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,r.kt)("p",null,"The purpose of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@connection")," directive is to allow Relay to uniquely identify different connections under a parent type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@connection")," directive takes 2 arguments that help identify the connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"@connection(key: String!, filters: [String])\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": ",(0,r.kt)("strong",{parentName:"li"},"Required")," String that serves as a unique identifier for the connection under the parent field type. A good practice could be ",(0,r.kt)("inlineCode",{parentName:"li"},"<ComponentName>_<fieldName | fieldAlias>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,r.kt)("strong",{parentName:"li"},"Optional")," Array of strings that belong to the set of argument variables defined for the connection field (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"orderBy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"searchTerm"),", etc). The values for the variables specified in this array will be used alongside the user-supplied ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," to uniquely identify a connection. If ",(0,r.kt)("inlineCode",{parentName:"li"},"filters")," is not provided, by default Relay will use the set of all of the arguments the connection field takes, excluding pagination specific arguments (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"first"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"last"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"after"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"before"),").")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Specifying just the ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and the value of `$orderBy` (given that no `filters` were provided)\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n  ) @connection(key: "Feed_feed") {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),(0,r.kt)("p",null,"Specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and /only/ the value of `$searchTerm`, i.e.\n  # different values of `orderBy` will not distinguish connections.\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n    search_term: $searchTerm\n  ) @connection(key: "Feed_feed", filters: [\'searchTerm\']) {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),(0,r.kt)("h2",{id:"createpaginationcontainer"},(0,r.kt)("inlineCode",{parentName:"h2"},"createPaginationContainer")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createPaginationContainer")," has the following signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"createPaginationContainer(\n  component: ReactComponentClass,\n  fragmentSpec: GraphQLTaggedNode | {[string]: GraphQLTaggedNode},\n  connectionConfig: ConnectionConfig,\n): ReactComponentClass;\n\ntype ConnectionConfig = {\n  direction?: 'backward' | 'forward',\n  getConnectionFromProps?: (props: Object) => ?ConnectionData,\n  getFragmentVariables?: (previousVariables: Object, totalCount: number) => Object,\n  getVariables: (\n    props: Object,\n    paginationInfo: {count: number, cursor: ?string},\n    fragmentVariables: Object,\n  ) => Object,\n  query: GraphQLTaggedNode,\n};\n\ntype ConnectionData = {\n  edges?: ?Array<any>,\n  pageInfo?: ?{\n    endCursor: ?string,\n    hasNextPage: boolean,\n    hasPreviousPage: boolean,\n    startCursor: ?string,\n  },\n};\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component"),": The React Component ",(0,r.kt)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. It is expected that one of the fragments specified here will contain a ",(0,r.kt)("a",{parentName:"li",href:"#connection"},(0,r.kt)("inlineCode",{parentName:"a"},"@connection"))," for pagination. The required data will be available on the component as props that match the shape of the provided fragment. ",(0,r.kt)("inlineCode",{parentName:"li"},"fragmentSpec")," can be one of 2 things:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragment. If the fragment uses the name convention ",(0,r.kt)("inlineCode",{parentName:"li"},"<FileName><...>_<propName>"),", the fragment's data will be available to the Component as a prop with the given ",(0,r.kt)("inlineCode",{parentName:"li"},"<propName>"),".\nIf the fragment name doesn't specify a prop name, the data will be available as a ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," prop."),(0,r.kt)("li",{parentName:"ul"},"An object whose keys are prop names and values are ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note:")," To enable ",(0,r.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",(0,r.kt)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectionConfig"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"direction"),': Either "forward" to indicate forward pagination using after/first, or "backward" to indicate backwards pagination using before/last. If not provided, Relay will infer the direction based on the provided ',(0,r.kt)("inlineCode",{parentName:"li"},"@connection")," directive. ",(0,r.kt)("strong",{parentName:"li"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"direction")," is not optional in ",(0,r.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getConnectionFromProps"),": Function that should indicate which connection to paginate over, given the fragment props (i.e. the props corresponding to the ",(0,r.kt)("inlineCode",{parentName:"li"},"fragmentSpec"),"). This is necessary in most cases because the Relay can't automatically tell which connection you mean to paginate over (a container might fetch multiple fragments and connections, but can only paginate one of them). If not provided, Relay will try infer the correct connection to paginate over based on the provided ",(0,r.kt)("inlineCode",{parentName:"li"},"@connection")," directive. See our ",(0,r.kt)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details. ",(0,r.kt)("strong",{parentName:"li"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"getConnectionFromProps")," is not optional in ",(0,r.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFragmentVariables"),": Function that should return the bag of variables  to use for reading out the data from the store when re-rendering the component. This function takes the previous set of variables passed to the pagination ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),", and the number of elements that have been fetched in total so far. Specifically, this indicates which variables to use when reading out the data from the\nlocal data store ",(0,r.kt)("em",{parentName:"li"},"after")," the new pagination ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," has been fetched. If not specified, Relay will default to using all of the previous variables and using the total count for the ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," variable. This option is analogous to ",(0,r.kt)("a",{parentName:"li",href:"./refetch-container#refetch"},(0,r.kt)("inlineCode",{parentName:"a"},"renderVariables"))," in the Refetch Container. See our ",(0,r.kt)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getVariables"),": Function that should return the variables to pass to the pagination ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," when fetching it from the server, given the current ",(0,r.kt)("inlineCode",{parentName:"li"},"props"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor"),". You may set whatever variables here, as well as modify the defaults to use for after/first/before/last arguments. See our ",(0,r.kt)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query"),": A ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," tagged query to be used as the pagination query to fetch more data upon calling ",(0,r.kt)("a",{parentName:"li",href:"#loadmore"},(0,r.kt)("inlineCode",{parentName:"a"},"loadMore")),".")))),(0,r.kt)("h3",{id:"available-props"},"Available Props"),(0,r.kt)("p",null,"The Component resulting from ",(0,r.kt)("inlineCode",{parentName:"p"},"createPaginationContainer")," will receive the following ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"type Props = {\n  relay: {\n    environment: Environment,\n    hasMore(), // See #hasMore section\n    isLoading(), // See #isLoading section\n    loadMore(), // See #loadMore section\n    refetchConnection(), // See #refetchConnection section\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relay"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"environment"),": The current ",(0,r.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasMore"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"hasMore")," ",(0,r.kt)("a",{parentName:"li",href:"#hasmore"},"docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," ",(0,r.kt)("a",{parentName:"li",href:"#isloading"},"docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadMore"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"loadMore")," ",(0,r.kt)("a",{parentName:"li",href:"#loadmore"},"docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refetchConnection "),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"refetchConnection")," ",(0,r.kt)("a",{parentName:"li",href:"#refetchconnection"},"docs"))))),(0,r.kt)("h2",{id:"hasmore"},(0,r.kt)("inlineCode",{parentName:"h2"},"hasMore()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hasMore")," is a function available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"relay")," ",(0,r.kt)("a",{parentName:"p",href:"#available-props"},"prop"),". This function indicates wether there are more pages to fetch from the server or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"hasMore: () => boolean,\n\n")),(0,r.kt)("h2",{id:"isloading"},(0,r.kt)("inlineCode",{parentName:"h2"},"isLoading")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," is a function available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"relay")," ",(0,r.kt)("a",{parentName:"p",href:"#available-props"},"prop"),". This function indicates if a previous call to ",(0,r.kt)("a",{parentName:"p",href:"#loadmore"},(0,r.kt)("inlineCode",{parentName:"a"},"loadMore()"))," is still pending. This is convenient for avoiding duplicate load calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"isLoading: () => boolean,\n\n")),(0,r.kt)("h2",{id:"loadmore"},(0,r.kt)("inlineCode",{parentName:"h2"},"loadMore")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loadMore")," is a function available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"relay")," ",(0,r.kt)("a",{parentName:"p",href:"#available-props"},"prop"),". You can call ",(0,r.kt)("inlineCode",{parentName:"p"},"loadMore()")," to fetch more items from the server based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionConfig")," provided to the container. This will return null if there are no more items to fetch, otherwise it will fetch more items and return a Disposable that can be used to cancel the fetch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"loadMore(pageSize: number, callback: ?(error: ?Error) => void): ?Disposable\n\n")),(0,r.kt)("h3",{id:"arguments-1"},"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageSize"),": The number of ",(0,r.kt)("strong",{parentName:"li"},"additional")," items to fetch (not the total)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument.")),(0,r.kt)("h2",{id:"refetchconnection"},(0,r.kt)("inlineCode",{parentName:"h2"},"refetchConnection")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refetchConnection")," is a function available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"relay")," ",(0,r.kt)("a",{parentName:"p",href:"#available-props"},"prop"),". You can call ",(0,r.kt)("inlineCode",{parentName:"p"},"refetchConnection")," to restart pagination on a connection from scratch, with optionally a completely new set of variables to pass to the pagination ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),". This is useful for example if you are paginating over a collection based on a userID and the userID changes, you'd want to start paginating over the new collection for the new user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"refetchConnection:(\n  count: number,\n  callback: (error: ?Error) => void,\n  refetchVariables: ?Variables,\n) => ?Disposable,\n\n")),(0,r.kt)("h3",{id:"arguments-2"},"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"totalCount"),": The total number of elements to fetch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refetchVariables"),": A potentially new bag of variables to pass to the pagination ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," when fetching it from the server.")),(0,r.kt)("h2",{id:"pagination-example"},"Pagination Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Feed.js\nimport {createPaginationContainer, graphql} from \'react-relay\';\n\nclass Feed extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.user.feed.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n        <button\n          onPress={() => this._loadMore()}\n          title="Load More"\n        />\n      </div>\n    );\n  }\n\n  _loadMore() {\n    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {\n      return;\n    }\n\n    this.props.relay.loadMore(\n      10,  // Fetch the next 10 feed items\n      error => {\n        console.log(error);\n      },\n    );\n  }\n}\n\nmodule.exports = createPaginationContainer(\n  Feed,\n  {\n    user: graphql`\n      fragment Feed_user on User\n      @argumentDefinitions(\n        count: {type: "Int", defaultValue: 10}\n        cursor: {type: "ID"}\n        orderby: {type: "[FriendsOrdering]", defaultValue: [DATE_ADDED]}\n      ) {\n        feed(\n          first: $count\n          after: $cursor\n          orderby: $orderBy # Non-pagination variables\n        ) @connection(key: "Feed_feed") {\n          edges {\n            node {\n              id\n              ...Story_story\n            }\n          }\n        }\n      }\n    `,\n  },\n  {\n    direction: \'forward\',\n    getConnectionFromProps(props) {\n      return props.user && props.user.feed;\n    },\n    // This is also the default implementation of `getFragmentVariables` if it isn\'t provided.\n    getFragmentVariables(prevVars, totalCount) {\n      return {\n        ...prevVars,\n        count: totalCount,\n      };\n    },\n    getVariables(props, {count, cursor}, fragmentVariables) {\n      return {\n        count,\n        cursor,\n        orderBy: fragmentVariables.orderBy,\n        // userID isn\'t specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.\n        userID: fragmentVariables.userID,\n      };\n    },\n    query: graphql`\n      # Pagination query to be fetched upon calling `loadMore`.\n      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.\n      query FeedPaginationQuery(\n        $count: Int!\n        $cursor: ID\n        $orderBy: [FriendsOrdering]!\n        $userID: ID!\n      ) {\n        user: node(id: $userID) {\n          ...Feed_user @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)\n        }\n      }\n    `\n  }\n);\n')))}m.isMDXComponent=!0}}]);