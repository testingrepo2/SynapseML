"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[81985],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,b=p["".concat(i,".").concat(g)]||p[g]||c[g]||l;return a?n.createElement(b,s(s({ref:t},m),{},{components:a})):n.createElement(b,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(83117),r=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),u=a(12466),m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,s=e.lazy,p=e.block,g=e.defaultValue,b=e.values,f=e.groupId,h=e.className,d=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var L=null===g?g:null!=(t=null!=g?g:null==(a=d.find((function(e){return e.props.default})))?void 0:a.props.value)?t:d[0].props.value;if(null!==L&&!y.some((function(e){return e.value===L})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+L+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),M=k.tabGroupChoices,C=k.setTabGroupChoices,T=(0,r.useState)(L),E=T[0],N=T[1],w=[],G=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=M[f];null!=_&&_!==E&&y.some((function(e){return e.value===_}))&&N(_)}var B=function(e){var t=e.currentTarget,a=w.indexOf(t),n=y[a].value;n!==E&&(G(t),N(n),null!=f&&C(f,String(n)))},P=function(e){var t,a=null;switch(e.key){case"Enter":B(e);break;case"ArrowRight":var n,r=w.indexOf(e.currentTarget)+1;a=null!=(n=w[r])?n:w[0];break;case"ArrowLeft":var l,s=w.indexOf(e.currentTarget)-1;a=null!=(l=w[s])?l:w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return w.push(e)},onKeyDown:P,onClick:B},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(d.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function g(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},31989:function(e,t,a){var n=a(67294),r=a(52263);t.Z=function(e){var t=e.className,a=e.py,l=e.scala,s=e.csharp,o=e.sourceLink,i=(0,r.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+a,m="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+l,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+s;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:m},t)),n.createElement("td",null,n.createElement("strong",null,".NET API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:o},t)))))}},23268:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return L},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return y}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),s=a(65488),o=a(85162),i=a(31989),u=["components"],m=[{value:"LightGBMClassifier",id:"lightgbmclassifier",level:2},{value:"LightGBMRanker",id:"lightgbmranker",level:2},{value:"LightGBMRegressor",id:"lightgbmregressor",level:2}],c={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lightgbmclassifier"},"LightGBMClassifier"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmClassifier = (LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmClassifier = (new LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n')))),(0,l.kt)(i.Z,{className:"LightGBMClassifier",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMClassifier",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmranker"},"LightGBMRanker"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRanker = (LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(False)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRanker = (new LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(false)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRanker",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRanker",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRanker.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmregressor"},"LightGBMRegressor"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRegressor = (LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRegressor = (new LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRegressor",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRegressor",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var g=["components"],b={title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},f="LightGBM",h={unversionedId:"documentation/estimators/estimators_lightgbm",id:"version-0.11.2/documentation/estimators/estimators_lightgbm",title:"Estimators - LightGBM",description:"",source:"@site/versioned_docs/version-0.11.2/documentation/estimators/estimators_lightgbm.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_lightgbm",permalink:"/SynapseML/docs/documentation/estimators/estimators_lightgbm",draft:!1,tags:[],version:"0.11.2",frontMatter:{title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},sidebar:"docs",previous:{title:"Core",permalink:"/SynapseML/docs/documentation/estimators/estimators_core"},next:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/documentation/estimators/estimators_vw"}},d={},y=[].concat(m),v={toc:y};function L(e){var t=e.components,a=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,l.kt)(p,{mdxType:"LightGBM"}))}L.isMDXComponent=!0}}]);