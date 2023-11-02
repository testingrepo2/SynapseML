"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4275],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(67294),n=r(86010),l="tabItem_Ymn6";function s(e){var t=e.children,r=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return E}});var a=r(83117),n=r(67294),l=r(86010),s=r(12466),o=r(16550),i=r(91980),u=r(67392),c=r(50012);function m(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:m(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function b(e){var t,r,a,l,s=e.defaultValue,o=e.queryString,i=void 0!==o&&o,u=e.groupId,m=p(e),b=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:m})})),h=b[0],d=b[1],y=f({queryString:i,groupId:u}),v=y[0],k=y[1],L=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=L[0],w=L[1],M=function(){var e=null!=v?v:E;return g({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){M&&d(M)}),[M]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);d(e),k(e),w(e)}),[k,w,m]),tabValues:m}}var h=r(72389),d="tabList__CuJ",y="tabItem_LNqP";function v(e){var t=e.className,r=e.block,o=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],m=(0,s.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==o&&(m(t),i(a))},g=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,n=c.indexOf(e.currentTarget)+1;r=null!=(a=c[n])?a:c[0];break;case"ArrowLeft":var l,s=c.indexOf(e.currentTarget)-1;r=null!=(l=c[s])?l:c[c.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,s=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:g,onClick:p},s,{className:(0,l.Z)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function k(e){var t=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var s=l.find((function(e){return e.props.value===a}));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function L(e){var t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function E(e){var t=(0,h.Z)();return n.createElement(L,(0,a.Z)({key:String(t)},e))}},31989:function(e,t,r){var a=r(67294),n=r(52263);t.Z=function(e){var t=e.className,r=e.py,l=e.scala,s=e.csharp,o=e.sourceLink,i=(0,n.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+r,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+l,m="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+s;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:u},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:c},t)),a.createElement("td",null,a.createElement("strong",null,".NET API: "),a.createElement("a",{href:m},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:o},t)))))}},48117:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return y}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),s=r(74866),o=r(85162),i=r(31989),u=["components"],c=[{value:"LightGBMClassifier",id:"lightgbmclassifier",level:2},{value:"LightGBMRanker",id:"lightgbmranker",level:2},{value:"LightGBMRegressor",id:"lightgbmregressor",level:2}],m={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lightgbmclassifier"},"LightGBMClassifier"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmClassifier = (LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmClassifier = (new LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n')))),(0,l.kt)(i.Z,{className:"LightGBMClassifier",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMClassifier",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmranker"},"LightGBMRanker"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRanker = (LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(False)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRanker = (new LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(false)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRanker",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRanker",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRanker.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmregressor"},"LightGBMRegressor"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRegressor = (LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRegressor = (new LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRegressor",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRegressor",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var g=["components"],f={title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},b="LightGBM",h={unversionedId:"Quick Examples/estimators/estimators_lightgbm",id:"Quick Examples/estimators/estimators_lightgbm",title:"Estimators - LightGBM",description:"",source:"@site/docs/Quick Examples/estimators/estimators_lightgbm.md",sourceDirName:"Quick Examples/estimators",slug:"/Quick Examples/estimators/estimators_lightgbm",permalink:"/SynapseML/docs/next/Quick Examples/estimators/estimators_lightgbm",draft:!1,tags:[],version:"current",frontMatter:{title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0}},d={},y=[].concat(c),v={toc:y};function k(e){var t=e.components,r=(0,n.Z)(e,g);return(0,l.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,l.kt)(p,{mdxType:"LightGBM"}))}k.isMDXComponent=!0}}]);