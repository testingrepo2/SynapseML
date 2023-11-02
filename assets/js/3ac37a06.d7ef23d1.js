"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1103],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),a=t(86010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(83117),a=t(67294),l=t(86010),o=t(12466),u=t(16550),c=t(91980),i=t(67392),s=t(50012);function p(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function d(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,u.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function b(e){var n,t,r,l,o=e.defaultValue,u=e.queryString,c=void 0!==u&&u,i=e.groupId,p=m(e),b=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=b[0],y=b[1],h=d({queryString:c,groupId:i}),g=h[0],E=h[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),t=(0,s.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),O=k[0],_=k[1],w=function(){var e=null!=g?g:O;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){w&&y(w)}),[w]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),E(e),_(e)}),[E,_,p]),tabValues:p}}var v=t(72389),y="tabList__CuJ",h="tabItem_LNqP";function g(e){var n=e.className,t=e.block,u=e.selectedValue,c=e.selectValue,i=e.tabValues,s=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==u&&(p(n),c(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;t=null!=(l=s[o])?l:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return s.push(e)},onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function E(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function k(e){var n=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(E,(0,r.Z)({},e,n)))}function O(e){var n=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},31989:function(e,n,t){var r=t(67294),a=t(52263);n.Z=function(e){var n=e.className,t=e.py,l=e.scala,o=e.csharp,u=e.sourceLink,c=(0,a.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+c+"/pyspark/"+t,s="https://mmlspark.blob.core.windows.net/docs/"+c+"/scala/"+l,p="https://mmlspark.blob.core.windows.net/docs/"+c+"/dotnet/"+o;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:i},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:s},n)),r.createElement("td",null,r.createElement("strong",null,".NET API: "),r.createElement("a",{href:p},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:u},n)))))}},98105:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return h}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),o=t(74866),u=t(85162),c=t(31989),i=["components"],s=[{value:"ONNXModel",id:"onnxmodel",level:2}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,l.kt)(o.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"}))\n'))),(0,l.kt)(u.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = (new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability")))\n')))),(0,l.kt)(c.Z,{className:"ONNXModel",py:"synapse.ml.onnx.html#module-synapse.ml.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",csharp:"classSynapse_1_1ML_1_1Onnx_1_1ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var f=["components"],d={title:"Deep Learning",sidebar_label:"Deep Learning"},b=void 0,v={unversionedId:"Quick Examples/transformers/transformers_deep_learning",id:"version-0.11.4/Quick Examples/transformers/transformers_deep_learning",title:"Deep Learning",description:"",source:"@site/versioned_docs/version-0.11.4/Quick Examples/transformers/transformers_deep_learning.md",sourceDirName:"Quick Examples/transformers",slug:"/Quick Examples/transformers/transformers_deep_learning",permalink:"/SynapseML/docs/0.11.4/Quick Examples/transformers/transformers_deep_learning",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning"}},y={},h=[].concat(s),g={toc:h};function E(e){var n=e.components,t=(0,a.Z)(e,f);return(0,l.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(m,{mdxType:"ONNXModel"}))}E.isMDXComponent=!0}}]);