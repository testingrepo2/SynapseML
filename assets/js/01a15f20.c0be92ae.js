"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1970],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),m=a,f=y["".concat(l,".").concat(m)]||y[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Quickstart - Analyze Text",hide_title:!0,status:"stable"},l="Cognitive Services - Analyze Text",c={unversionedId:"Explore Algorithms/AI Services/Quickstart - Analyze Text",id:"version-0.11.4/Explore Algorithms/AI Services/Quickstart - Analyze Text",title:"Quickstart - Analyze Text",description:"",source:"@site/versioned_docs/version-0.11.4/Explore Algorithms/AI Services/Quickstart - Analyze Text.md",sourceDirName:"Explore Algorithms/AI Services",slug:"/Explore Algorithms/AI Services/Quickstart - Analyze Text",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/AI Services/Quickstart - Analyze Text",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"Quickstart - Analyze Text",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Analyze Celebrity Quotes",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/AI Services/Quickstart - Analyze Celebrity Quotes"},next:{title:"Quickstart - Creare a Visual Search Engine",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/AI Services/Quickstart - Creare a Visual Search Engine"}},u={},p=[],y={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cognitive-services---analyze-text"},"Cognitive Services - Analyze Text"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.core.platform import find_secret\n\ncognitive_key = find_secret("cognitive-api-key")\ncognitive_location = "eastus"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.createDataFrame(\n    data=[\n        ["en", "Hello Seattle"],\n        ["en", "There once was a dog who lived in London and thought she was a human"],\n    ],\n    schema=["language", "text"],\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntext_analyze = (\n    TextAnalyze()\n    .setLocation(cognitive_location)\n    .setSubscriptionKey(cognitive_key)\n    .setTextCol("text")\n    .setOutputCol("textAnalysis")\n    .setErrorCol("error")\n    .setLanguageCol("language")\n    .setEntityRecognitionParams(\n        {"model-version": "latest"}\n    )  # Can pass parameters to each model individually\n    .setIncludePii(False)  # Users can manually exclude tasks to speed up analysis\n    .setIncludeEntityLinking(False)\n    .setIncludeSentimentAnalysis(False)\n)\n\ndf_results = text_analyze.transform(df)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(df_results)\n")))}m.isMDXComponent=!0}}]);