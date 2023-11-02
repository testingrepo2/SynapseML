"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[939],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,v=f["".concat(c,".").concat(m)]||f[m]||l[m]||s;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76455:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),s=(r(67294),r(3905)),i=["components"],a={title:"Set up Cognitive Services",hide_title:!0,status:"stable"},c="Setting up Cognitive Services and Azure OpenAI resources for SynapseML",u={unversionedId:"Get Started/Set up Cognitive Services",id:"version-0.11.3/Get Started/Set up Cognitive Services",title:"Set up Cognitive Services",description:"In order to use SynapseML's OpenAI or Cognitive Services features, specific Azure resources are required. This documentation walks you through the process of setting up these resources and acquiring the necessary credentials.",source:"@site/versioned_docs/version-0.11.3/Get Started/Set up Cognitive Services.md",sourceDirName:"Get Started",slug:"/Get Started/Set up Cognitive Services",permalink:"/SynapseML/docs/0.11.3/Get Started/Set up Cognitive Services",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Set up Cognitive Services",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Install SynapseML",permalink:"/SynapseML/docs/0.11.3/Get Started/Install SynapseML"},next:{title:"Quickstart - Your First Models",permalink:"/SynapseML/docs/0.11.3/Get Started/Quickstart - Your First Models"}},p={},l=[{value:"Azure OpenAI",id:"azure-openai",level:2},{value:"Cognitive Services",id:"cognitive-services",level:2}],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"setting-up-cognitive-services-and-azure-openai-resources-for-synapseml"},"Setting up Cognitive Services and Azure OpenAI resources for SynapseML"),(0,s.kt)("p",null,"In order to use SynapseML's OpenAI or Cognitive Services features, specific Azure resources are required. This documentation walks you through the process of setting up these resources and acquiring the necessary credentials."),(0,s.kt)("p",null,"First, create an Azure subscription to create resources."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A valid Azure subscription - ",(0,s.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/cognitive-services/"},"Create one for free"),".")),(0,s.kt)("h2",{id:"azure-openai"},"Azure OpenAI"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/cognitive-services/openai-service/"},"Azure OpenAI service")," can be used to solve a large number of natural language tasks through prompting the completion API. To make it easier to scale your prompting workflows from a few examples to large datasets of examples, we have integrated the Azure OpenAI service with the distributed machine learning library SynapseML. This integration makes it easy to use the Apache Spark distributed computing framework to process millions of prompts with the OpenAI service."),(0,s.kt)("p",null,"To set up your Azure OpenAI Resource for SynapseML usage you need to: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://aka.ms/oai/access"},"Apply for access to Azure OpenAI")," if you do not already have access. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource"},"Create an Azure OpenAI resource")," "),(0,s.kt)("li",{parentName:"ul"},"Get your Azure OpenAI resource's key. After your resource is successfully deployed, select ",(0,s.kt)("strong",{parentName:"li"},"Next Steps")," > ",(0,s.kt)("strong",{parentName:"li"},"Go to resource"),". Once at the resource, you can get the key from ",(0,s.kt)("strong",{parentName:"li"},"Resource Management")," > ",(0,s.kt)("strong",{parentName:"li"},"Keys and Endpoint"),". Copy the key and paste it into the notebook. Store keys securely and do not share them. ")),(0,s.kt)("h2",{id:"cognitive-services"},"Cognitive Services"),(0,s.kt)("p",null,"To set up ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/cognitive-services/"},"Cognitive Services")," for use with SynapseML you first need to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/role-based-access-control/role-assignments-steps"},"Assign yourself the Cognitive Services Contributor role")," to agree to the responsible AI terms and create a resource. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://portal.azure.com/#create/Microsoft.CognitiveServicesAllInOne"},"Create an Azure Cognitive multi-service (Decision, Language, Speech, Vision) resource"),". Alternatively, you can follow the steps to ",(0,s.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account?tabs=decision%2Canomaly-detector%2Clanguage-service%2Ccomputer-vision%2Cwindows#create-a-new-azure-cognitive-services-resource"},"create Single-service resource"),". "),(0,s.kt)("li",{parentName:"ul"},"Get your Cognitive Service resource's key. After your resource is successfully deployed, select ",(0,s.kt)("strong",{parentName:"li"},"Next Steps")," > ",(0,s.kt)("strong",{parentName:"li"},"Go to resource"),". Once at the resource, you can get the key from ",(0,s.kt)("strong",{parentName:"li"},"Resource Management")," > ",(0,s.kt)("strong",{parentName:"li"},"Keys and Endpoint"),". Copy the key and paste it into the notebook. Store keys securely and do not share them.")))}m.isMDXComponent=!0}}]);