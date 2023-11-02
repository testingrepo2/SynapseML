"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"Quickstart - Vowpal Wabbit on Tabular Data",hide_title:!0,status:"stable"},l="Classification - Adult Census using Vowpal Wabbit in SynapseML",p={unversionedId:"Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",id:"version-1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",title:"Quickstart - Vowpal Wabbit on Tabular Data",description:"In this example, we predict incomes from the Adult Census dataset using Vowpal Wabbit (VW) classifier in SynapseML.",source:"@site/versioned_docs/version-1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data.md",sourceDirName:"Explore Algorithms/Classification",slug:"/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",permalink:"/SynapseML/docs/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:"Quickstart - Vowpal Wabbit on Tabular Data",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - SparkML vs SynapseML",permalink:"/SynapseML/docs/Explore Algorithms/Classification/Quickstart - SparkML vs SynapseML"},next:{title:"Quickstart - Vowpal Wabbit on Text Data",permalink:"/SynapseML/docs/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classification---adult-census-using-vowpal-wabbit-in-synapseml"},"Classification - Adult Census using Vowpal Wabbit in SynapseML"),(0,r.kt)("p",null,"In this example, we predict incomes from the ",(0,r.kt)("em",{parentName:"p"},"Adult Census")," dataset using Vowpal Wabbit (VW) classifier in SynapseML.\nFirst, we read the data and split it into train and test sets as in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/SynapseML/blob/master/notebooks/Classification%20-%20Adult%20Census.ipynb"},"example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n)\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ntrain.limit(10).toPandas()\n')),(0,r.kt)("p",null,"Next, we define a pipeline that includes feature engineering and training of a VW classifier. We use a featurizer provided by VW that hashes the feature names.\nNote that VW expects classification labels being -1 or 1. Thus, the income category is mapped to this space before feeding training data into the pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import when, col\nfrom pyspark.ml import Pipeline\nfrom synapse.ml.vw import VowpalWabbitFeaturizer, VowpalWabbitClassifier\n\n# Define classification label\ntrain = (\n    train.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0))\n    .repartition(1)\n    .cache()\n)\nprint(train.count())\n\n# Specify featurizer\nvw_featurizer = VowpalWabbitFeaturizer(\n    inputCols=["education", "marital-status", "hours-per-week"], outputCol="features"\n)\n\n# Define VW classification model\nargs = "--loss_function=logistic --quiet --holdout_off"\nvw_model = VowpalWabbitClassifier(\n    featuresCol="features", labelCol="label", passThroughArgs=args, numPasses=10\n)\n\n# Create a pipeline\nvw_pipeline = Pipeline(stages=[vw_featurizer, vw_model])\n')),(0,r.kt)("p",null,"Then, we are ready to train the model by fitting the pipeline with the training data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Train the model\nvw_trained = vw_pipeline.fit(train)\n")),(0,r.kt)("p",null,"After the model is trained, we apply it to predict the income of each sample in the test set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Making predictions\ntest = test.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0))\nprediction = vw_trained.transform(test)\nprediction.limit(10).toPandas()\n')),(0,r.kt)("p",null,"Finally, we evaluate the model performance using ",(0,r.kt)("inlineCode",{parentName:"p"},"ComputeModelStatistics")," function which will compute confusion matrix, accuracy, precision, recall, and AUC by default for classification models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics(\n    evaluationMetric="classification", labelCol="label", scoredLabelsCol="prediction"\n).transform(prediction)\nmetrics.toPandas()\n')))}f.isMDXComponent=!0}}]);