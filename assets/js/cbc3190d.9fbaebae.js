"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5488],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),y=r,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||i;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85418:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=(a(44996),a(39960)),o=["components"],l={title:"What is SynapseML?",sidebar_label:"What is SynapseML?",hide_title:!0},p="What is SynapseML?",c={unversionedId:"Overview",id:"Overview",title:"What is SynapseML?",description:"SynapseML (previously known as MMLSpark), is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others. SynapseML is built on the Apache Spark distributed computing framework and shares the same API as the SparkML/MLLib library, allowing you to seamlessly embed SynapseML models into existing Apache Spark workflows.",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/SynapseML/docs/next/Overview",draft:!1,tags:[],version:"current",frontMatter:{title:"What is SynapseML?",sidebar_label:"What is SynapseML?",hide_title:!0},sidebar:"docs",next:{title:"Create a Spark Cluster",permalink:"/SynapseML/docs/next/Get Started/Create a Spark Cluster"}},u={},m=[{value:"Papers",id:"papers",level:2}],y={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-synapseml"},"What is SynapseML?"),(0,i.kt)("p",null,"SynapseML (previously known as MMLSpark), is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others. SynapseML is built on the ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark distributed computing framework")," and shares the same API as the ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/mllib/"},"SparkML/MLLib library"),", allowing you to seamlessly embed SynapseML models into existing Apache Spark workflows."),(0,i.kt)("p",null,"With SynapseML, you can build scalable and intelligent systems to solve challenges in domains such as anomaly detection, computer vision, deep learning, text analytics, and others. SynapseML can train and evaluate models on single-node, multi-node, and elastically resizable clusters of computers. This lets you scale your work without wasting resources. SynapseML is usable across Python, R, Scala, Java, and .NET. Furthermore, its API abstracts over a wide variety of databases, file systems, and cloud data stores to simplify experiments no matter where data is located."),(0,i.kt)("p",null,"SynapseML requires Scala 2.12, Spark 3.2+, and Python 3.8+."),(0,i.kt)(s.Z,{to:"/docs/Get Started/Install SynapseML",className:"button button--lg button--outline button--block button--primary",mdxType:"Link"},"Get Started"),(0,i.kt)("h2",{id:"papers"},"Papers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.08044"},"Large Scale Intelligent Microservices"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2007.07177"},"Conditional Image Retrieval"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.08744"},"SynapseML: Unifying Machine Learning Ecosystems at Massive Scales"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1804.04031"},"Flexible and Scalable Deep Learning with MMLSpark")))))}d.isMDXComponent=!0}}]);