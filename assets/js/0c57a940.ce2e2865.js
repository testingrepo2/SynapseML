(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5429,8846],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1332:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5386:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),a=t(8578);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),i="tabItem_2kG2",l="tabItemActive_3NDg";var c=37,m=39;var u=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,u=e.values,p=e.groupId,d=e.className,f=o(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,r.useState)(a),y=b[0],h=b[1],k=r.Children.toArray(e.children),T=[];if(null!=p){var w=v[p];null!=w&&w!==y&&u.some((function(e){return e.value===w}))&&h(w)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),r=u[t].value;h(r),null!=p&&(g(p,r),setTimeout((function(){var e,t,r,a,o,s,i,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,t>=0&&o<=c&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case m:var r=T.indexOf(e.target)+1;t=T[r]||T[0];break;case c:var a=T.indexOf(e.target)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},t)}))),n?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},8578:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},1989:function(e,n,t){"use strict";var r=t(7294),a=t(2263);n.Z=function(e){var n=e.className,t=e.py,o=e.scala,s=e.sourceLink,i=(0,a.Z)().siteConfig.customFields.version,l="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+t,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+o;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:l},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:c},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:s},n)))))}},9831:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),s=t(5386),i=t(1332),l=t(1989),c=["components"],m={},u=void 0,p={unversionedId:"documentation/transformers/_OpenCV",id:"version-0.9.1/documentation/transformers/_OpenCV",isDocsHomePage:!1,title:"_OpenCV",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/_OpenCV.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/_OpenCV",permalink:"/SynapseML/docs/documentation/transformers/_OpenCV",version:"0.9.1",frontMatter:{}},d=[{value:"ImageTransformer",id:"imagetransformer",children:[]},{value:"ImageSetAugmenter",id:"imagesetaugmenter",children:[]}],f={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"imagetransformer"},"ImageTransformer"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import *\nfrom pyspark.sql.types import FloatType\n\n# images = (spark.read.format("image")\n#         .option("dropInvalid", True)\n#         .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nit = (ImageTransformer(inputCol="image", outputCol="features")\n    .resize(224, True)\n    .centerCrop(height=224, width=224)\n    .normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225], color_scale_factor = 1/255)\n    .setTensorElementType(FloatType()))\n\n# display(it.transform(images))\n'))),(0,o.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.opencv._\n\nval images = (spark.read.format("image")\n    .option("dropInvalid", true)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nval it = (new ImageTransformer()\n      .setOutputCol("out")\n      .resize(height = 15, width = 10))\n\ndisplay(it.transform(images))\n')))),(0,o.kt)(l.Z,{className:"ImageTransformer",py:"mmlspark.opencv.html#module-mmlspark.opencv.ImageTransformer",scala:"com/microsoft/azure/synapse/ml/opencv/ImageTransformer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/opencv/src/main/scala/com/microsoft/azure/synapse/ml/opencv/ImageTransformer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"imagesetaugmenter"},"ImageSetAugmenter"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import *\n\n# images = (spark.read.format("image")\n#         .option("dropInvalid", True)\n#         .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nisa = (ImageSetAugmenter()\n    .setInputCol("image")\n    .setOutputCol("augmented")\n    .setFlipLeftRight(True)\n    .setFlipUpDown(True))\n\n# display(it.transform(images))\n'))),(0,o.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.opencv._\n\nval images = (spark.read.format("image")\n    .option("dropInvalid", true)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nval isa = (new ImageSetAugmenter()\n    .setInputCol("image")\n    .setOutputCol("augmented")\n    .setFlipLeftRight(true)\n    .setFlipUpDown(true))\n\ndisplay(isa.transform(images))\n')))),(0,o.kt)(l.Z,{className:"ImageSetAugmenter",py:"mmlspark.opencv.html#module-mmlspark.opencv.ImageSetAugmenter",scala:"com/microsoft/azure/synapse/ml/opencv/ImageSetAugmenter.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/opencv/src/main/scala/com/microsoft/azure/synapse/ml/opencv/ImageSetAugmenter.scala",mdxType:"DocTable"}))}v.isMDXComponent=!0},1083:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),s=t(9831),i=["components"],l={title:"Transformers - OpenCV",sidebar_label:"OpenCV",hide_title:!0},c="OpenCV",m={unversionedId:"documentation/transformers/transformers_opencv",id:"version-0.9.1/documentation/transformers/transformers_opencv",isDocsHomePage:!1,title:"Transformers - OpenCV",description:"export const toc = [...OpenCVTOC]",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/transformers_opencv.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_opencv",permalink:"/SynapseML/docs/documentation/transformers/transformers_opencv",version:"0.9.1",frontMatter:{title:"Transformers - OpenCV",sidebar_label:"OpenCV",hide_title:!0},sidebar:"version-0.9.1/docs",previous:{title:"Core",permalink:"/SynapseML/docs/documentation/transformers/transformers_core"},next:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/documentation/transformers/transformers_vw"}},u=[].concat(s.toc),p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opencv"},"OpenCV"),(0,o.kt)(s.default,{mdxType:"OpenCV"}))}d.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);