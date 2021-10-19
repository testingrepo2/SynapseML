(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[259],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=s,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7749:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(4034),s=r(9973),a=(r(7294),r(3905)),o=["components"],i={title:"HttpOnSpark - Working with Arbitrary Web APIs",hide_title:!0,status:"stable",name:"HttpOnSpark - Working with Arbitrary Web APIs"},p=void 0,u={unversionedId:"features/http/HttpOnSpark - Working with Arbitrary Web APIs",id:"version-0.9.1/features/http/HttpOnSpark - Working with Arbitrary Web APIs",isDocsHomePage:!1,title:"HttpOnSpark - Working with Arbitrary Web APIs",description:'Use "dogs as a service" in a distributed fashion with HTTP on Spark',source:"@site/versioned_docs/version-0.9.1/features/http/HttpOnSpark - Working with Arbitrary Web APIs.md",sourceDirName:"features/http",slug:"/features/http/HttpOnSpark - Working with Arbitrary Web APIs",permalink:"/SynapseML/docs/features/http/HttpOnSpark - Working with Arbitrary Web APIs",tags:[],version:"0.9.1",frontMatter:{title:"HttpOnSpark - Working with Arbitrary Web APIs",hide_title:!0,status:"stable",name:"HttpOnSpark - Working with Arbitrary Web APIs"},sidebar:"version-0.9.1/docs",previous:{title:"About",permalink:"/SynapseML/docs/features/http/about"},next:{title:"About",permalink:"/SynapseML/docs/features/lightgbm/about"}},c=[{value:"Use &quot;dogs as a service&quot; in a distributed fashion with HTTP on Spark",id:"use-dogs-as-a-service-in-a-distributed-fashion-with-http-on-spark",children:[],level:3}],l={toc:c};function f(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"use-dogs-as-a-service-in-a-distributed-fashion-with-http-on-spark"},'Use "dogs as a service" in a distributed fashion with HTTP on Spark'),(0,a.kt)("p",null,"In this example we will use the simple HTTP Transformer to call a public webAPI that returns random images of dogs. The service does not use the json payload, but this is for example purposes. "),(0,a.kt)("p",null,"A call to the dog service returns json objects structured like:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'{"status":"success","message":"https:\\/\\/images.dog.ceo\\/breeds\\/lhasa\\/n02098413_2536.jpg"}')),(0,a.kt)("p",null,"If you visit the link you can download the image:"),(0,a.kt)("img",{src:"https://images.dog.ceo//breeds//lhasa//n02098413_2536.jpg"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n\nfrom pyspark.sql.functions import struct\nfrom pyspark.sql.types import *\nfrom synapse.ml.io.http import *\n\ndf = spark.createDataFrame([("foo",) for x in range(20)], ["data"]) \\\n      .withColumn("inputs", struct("data"))\n\nresponse_schema = StructType().add("status", StringType()).add("message", StringType())\n\nclient = SimpleHTTPTransformer() \\\n  .setInputCol("inputs") \\\n  .setInputParser(JSONInputParser()) \\\n  .setOutputParser(JSONOutputParser().setDataType(response_schema)) \\\n  .setOutputCol("results") \\\n  .setUrl("https://dog.ceo/api/breeds/image/random")\n\nresponses = client.transform(df)\nresponses.select("results").show(truncate = False)\n')))}f.isMDXComponent=!0}}]);