(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9241],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},898:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(4034),a=r(9973),o=(r(7294),r(3905)),i=["components"],c={title:"Publication - Large-Scale Intelligent Microservices",description:"Large-Scale Intelligent Microservices",keywords:["microservices"]},s=void 0,l={permalink:"/SynapseML/blog/2020-12-Large-Scale Intelligent Microservices",source:"@site/blog/2020-12-Large-Scale Intelligent Microservices.md",title:"Publication - Large-Scale Intelligent Microservices",description:"Large-Scale Intelligent Microservices",date:"2021-10-19T03:16:50.672Z",formattedDate:"October 19, 2021",tags:[],readingTime:.805,truncated:!0,authors:[],nextItem:{title:"Overview",permalink:"/SynapseML/blog/overview"}},u={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploying Machine Learning (ML) algorithms within databases is a challenge due to the varied computational footprints of modern ML algorithms and the myriad of database technologies each with their own restrictive syntax. We introduce an Apache Spark-based micro-service orchestration "," framework that extends database operations to include web service primitives. Our system can orchestrate web services across hundreds of machines and takes full advantage of cluster, thread, and asynchronous parallelism. Using this framework, we provide large scale clients for intelligent services such as speech, vision, search, anomaly detection, and text analysis. This allows users to integrate ready-to-use intelligence into any datastore with an Apache Spark connector. To eliminate the majority of overhead from network communication, we also introduce a low-latency containerized version of our architecture. Finally, we demonstrate that the services we investigate are competitive on a variety of benchmarks, and present two applications of this framework to create intelligent search engines, and real time auto race analytics systems."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/publication/large-scale-services/"},"Read More")))}m.isMDXComponent=!0}}]);