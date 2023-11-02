"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9465],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return V}});var n=a(83117),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,a,n,o,l=e.defaultValue,s=e.queryString,i=void 0!==s&&s,u=e.groupId,p=m(e),v=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),w=v[0],d=v[1],y=b({queryString:i,groupId:u}),h=y[0],g=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),V=k[0],_=k[1],T=function(){var e=null!=h?h:V;return f({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&d(T)}),[T]),{selectedValue:w,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);d(e),g(e),_(e)}),[g,_,p]),tabValues:p}}var w=a(72389),d="tabList__CuJ",y="tabItem_LNqP";function h(e){var t=e.className,a=e.block,s=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},f=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;a=null!=(o=c[l])?o:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:m},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function V(e){var t=(0,w.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},31989:function(e,t,a){var n=a(67294),r=a(52263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,l=e.csharp,s=e.sourceLink,i=(0,r.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+a,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+o,p="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+l;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,".NET API: "),n.createElement("a",{href:p},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:s},t)))))}},25947:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return y}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=a(74866),s=a(85162),i=a(31989),u=["components"],c=[{value:"VectorZipper",id:"vectorzipper",level:2},{value:"VowpalWabbitClassifier",id:"vowpalwabbitclassifier",level:2},{value:"VowpalWabbitFeaturizer",id:"vowpalwabbitfeaturizer",level:2},{value:"VowpalWabbitInteractions",id:"vowpalwabbitinteractions",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vectorzipper"},"VectorZipper"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"},{label:".NET",value:"csharp"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ndf = spark.createDataFrame([\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n], ["action1", "action2"])\n\nactionOneFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action1"])\n    .setOutputCol("sequence_one"))\n\nactionTwoFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action2"])\n    .setOutputCol("sequence_two"))\n\nseqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nvectorZipper = (VectorZipper()\n    .setInputCols(["sequence_one", "sequence_two"])\n    .setOutputCol("out"))\n\nvectorZipper.transform(seqDF).show()\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval df = (Seq(\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n    ).toDF("action1", "action2"))\n\nval actionOneFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action1"))\n    .setOutputCol("sequence_one"))\n\nval actionTwoFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action2"))\n    .setOutputCol("sequence_two"))\n\nval seqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nval vectorZipper = (new VectorZipper()\n    .setInputCols(Array("sequence_one", "sequence_two"))\n    .setOutputCol("out"))\n\nvectorZipper.transform(seqDF).show()\n'))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing Synapse.ML.Vw;\nusing Microsoft.Spark.Sql;\nusing Microsoft.Spark.Sql.Types;\n\nnamespace SynapseMLApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            SparkSession spark =\n                SparkSession\n                    .Builder()\n                    .AppName("Example")\n                    .GetOrCreate();\n\n            DataFrame df = spark.CreateDataFrame(\n                new List<GenericRow>\n                {\n                    new GenericRow(new object[] {"action1_f", "action2_f"}),\n                    new GenericRow(new object[] {"action1_f", "action2_f"}),\n                    new GenericRow(new object[] {"action1_f", "action2_f"}),\n                    new GenericRow(new object[] {"action1_f", "action2_f"})\n                },\n                new StructType(new List<StructField>\n                {\n                    new StructField("action1", new StringType()),\n                    new StructField("action2", new StringType())\n                })\n            );\n\n            var actionOneFeaturizer = new VowpalWabbitFeaturizer()\n                .SetInputCols(new string[]{"action1"})\n                .SetOutputCol("sequence_one");\n            var actionTwoFeaturizer = new VowpalWabbitFeaturizer()\n                .SetInputCols(new string[]{"action2"})\n                .SetOutputCol("sequence_two");\n            var seqDF = actionTwoFeaturizer.Transform(actionOneFeaturizer.Transform(df));\n\n            var vectorZipper = new VectorZipper()\n                .SetInputCols(new string[]{"sequence_one", "sequence_two"})\n                .SetOutputCol("out");\n            vectorZipper.Transform(seqDF).Show();\n\n            spark.Stop();\n        }\n    }\n}\n')))),(0,o.kt)(i.Z,{className:"VectorZipper",py:"synapse.ml.vw.html#module-synapse.ml.vw.VectorZipper",scala:"com/microsoft/azure/synapse/ml/vw/VectorZipper.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VectorZipper.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VectorZipper.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitclassifier"},"VowpalWabbitClassifier"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import *\n\nvw = (VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(False))\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(false))\n")))),(0,o.kt)(i.Z,{className:"VowpalWabbitClassifier",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitClassifier",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VowpalWabbitClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitfeaturizer"},"VowpalWabbitFeaturizer"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nfeaturizer = (VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(["in"])\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(False)\n      .setOutputCol("features"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval featurizer = (new VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(Array("in"))\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(false)\n      .setOutputCol("features"))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitFeaturizer",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitFeaturizer",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VowpalWabbitFeaturizer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitinteractions"},"VowpalWabbitInteractions"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ninteractions = (VowpalWabbitInteractions()\n    .setInputCols(["v1"])\n    .setOutputCol("out"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\nimport org.apache.spark.ml.linalg._\n\ncase class Data(v1: Vector, v2: Vector, v3: Vector)\n\nval df = spark.createDataFrame(Seq(Data(\n  Vectors.dense(Array(1.0, 2.0, 3.0)),\n  Vectors.sparse(8, Array(5), Array(4.0)),\n  Vectors.sparse(11, Array(8, 9), Array(7.0, 8.0))\n)))\n\nval interactions = (new VowpalWabbitInteractions()\n    .setInputCols(Array("v1"))\n    .setOutputCol("out"))\n\ninteractions.transform(df).show()\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitInteractions",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitInteractions",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VowpalWabbitInteractions.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var f=["components"],b={title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},v="Vowpal Wabbit",w={unversionedId:"Quick Examples/transformers/transformers_vw",id:"version-0.11.3/Quick Examples/transformers/transformers_vw",title:"Transformers - Vowpal Wabbit",description:"",source:"@site/versioned_docs/version-0.11.3/Quick Examples/transformers/transformers_vw.md",sourceDirName:"Quick Examples/transformers",slug:"/Quick Examples/transformers/transformers_vw",permalink:"/SynapseML/docs/0.11.3/Quick Examples/transformers/transformers_vw",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0}},d={},y=[].concat(c),h={toc:y};function g(e){var t=e.components,a=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,o.kt)(m,{mdxType:"VW"}))}g.isMDXComponent=!0}}]);