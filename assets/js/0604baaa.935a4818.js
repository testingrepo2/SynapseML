(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5484],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||s;return t?n.createElement(g,i(i({ref:r},m),{},{components:t})):n.createElement(g,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7939:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=t(4034),a=t(9973),s=(t(7294),t(3905)),i=["components"],o={title:"HyperParameterTuning - Fighting Breast Cancer",hide_title:!0,status:"stable"},p=void 0,l={unversionedId:"examples/HyperParameterTuning - Fighting Breast Cancer",id:"examples/HyperParameterTuning - Fighting Breast Cancer",isDocsHomePage:!1,title:"HyperParameterTuning - Fighting Breast Cancer",description:"HyperParameterTuning - Fighting Breast Cancer",source:"@site/docs/examples/HyperParameterTuning - Fighting Breast Cancer.md",sourceDirName:"examples",slug:"/examples/HyperParameterTuning - Fighting Breast Cancer",permalink:"/SynapseML/docs/next/examples/HyperParameterTuning - Fighting Breast Cancer",tags:[],version:"current",frontMatter:{title:"HyperParameterTuning - Fighting Breast Cancer",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CyberML - Anomalous Access Detection",permalink:"/SynapseML/docs/next/examples/CyberML - Anomalous Access Detection"},next:{title:"OpenCV - Pipeline Image Transformations",permalink:"/SynapseML/docs/next/examples/OpenCV - Pipeline Image Transformations"}},m=[{value:"HyperParameterTuning - Fighting Breast Cancer",id:"hyperparametertuning---fighting-breast-cancer",children:[],level:2}],c={toc:m};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"hyperparametertuning---fighting-breast-cancer"},"HyperParameterTuning - Fighting Breast Cancer"),(0,s.kt)("p",null,"We can do distributed randomized grid search hyperparameter tuning with SynapseML."),(0,s.kt)("p",null,"First, we import the packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n")),(0,s.kt)("p",null,"Now let's read the data and split it to tuning and test sets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/BreastCancer.parquet")\ntune, test = data.randomSplit([0.80, 0.20])\ntune.limit(10).toPandas()\n')),(0,s.kt)("p",null,"Next, define the models that wil be tuned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import TuneHyperparameters\nfrom synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import LogisticRegression, RandomForestClassifier, GBTClassifier\nlogReg = LogisticRegression()\nrandForest = RandomForestClassifier()\ngbt = GBTClassifier()\nsmlmodels = [logReg, randForest, gbt]\nmmlmodels = [TrainClassifier(model=model, labelCol="Label") for model in smlmodels]\n')),(0,s.kt)("p",null,"We can specify the hyperparameters using the HyperparamBuilder.\nWe can add either DiscreteHyperParam or RangeHyperParam hyperparameters.\nTuneHyperparameters will randomly choose values from a uniform distribution."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.automl import *\n\nparamBuilder = \\\n  HyperparamBuilder() \\\n    .addHyperparam(logReg, logReg.regParam, RangeHyperParam(0.1, 0.3)) \\\n    .addHyperparam(randForest, randForest.numTrees, DiscreteHyperParam([5,10])) \\\n    .addHyperparam(randForest, randForest.maxDepth, DiscreteHyperParam([3,5])) \\\n    .addHyperparam(gbt, gbt.maxBins, RangeHyperParam(8,16)) \\\n    .addHyperparam(gbt, gbt.maxDepth, DiscreteHyperParam([3,5]))\nsearchSpace = paramBuilder.build()\n# The search space is a list of params to tuples of estimator and hyperparam\nprint(searchSpace)\nrandomSpace = RandomSpace(searchSpace)\n")),(0,s.kt)("p",null,"Next, run TuneHyperparameters to get the best model."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'bestModel = TuneHyperparameters(\n              evaluationMetric="accuracy", models=mmlmodels, numFolds=2,\n              numRuns=len(mmlmodels) * 2, parallelism=1,\n              paramSpace=randomSpace.space(), seed=0).fit(tune)\n')),(0,s.kt)("p",null,"We can view the best model's parameters and retrieve the underlying best model pipeline"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(bestModel.getBestModelInfo())\nprint(bestModel.getBestModel())\n")),(0,s.kt)("p",null,"We can score against the test set and view metrics."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nprediction = bestModel.transform(test)\nmetrics = ComputeModelStatistics().transform(prediction)\nmetrics.limit(10).toPandas()\n")))}u.isMDXComponent=!0}}]);