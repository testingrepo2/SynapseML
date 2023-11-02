"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1340],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Publication - Flexible and Scalable Deep Learning with MMLSpark",description:"Flexible and Scalable Deep Learning with MMLSpark",keywords:["Deep Learning"]},p=void 0,c={permalink:"/SynapseML/blog/2018/04/01/Flexible and Scalable Deep Learning with MMLSpark",source:"@site/blog/2018-04-01-Flexible and Scalable Deep Learning with MMLSpark.md",title:"Publication - Flexible and Scalable Deep Learning with MMLSpark",description:"Flexible and Scalable Deep Learning with MMLSpark",date:"2018-04-01T00:00:00.000Z",formattedDate:"April 1, 2018",tags:[],readingTime:.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Publication - Flexible and Scalable Deep Learning with MMLSpark",description:"Flexible and Scalable Deep Learning with MMLSpark",keywords:["Deep Learning"]},prevItem:{title:"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",permalink:"/SynapseML/blog/2019/06/01/MMLSpark Unifying Machine Learning Ecosystems at Massive Scales"}},s={authorsImageUrls:[]},u=[],f={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this work, we detail a novel open source library called MMLSpark that combines the flexible deep learning library Cognitive Toolkit with the distributed computing framework Apache Spark. To achieve this union, we have contributed Java Language bindings to the Cognitive Toolkit "," and added several new components to the Spark ecosystem. In addition, we integrate OpenCV, the popular image processing library, with Spark. We present a tool that automatically generates PySpark wrappers from any SparkML estimator, and we use this tool to expose all work to the PySpark ecosystem. Finally, we provide a large library of tools for working and developing within the Spark ecosystem. We apply this work to the automated classification of Snow Leopards from camera trap images, and provide an end-to-end solution for the non-profit conservation organization, the Snow Leopard Trust."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/publication/flexible-and-scalable-deep-learning-with-mmlspark/"},"Read More")))}d.isMDXComponent=!0}}]);