(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4830],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},445:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(4034),a=r(9973),i=(r(7294),r(3905)),s=["components"],o={title:"SparkServing - Deploying a Classifier",hide_title:!0,status:"stable",name:"SparkServing - Deploying a Classifier"},p=void 0,l={unversionedId:"features/spark_serving/SparkServing - Deploying a Classifier",id:"version-0.9.1/features/spark_serving/SparkServing - Deploying a Classifier",isDocsHomePage:!1,title:"SparkServing - Deploying a Classifier",description:"Model Deployment with Spark Serving",source:"@site/versioned_docs/version-0.9.1/features/spark_serving/SparkServing - Deploying a Classifier.md",sourceDirName:"features/spark_serving",slug:"/features/spark_serving/SparkServing - Deploying a Classifier",permalink:"/SynapseML/docs/features/spark_serving/SparkServing - Deploying a Classifier",tags:[],version:"0.9.1",frontMatter:{title:"SparkServing - Deploying a Classifier",hide_title:!0,status:"stable",name:"SparkServing - Deploying a Classifier"},sidebar:"version-0.9.1/docs",previous:{title:"About",permalink:"/SynapseML/docs/features/spark_serving/about"},next:{title:"About",permalink:"/SynapseML/docs/features/vw/about"}},u=[{value:"Model Deployment with Spark Serving",id:"model-deployment-with-spark-serving",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"model-deployment-with-spark-serving"},"Model Deployment with Spark Serving"),(0,i.kt)("p",null,"In this example, we try to predict incomes from the ",(0,i.kt)("em",{parentName:"p"},"Adult Census")," dataset. Then we will use Spark serving to deploy it as a realtime web service.\nFirst, we import needed packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nimport numpy as np\nimport pandas as pd\n\n")),(0,i.kt)("p",null,"Now let's read the data and split it to train and test sets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ntrain.limit(10).toPandas()\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TrainClassifier")," can be used to initialize and fit a model, it wraps SparkML classifiers.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"help(synapse.ml.TrainClassifier)")," to view the different parameters."),(0,i.kt)("p",null,"Note that it implicitly converts the data into the format expected by the algorithm. More specifically it:\ntokenizes, hashes strings, one-hot encodes categorical variables, assembles the features into a vector\netc.  The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"numFeatures")," controls the number of hashed features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import LogisticRegression\nmodel = TrainClassifier(model=LogisticRegression(), labelCol="income", numFeatures=256).fit(train)\n')),(0,i.kt)("p",null,"After the model is trained, we score it against the test dataset and view metrics."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics, TrainedClassifierModel\nprediction = model.transform(test)\nprediction.printSchema()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"metrics = ComputeModelStatistics().transform(prediction)\nmetrics.limit(10).toPandas()\n")),(0,i.kt)("p",null,"First, we will define the webservice input/output.\nFor more information, you can visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/SynapseML/blob/master/docs/mmlspark-serving.md"},"documentation for Spark Serving")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.types import *\nfrom synapse.ml.io import *\nimport uuid\n\nserving_inputs = spark.readStream.server() \\\n    .address("localhost", 8898, "my_api") \\\n    .option("name", "my_api") \\\n    .load() \\\n    .parseRequest("my_api", test.schema)\n\nserving_outputs = model.transform(serving_inputs) \\\n  .makeReply("scored_labels")\n\nserver = serving_outputs.writeStream \\\n    .server() \\\n    .replyTo("my_api") \\\n    .queryName("my_query") \\\n    .option("checkpointLocation", "file:///tmp/checkpoints-{}".format(uuid.uuid1())) \\\n    .start()\n\n')),(0,i.kt)("p",null,"Test the webservice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import requests\ndata = u\'{"education":" 10th","marital-status":"Divorced","hours-per-week":40.0}\'\nr = requests.post(data=data, url="http://localhost:8898/my_api")\nprint("Response {}".format(r.text))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import requests\ndata = u\'{"education":" Masters","marital-status":"Married-civ-spouse","hours-per-week":40.0}\'\nr = requests.post(data=data, url="http://localhost:8898/my_api")\nprint("Response {}".format(r.text))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\ntime.sleep(20) # wait for server to finish setting up (just to be safe)\nserver.stop()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"")))}m.isMDXComponent=!0}}]);