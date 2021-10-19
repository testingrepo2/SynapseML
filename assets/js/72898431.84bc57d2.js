(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5733],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3099:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"LightGBM - Overview",hide_title:!0,status:"stable",url_path:"features/lightgbm/LightGBM - Overview",name:"LightGBM - Overview"},s="LightGBM",p={unversionedId:"features/lightgbm/LightGBM - Overview",id:"features/lightgbm/LightGBM - Overview",isDocsHomePage:!1,title:"LightGBM - Overview",description:"LightGBM is an open-source,",source:"@site/docs/features/lightgbm/LightGBM - Overview.md",sourceDirName:"features/lightgbm",slug:"/features/lightgbm/LightGBM - Overview",permalink:"/SynapseML/docs/next/features/lightgbm/LightGBM - Overview",version:"current",frontMatter:{title:"LightGBM - Overview",hide_title:!0,status:"stable",url_path:"features/lightgbm/LightGBM - Overview",name:"LightGBM - Overview"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/next/features/lightgbm/about"},next:{title:"About",permalink:"/SynapseML/docs/next/features/model_interpretability/about"}},c=[{value:"Advantages of LightGBM",id:"advantages-of-lightgbm",children:[]},{value:"LightGBM Usage:",id:"lightgbm-usage",children:[]},{value:"Bankruptcy Prediction with LightGBM Classifier",id:"bankruptcy-prediction-with-lightgbm-classifier",children:[]},{value:"Quantile Regression for Drug Discovery with LightGBMRegressor",id:"quantile-regression-for-drug-discovery-with-lightgbmregressor",children:[]},{value:"LightGBM Ranker",id:"lightgbm-ranker",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM"},"LightGBM")," is an open-source,\ndistributed, high-performance gradient boosting (GBDT, GBRT, GBM, or\nMART) framework. This framework specializes in creating high-quality and\nGPU enabled decision tree algorithms for ranking, classification, and\nmany other machine learning tasks. LightGBM is part of Microsoft's\n",(0,i.kt)("a",{parentName:"p",href:"http://github.com/microsoft/dmtk"},"DMTK")," project."),(0,i.kt)("h3",{id:"advantages-of-lightgbm"},"Advantages of LightGBM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Composability"),": LightGBM models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving\nworkloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance"),": LightGBM on Spark is 10-30% faster than SparkML on\nthe Higgs dataset, and achieves a 15% increase in AUC.  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Experiments.rst#parallel-experiment"},"Parallel\nexperiments"),"\nhave verified that LightGBM can achieve a linear speed-up by using\nmultiple machines for training in specific settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Functionality"),": LightGBM offers a wide array of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Parameters.rst"},"tunable\nparameters"),",\nthat one can use to customize their decision tree system. LightGBM on\nSpark also supports new types of problems such as quantile regression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross platform")," LightGBM on Spark is available on Spark, PySpark, and SparklyR")),(0,i.kt)("h3",{id:"lightgbm-usage"},"LightGBM Usage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LightGBMClassifier: used for building classification models. For example, to predict whether a company will bankrupt or not, we could build a binary classification model with LightGBMClassifier."),(0,i.kt)("li",{parentName:"ul"},"LightGBMRegressor: used for building regression models. For example, to predict the house price, we could build a regression model with LightGBMRegressor."),(0,i.kt)("li",{parentName:"ul"},"LightGBMRanker: used for building ranking models. For example, to predict website searching result relevance, we could build a ranking model with LightGBMRanker.")),(0,i.kt)("h2",{id:"bankruptcy-prediction-with-lightgbm-classifier"},"Bankruptcy Prediction with LightGBM Classifier"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/bankruptcy image.png",width:"800"}),(0,i.kt)("p",null,"In this example, we use LightGBM to build a classification model in order to predict bankruptcy."),(0,i.kt)("h4",{id:"read-dataset"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.format("csv")\\\n  .option("header", True)\\\n  .option("inferSchema", True)\\\n  .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/company_bankruptcy_prediction_data.csv")\n# print dataset size\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,i.kt)("h4",{id:"split-the-dataset-into-train-and-test"},"Split the dataset into train and test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = df.randomSplit([0.85, 0.15], seed=1)\n")),(0,i.kt)("h4",{id:"add-featurizer-to-convert-features-to-vector"},"Add featurizer to convert features to vector"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml.feature import VectorAssembler\nfeature_cols = df.columns[1:]\nfeaturizer = VectorAssembler(\n    inputCols=feature_cols,\n    outputCol='features'\n)\ntrain_data = featurizer.transform(train)['Bankrupt?', 'features']\ntest_data = featurizer.transform(test)['Bankrupt?', 'features']\n")),(0,i.kt)("h4",{id:"check-if-the-data-is-unbalanced"},"Check if the data is unbalanced"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'display(train_data.groupBy("Bankrupt?").count())\n')),(0,i.kt)("h4",{id:"model-training"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMClassifier\n\nmodel = LightGBMClassifier(objective="binary", featuresCol="features", labelCol="Bankrupt?", isUnbalance=True)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"model = model.fit(train_data)\n")),(0,i.kt)("p",null,'By calling "saveNativeModel", it allows you to extract the underlying lightGBM model for fast deployment after you train on Spark.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMClassificationModel\n\n\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n\n    model.saveNativeModel("/models/lgbmclassifier.model")\n\n    model = LightGBMClassificationModel.loadNativeModelFromFile("/models/lgbmclassifier.model")\n\nelse:\n\n    model.saveNativeModel("/lgbmclassifier.model")\n\n    model = LightGBMClassificationModel.loadNativeModelFromFile("/lgbmclassifier.model")\n\n\n')),(0,i.kt)("h4",{id:"feature-importances-visualization"},"Feature Importances Visualization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport matplotlib.pyplot as plt\n\nfeature_importances = model.getFeatureImportances()\nfi = pd.Series(feature_importances,index = feature_cols)\nfi = fi.sort_values(ascending = True)\nf_index = fi.index\nf_values = fi.values\n \n# print feature importances \nprint ('f_index:',f_index)\nprint ('f_values:',f_values)\n\n# plot\nx_index = list(range(len(fi)))\nx_index = [x/len(fi) for x in x_index]\nplt.rcParams['figure.figsize'] = (20,20)\nplt.barh(x_index,f_values,height = 0.028 ,align=\"center\",color = 'tan',tick_label=f_index)\nplt.xlabel('importances')\nplt.ylabel('features')\nplt.show()\n")),(0,i.kt)("h4",{id:"model-prediction"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"predictions = model.transform(test_data)\npredictions.limit(10).toPandas()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics(evaluationMetric=\"classification\", labelCol='Bankrupt?', scoredLabelsCol='prediction').transform(predictions)\ndisplay(metrics)\n")),(0,i.kt)("h2",{id:"quantile-regression-for-drug-discovery-with-lightgbmregressor"},"Quantile Regression for Drug Discovery with LightGBMRegressor"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/drug.png",width:"800"}),(0,i.kt)("p",null,"In this example, we show how to use LightGBM to build a simple regression model."),(0,i.kt)("h4",{id:"read-dataset-1"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'triazines = spark.read.format("libsvm")\\\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/triazines.scale.svmlight")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print some basic info\nprint("records read: " + str(triazines.count()))\nprint("Schema: ")\ntriazines.printSchema()\ndisplay(triazines.limit(10))\n')),(0,i.kt)("h4",{id:"split-dataset-into-train-and-test"},"Split dataset into train and test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = triazines.randomSplit([0.85, 0.15], seed=1)\n")),(0,i.kt)("h4",{id:"model-training-1"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.lightgbm import LightGBMRegressor\nmodel = LightGBMRegressor(objective='quantile',\n                          alpha=0.2,\n                          learningRate=0.3,\n                          numLeaves=31).fit(train)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(model.getFeatureImportances())\n")),(0,i.kt)("h4",{id:"model-prediction-1"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"scoredData = model.transform(test)\ndisplay(scoredData)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics(evaluationMetric='regression',\n                                 labelCol='label',\n                                 scoresCol='prediction') \\\n            .transform(scoredData)\ndisplay(metrics)\n")),(0,i.kt)("h2",{id:"lightgbm-ranker"},"LightGBM Ranker"),(0,i.kt)("h4",{id:"read-dataset-2"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.format("parquet").load("wasbs://publicwasb@mmlspark.blob.core.windows.net/lightGBMRanker_train.parquet")\n# print some basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\ndisplay(df.limit(10))\n')),(0,i.kt)("h4",{id:"model-training-2"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.lightgbm import LightGBMRanker\n\nfeatures_col = 'features'\nquery_col = 'query'\nlabel_col = 'labels'\nlgbm_ranker = LightGBMRanker(labelCol=label_col,\n                             featuresCol=features_col,\n                             groupCol=query_col,\n                             predictionCol='preds',\n                             leafPredictionCol='leafPreds',\n                             featuresShapCol='importances',\n                             repartitionByGroupingColumn=True,\n                             numLeaves=32,\n                             numIterations=200,\n                             evalAt=[1,3,5],\n                             metric='ndcg')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"lgbm_ranker_model = lgbm_ranker.fit(df)\n")),(0,i.kt)("h4",{id:"model-prediction-2"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'dt = spark.read.format("parquet").load("wasbs://publicwasb@mmlspark.blob.core.windows.net/lightGBMRanker_test.parquet")\npredictions = lgbm_ranker_model.transform(dt)\npredictions.limit(10).toPandas()\n')))}m.isMDXComponent=!0}}]);