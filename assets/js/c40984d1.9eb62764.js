"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7320],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(83117),a=n(67294),l=n(86010),o=n(12466),u=n(16550),s=n(91980),c=n(67392),i=n(50012);function m(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function b(e){var t,n,r,l,o=e.defaultValue,u=e.queryString,s=void 0!==u&&u,c=e.groupId,m=f(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),v=b[0],y=b[1],g=d({queryString:s,groupId:c}),h=g[0],E=g[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,i.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),k=T[0],w=T[1],O=function(){var e=null!=h?h:k;return p({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){O&&y(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),E(e),w(e)}),[E,w,m]),tabValues:m}}var v=n(72389),y="tabList__CuJ",g="tabItem_LNqP";function h(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,c=e.tabValues,i=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==u&&(m(t),s(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var l,o=i.indexOf(e.currentTarget)-1;n=null!=(l=i[o])?l:i[i.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return i.push(e)},onKeyDown:p,onClick:f},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function E(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function T(e){var t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(E,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},31989:function(e,t,n){var r=n(67294),a=n(52263);t.Z=function(e){var t=e.className,n=e.py,l=e.scala,o=e.csharp,u=e.sourceLink,s=(0,a.Z)().siteConfig.customFields.version,c="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+n,i="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+l,m="https://mmlspark.blob.core.windows.net/docs/"+s+"/dotnet/"+o;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:c},t)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:i},t)),r.createElement("td",null,r.createElement("strong",null,".NET API: "),r.createElement("a",{href:m},t)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:u},t)))))}},64356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return g}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(74866),u=n(85162),s=n(31989),c=["components"],i=[{value:"DoubleMLEstimator",id:"doublemlestimator",level:2}],m={toc:i};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"doublemlestimator"},"DoubleMLEstimator"),(0,l.kt)(o.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.causal import *\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.sql.types import StructType, StructField, DoubleType, IntegerType, BooleanType\n\nschema = StructType([\n    StructField("Treatment", BooleanType()),\n    StructField("Outcome", BooleanType()),\n    StructField("col2", DoubleType()),\n    StructField("col3", DoubleType()),\n    StructField("col4", DoubleType())\n    ])\n\n\ndf = spark.createDataFrame([\n      (False, True, 0.30, 0.66, 0.2),\n      (True, False, 0.38, 0.53, 1.5),\n      (False, True, 0.68, 0.98, 3.2),\n      (True, False, 0.15, 0.32, 6.6),\n      (False, True, 0.50, 0.65, 2.8),\n      (True, True, 0.40, 0.54, 3.7),\n      (False, True, 0.78, 0.97, 8.1),\n      (True, False, 0.12, 0.32, 10.2),\n      (False, True, 0.35, 0.63, 1.8),\n      (True, False, 0.45, 0.57, 4.3),\n      (False, True, 0.75, 0.97, 7.2),\n      (True, True, 0.16, 0.32, 11.7)], schema\n)\n\ndml = (DoubleMLEstimator()\n      .setTreatmentCol("Treatment")\n      .setTreatmentModel(LogisticRegression())\n      .setOutcomeCol("Outcome")\n      .setOutcomeModel(LogisticRegression())\n      .setMaxIter(20))\n\ndmlModel = dml.fit(df)\ndmlModel.getAvgTreatmentEffect()\ndmlModel.getConfidenceInterval()\n'))),(0,l.kt)(u.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.causal._\nimport org.apache.spark.ml.classification.LogisticRegression\n\nval df = (Seq(\n  (false, true, 0.50, 0.60, 0),\n  (true, false, 0.40, 0.50, 1),\n  (false, true, 0.78, 0.99, 2),\n  (true, false, 0.12, 0.34, 3),\n  (false, true, 0.50, 0.60, 0),\n  (true, false, 0.40, 0.50, 1),\n  (false, true, 0.78, 0.99, 2),\n  (true, false, 0.12, 0.34, 3),\n  (false, false, 0.50, 0.60, 0),\n  (true, true, 0.40, 0.50, 1),\n  (false, true, 0.78, 0.99, 2),\n  (true, false, 0.12, 0.34, 3))\n  .toDF("Treatment", "Outcome", "col2", "col3", "col4"))\n\nval dml = (new DoubleMLEstimator()\n  .setTreatmentCol("Treatment")\n  .setTreatmentModel(new LogisticRegression())\n  .setOutcomeCol("Outcome")\n  .setOutcomeModel(new LogisticRegression())\n  .setMaxIter(20))\n\nval dmlModel = dml.fit(df)\ndmlModel.getAvgTreatmentEffect\ndmlModel.getConfidenceInterval\n')))),(0,l.kt)(s.Z,{className:"DoubleMLEstimator",py:"synapse.ml.causal.html#module-synapse.ml.causal.DoubleMLEstimator",scala:"com/microsoft/azure/synapse/ml/causal/DoubleMLEstimator.html",csharp:"classSynapse_1_1ML_1_1Causal_1_1DoubleMLEstimator.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/causal/DoubleMLEstimator.scala",mdxType:"DocTable"}))}f.isMDXComponent=!0;var p=["components"],d={title:"Estimators - Causal",sidebar_label:"Causal Inference",hide_title:!0},b="Causal Inference",v={unversionedId:"Quick Examples/estimators/estimators_causal",id:"version-0.11.3/Quick Examples/estimators/estimators_causal",title:"Estimators - Causal",description:"",source:"@site/versioned_docs/version-0.11.3/Quick Examples/estimators/estimators_causal.md",sourceDirName:"Quick Examples/estimators",slug:"/Quick Examples/estimators/estimators_causal",permalink:"/SynapseML/docs/0.11.3/Quick Examples/estimators/estimators_causal",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Estimators - Causal",sidebar_label:"Causal Inference",hide_title:!0}},y={},g=[].concat(i),h={toc:g};function E(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"causal-inference"},"Causal Inference"),(0,l.kt)(f,{mdxType:"DoubleMLEstimator"}))}E.isMDXComponent=!0}}]);