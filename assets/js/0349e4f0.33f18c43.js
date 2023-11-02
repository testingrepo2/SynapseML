"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8524],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),i=["components"],o={title:"Advanced Usage - Async, Batching, and Multi-Key",hide_title:!0,status:"stable"},l="AI Services Advanced Guide: Asynchrony, Batching, Multi-Key",c={unversionedId:"Explore Algorithms/AI Services/Advanced Usage - Async, Batching, and Multi-Key",id:"Explore Algorithms/AI Services/Advanced Usage - Async, Batching, and Multi-Key",title:"Advanced Usage - Async, Batching, and Multi-Key",description:"Step 1: Imports and Keys",source:"@site/docs/Explore Algorithms/AI Services/Advanced Usage - Async, Batching, and Multi-Key.md",sourceDirName:"Explore Algorithms/AI Services",slug:"/Explore Algorithms/AI Services/Advanced Usage - Async, Batching, and Multi-Key",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Advanced Usage - Async, Batching, and Multi-Key",draft:!1,tags:[],version:"current",frontMatter:{title:"Advanced Usage - Async, Batching, and Multi-Key",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Multivariate Anomaly Detection",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Multivariate Anomaly Detection"},next:{title:"Quickstart - Analyze Celebrity Quotes",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Quickstart - Analyze Celebrity Quotes"}},p={},u=[{value:"Step 1: Imports and Keys",id:"step-1-imports-and-keys",level:2},{value:"Step 2: Basic Usage",id:"step-2-basic-usage",level:2},{value:"First we&#39;ll look at the full response objects:",id:"first-well-look-at-the-full-response-objects",level:4},{value:"We can select out just what we need:",id:"we-can-select-out-just-what-we-need",level:4},{value:"What&#39;s going on under the hood",id:"whats-going-on-under-the-hood",level:4},{value:"Step 3: Asynchronous Usage",id:"step-3-asynchronous-usage",level:2},{value:"Faster without extra hardware:",id:"faster-without-extra-hardware",level:4},{value:"Step 4: Batching",id:"step-4-batching",level:2},{value:"Step 5: Multi-Key",id:"step-5-multi-key",level:2},{value:"Learn More",id:"learn-more",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ai-services-advanced-guide-asynchrony-batching-multi-key"},"AI Services Advanced Guide: Asynchrony, Batching, Multi-Key"),(0,s.kt)("h2",{id:"step-1-imports-and-keys"},"Step 1: Imports and Keys"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'from synapse.ml.core.platform import find_secret\n\nservice_key = find_secret(\n    secret_name="ai-services-api-key", keyvault="mmlspark-build-keys"\n)\nservice_loc = "eastus"\n')),(0,s.kt)("h2",{id:"step-2-basic-usage"},"Step 2: Basic Usage"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Image 1"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Image 2"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Image 3"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"!",(0,s.kt)("img",{src:"https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/objects.jpg",width:"300"})),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("img",{src:"https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/dog.jpg",width:"300"})),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("img",{src:"https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/house.jpg",width:"300"}))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'from synapse.ml.services.vision import AnalyzeImage\n\n# Create a dataframe with the image URLs\nbase_url = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/"\nimage_df = spark.createDataFrame(\n    [(base_url + "objects.jpg",), (base_url + "dog.jpg",), (base_url + "house.jpg",)],\n    ["image"],\n)\n\n# Run the Computer Vision service. Analyze Image extracts infortmation from/about the images.\nanalyzer = (\n    AnalyzeImage()\n    .setLocation(service_loc)\n    .setSubscriptionKey(service_key)\n    .setVisualFeatures(\n        ["Categories", "Color", "Description", "Faces", "Objects", "Tags"]\n    )\n    .setOutputCol("analysis_results")\n    .setImageUrlCol("image")\n    .setErrorCol("error")\n)\n\nimage_results = analyzer.transform(image_df).cache()\n')),(0,s.kt)("h4",{id:"first-well-look-at-the-full-response-objects"},"First we'll look at the full response objects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"display(image_results)\n")),(0,s.kt)("h4",{id:"we-can-select-out-just-what-we-need"},"We can select out just what we need:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'display(image_results.select("analysis_results.description.captions.text"))\n')),(0,s.kt)("h4",{id:"whats-going-on-under-the-hood"},"What's going on under the hood"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/cog_service.svg",width:"300"}),(0,s.kt)("p",null,"When we call the AI service transformer, we start cognitive service clients on each of your spark workers.\nThese clients send requests to the cloud, and turn the JSON responses into Spark Struct Types so that you can access any field that the service returns."),(0,s.kt)("h2",{id:"step-3-asynchronous-usage"},"Step 3: Asynchronous Usage"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/async_parallelism.svg",width:"700"}),(0,s.kt)("p",null,"Apache Spark ordinarily parallelizes a computation to all of it's worker threads. When working with services however this parallelism doesent fully maximize throughput because workers sit idle as requests are processed on the server. The ",(0,s.kt)("inlineCode",{parentName:"p"},"concurrency")," parameter makes sure that each worker can stay busy as they wait for requests to complete."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"display(analyzer.setConcurrency(3).transform(image_df))\n")),(0,s.kt)("h4",{id:"faster-without-extra-hardware"},"Faster without extra hardware:"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/async_relative%20(2).png",width:"500"}),(0,s.kt)("h2",{id:"step-4-batching"},"Step 4: Batching"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'from synapse.ml.services.text import TextSentiment\n\n# Create a dataframe\ntext_df = spark.createDataFrame(\n    [\n        ("I am so happy today, its sunny!",),\n        ("I am frustrated by this rush hour traffic",),\n        ("The AI services on spark is pretty lit",),\n    ],\n    ["text"],\n)\n\nsentiment = (\n    TextSentiment()\n    .setTextCol("text")\n    .setLocation(service_loc)\n    .setSubscriptionKey(service_key)\n    .setOutputCol("sentiment")\n    .setErrorCol("error")\n    .setBatchSize(10)\n)\n\n# Show the results of your text query\ndisplay(sentiment.transform(text_df).select("text", "sentiment.document.sentiment"))\n')),(0,s.kt)("h2",{id:"step-5-multi-key"},"Step 5: Multi-Key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'from synapse.ml.services.text import TextSentiment\nfrom pyspark.sql.functions import udf\nimport random\n\nservice_key_2 = find_secret(\n    secret_name="ai-services-api-key-2", keyvault="mmlspark-build-keys"\n)\nkeys = [service_key, service_key_2]\n\n\n@udf\ndef random_key():\n    return keys[random.randint(0, len(keys) - 1)]\n\n\nimage_df2 = image_df.withColumn("key", random_key())\n\nresults = analyzer.setSubscriptionKeyCol("key").transform(image_df2)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'display(results.select("key", "analysis_results.description.captions.text"))\n')),(0,s.kt)("h2",{id:"learn-more"},"Learn More"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../Overview"},"Explore other cogntive services")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2009.08044"},'Read our paper "Large-Scale Intelligent Microservices"'))))}d.isMDXComponent=!0}}]);