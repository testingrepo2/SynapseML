(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4319],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7315:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i=["components"],s={title:"TextAnalytics - Amazon Book Reviews with Word2Vec",hide_title:!0,status:"stable",name:"TextAnalytics - Amazon Book Reviews with Word2Vec"},l=void 0,p={unversionedId:"examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec",id:"version-0.9.1/examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec",isDocsHomePage:!1,title:"TextAnalytics - Amazon Book Reviews with Word2Vec",description:"TextAnalytics - Amazon Book Reviews with Word2Vec",source:"@site/versioned_docs/version-0.9.1/examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec.md",sourceDirName:"examples/text_analytics",slug:"/examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec",permalink:"/SynapseML/docs/examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec",tags:[],version:"0.9.1",frontMatter:{title:"TextAnalytics - Amazon Book Reviews with Word2Vec",hide_title:!0,status:"stable",name:"TextAnalytics - Amazon Book Reviews with Word2Vec"},sidebar:"version-0.9.1/docs",previous:{title:"Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",permalink:"/SynapseML/docs/examples/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor"},next:{title:"TextAnalytics - Amazon Book Reviews",permalink:"/SynapseML/docs/examples/text_analytics/TextAnalytics - Amazon Book Reviews"}},c=[{value:"TextAnalytics - Amazon Book Reviews with Word2Vec",id:"textanalytics---amazon-book-reviews-with-word2vec",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"textanalytics---amazon-book-reviews-with-word2vec"},"TextAnalytics - Amazon Book Reviews with Word2Vec"),(0,o.kt)("p",null,"Yet again, now using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Word2Vec")," Estimator from Spark.  We can use the tree-based\nlearners from spark in this scenario due to the lower dimensionality representation of\nfeatures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet")\ndata.limit(10).toPandas()\n')),(0,o.kt)("p",null,"Modify the label column to predict a rating greater than 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'processedData = data.withColumn("label", data["rating"] > 3) \\\n                    .select(["text", "label"])\nprocessedData.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Split the dataset into train, test and validation sets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"train, test, validation = processedData.randomSplit([0.60, 0.20, 0.20])\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Tokenizer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Word2Vec")," to generate the features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml import Pipeline\nfrom pyspark.ml.feature import Tokenizer, Word2Vec\ntokenizer = Tokenizer(inputCol="text", outputCol="words")\npartitions = train.rdd.getNumPartitions()\nword2vec = Word2Vec(maxIter=4, seed=42, inputCol="words", outputCol="features",\n                    numPartitions=partitions)\ntextFeaturizer = Pipeline(stages = [tokenizer, word2vec]).fit(train)\n')),(0,o.kt)("p",null,"Transform each of the train, test and validation datasets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ptrain = textFeaturizer.transform(train).select(["label", "features"])\nptest = textFeaturizer.transform(test).select(["label", "features"])\npvalidation = textFeaturizer.transform(validation).select(["label", "features"])\nptrain.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Generate several models with different parameters from the training data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.classification import LogisticRegression, RandomForestClassifier, GBTClassifier\n\nfrom synapse.ml.train import TrainClassifier\n\nimport itertools\n\n\n\nlrHyperParams       = [0.05, 0.2]\n\nlogisticRegressions = [LogisticRegression(regParam = hyperParam)\n\n                       for hyperParam in lrHyperParams]\n\nlrmodels            = [TrainClassifier(model=lrm, labelCol="label").fit(ptrain)\n\n                       for lrm in logisticRegressions]\n\n\n\nrfHyperParams       = itertools.product([5, 10], [2, 3])\n\nrandomForests       = [RandomForestClassifier(numTrees=hyperParam[0], maxDepth=hyperParam[1])\n\n                       for hyperParam in rfHyperParams]\n\nrfmodels            = [TrainClassifier(model=rfm, labelCol="label").fit(ptrain)\n\n                       for rfm in randomForests]\n\n\n\ngbtHyperParams      = itertools.product([8, 16], [2, 3])\n\ngbtclassifiers      = [GBTClassifier(maxBins=hyperParam[0], maxDepth=hyperParam[1])\n\n                       for hyperParam in gbtHyperParams]\n\ngbtmodels           = [TrainClassifier(model=gbt, labelCol="label").fit(ptrain)\n\n                       for gbt in gbtclassifiers]\n\n\n\ntrainedModels       = lrmodels + rfmodels + gbtmodels\n')),(0,o.kt)("p",null,"Find the best model for the given test dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import FindBestModel\n\nbestModel = FindBestModel(evaluationMetric="AUC", models=trainedModels).fit(ptest)\n\nbestModel.getRocCurve().show()\n\nbestModel.getBestModelMetrics().show()\n\nbestModel.getAllModelMetrics().show()\n')),(0,o.kt)("p",null,"Get the accuracy from the validation dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\npredictions = bestModel.transform(pvalidation)\n\nmetrics = ComputeModelStatistics().transform(predictions)\n\nprint("Best model\'s accuracy on validation set = "\n\n      + "{0:.2f}%".format(metrics.first()["accuracy"] * 100))\n\nprint("Best model\'s AUC on validation set = "\n\n      + "{0:.2f}%".format(metrics.first()["AUC"] * 100))\n')))}d.isMDXComponent=!0}}]);