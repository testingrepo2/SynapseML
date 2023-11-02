"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7870],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"HyperOpt",hide_title:!0,status:"stable"},l="Hyperparameter tuning: SynapseML with Hyperopt",p={unversionedId:"Explore Algorithms/Hyperparameter Tuning/HyperOpt",id:"version-0.11.3/Explore Algorithms/Hyperparameter Tuning/HyperOpt",title:"HyperOpt",description:"SynapseML is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others.",source:"@site/versioned_docs/version-0.11.3/Explore Algorithms/Hyperparameter Tuning/HyperOpt.md",sourceDirName:"Explore Algorithms/Hyperparameter Tuning",slug:"/Explore Algorithms/Hyperparameter Tuning/HyperOpt",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Hyperparameter Tuning/HyperOpt",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"HyperOpt",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Isolation Forests",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Anomaly Detection/Quickstart - Isolation Forests"},next:{title:"Quickstart - Random Search",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Requirements",id:"requirements",level:2},{value:"MLflow autologging",id:"mlflow-autologging",level:2},{value:"Set experiment name for tracking",id:"set-experiment-name-for-tracking",level:3},{value:"Part 1. Run distributed training using MLlib",id:"part-1-run-distributed-training-using-mllib",level:2},{value:"Prepare Dataset",id:"prepare-dataset",level:2},{value:"Create a function to train a model",id:"create-a-function-to-train-a-model",level:3},{value:"Part 2. Use Hyperopt to tune hyperparameters",id:"part-2-use-hyperopt-to-tune-hyperparameters",level:2},{value:"Define a function to minimize",id:"define-a-function-to-minimize",level:3},{value:"Define the search space over hyperparameters",id:"define-the-search-space-over-hyperparameters",level:3},{value:"Tune the model using Hyperopt <code>fmin()</code>",id:"tune-the-model-using-hyperopt-fmin",level:3},{value:"Retrain the model on the full training dataset",id:"retrain-the-model-on-the-full-training-dataset",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hyperparameter-tuning-synapseml-with-hyperopt"},"Hyperparameter tuning: SynapseML with Hyperopt"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML"},"SynapseML")," is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperopt/hyperopt"},"Hyperopt"),", on the other hand, is a Python library for serial and parallel optimization over complex search spaces, including real-valued, discrete, and conditional dimensions."),(0,i.kt)("p",null,"This guide showcases the process of tuning a distributed algorithm in Spark with SynapseML and Hyperopt."),(0,i.kt)("p",null,"The use case of this guide is for distributed machine learning in Python that requires hyperparameter tuning. It provides a demo on how to tune hyperparameters for a machine learning workflow in SynapseML and can be used as a reference to tune other distributed machine learning algorithms from Spark MLlib or other libraries."),(0,i.kt)("p",null,"The guide includes two sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running distributed training with SynapseML without hyperparameter tuning."),(0,i.kt)("li",{parentName:"ul"},"Using Hyperopt to tune hyperparameters in the distributed training workflow.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are running it on Synapse, you'll need to ",(0,i.kt)("a",{parentName:"li",href:"../../../Use%20with%20MLFlow/Overview/"},"create an AML workspace and set up linked Service"),".")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install HyperOpt")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%pip install hyperopt mlflow\n")),(0,i.kt)("h2",{id:"mlflow-autologging"},"MLflow autologging"),(0,i.kt)("p",null,"To track model training and tuning with MLflow, you could enable MLflow autologging by running ",(0,i.kt)("inlineCode",{parentName:"p"},"mlflow.pyspark.ml.autolog()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.core.platform import *\n\nif running_on_synapse_internal():\n    experiment_name = "hyperopt-synapseml"\nelif running_on_synapse():\n    experiment_name = "hyperopt-synapseml"\nelse:\n    experiment_name = "/Shared/hyperopt-synapseml"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import mlflow\n\nmlflow.__version__\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Set pyspark autologging logModelAllowlist to include SynapseML models\nspark.sparkContext._conf.set(\n    "spark.mlflow.pysparkml.autolog.logModelAllowlistFile",\n    "https://mmlspark.blob.core.windows.net/publicwasb/log_model_allowlist.txt",\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# enable autologging\nmlflow.pyspark.ml.autolog()\n")),(0,i.kt)("h3",{id:"set-experiment-name-for-tracking"},"Set experiment name for tracking"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Set MLflow experiment.\n\nif running_on_synapse():\n    from notebookutils.mssparkutils import azureML\n\n    linked_service = "AzureMLService1"  # use your linked service name\n    ws = azureML.getWorkspace(linked_service)\n    mlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())\nmlflow.set_experiment(experiment_name)\n')),(0,i.kt)("h2",{id:"part-1-run-distributed-training-using-mllib"},"Part 1. Run distributed training using MLlib"),(0,i.kt)("p",null,"This section shows a simple example of distributed training using SynapseML. For more information and examples, visit the official ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/SynapseML/"},"website")),(0,i.kt)("h2",{id:"prepare-dataset"},"Prepare Dataset"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/datasets/real_world.html#california-housing-dataset"},(0,i.kt)("em",{parentName:"a"},"California Housing")," dataset"),".\nThe data was derived from the 1990 U.S. census. It consists of 20640 entries with 8 features.\nWe use ",(0,i.kt)("inlineCode",{parentName:"p"},"sklearn.datasets")," module to download it easily, then split the set into training and testing by 75/25."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\nfrom sklearn.datasets import fetch_california_housing\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'california = fetch_california_housing()\n\nfeature_cols = ["f" + str(i) for i in range(california.data.shape[1])]\nheader = ["target"] + feature_cols\ndf = spark.createDataFrame(\n    pd.DataFrame(\n        data=np.column_stack((california.target, california.data)), columns=header\n    )\n).repartition(1)\n\nprint("Dataframe has {} rows".format(df.count()))\ndisplay(df)\n')),(0,i.kt)("p",null,"Following is the summary of the data set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"display(df.summary().toPandas())\n")),(0,i.kt)("h3",{id:"create-a-function-to-train-a-model"},"Create a function to train a model"),(0,i.kt)("p",null,"In this section, you define a function to train a gradient boosting model with SynapseML LightgbmRegressor.  Wrapping the training code in a function is important for passing the function to Hyperopt for tuning later."),(0,i.kt)("p",null,"We evaluate the prediction result by using ",(0,i.kt)("inlineCode",{parentName:"p"},"synapse.ml.train.ComputeModelStatistics")," which returns four metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_squared_error"},"MSE (Mean Squared Error)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Root-mean-square_deviation"},"RMSE (Root Mean Squared Error)")," = sqrt(MSE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Coefficient_of_determination"},"R Squared")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_absolute_error"},"MAE (Mean Absolute Error)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import VectorAssembler\n\n# Convert features into a single vector column\nfeaturizer = VectorAssembler(inputCols=feature_cols, outputCol="features")\ndata = featurizer.transform(df)["target", "features"]\n\ntrain_data, test_data = data.randomSplit([0.75, 0.25], seed=42)\ntrain_data, validation_data = train_data.randomSplit([0.85, 0.15], seed=42)\n\ndisplay(train_data)\n\n# Using one partition since the training dataset is very small\nrepartitioned_data = train_data.repartition(1).cache()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMRegressor\nfrom synapse.ml.train import ComputeModelStatistics\n\n\ndef train_tree(alpha, learningRate, numLeaves, numIterations):\n    """\n    This train() function:\n     - takes hyperparameters as inputs (for tuning later)\n     - returns the F1 score on the validation dataset\n\n    Wrapping code as a function makes it easier to reuse the code later with Hyperopt.\n    """\n    # Use MLflow to track training.\n    # Specify "nested=True" since this single model will be logged as a child run of Hyperopt\'s run.\n    with mlflow.start_run(nested=True):\n\n        lgr = LightGBMRegressor(\n            objective="quantile",\n            alpha=alpha,\n            learningRate=learningRate,\n            numLeaves=numLeaves,\n            labelCol="target",\n            numIterations=numIterations,\n        )\n\n        model = lgr.fit(repartitioned_data)\n\n        cms = ComputeModelStatistics(\n            evaluationMetric="regression", labelCol="target", scoresCol="prediction"\n        )\n\n        # Define an evaluation metric and evaluate the model on the test dataset.\n        predictions = model.transform(test_data)\n        metrics = cms.transform(predictions).collect()[0].asDict()\n\n        # log metrics with mlflow\n        mlflow.log_metric("MSE", metrics["mean_squared_error"])\n        mlflow.log_metric("RMSE", metrics["root_mean_squared_error"])\n        mlflow.log_metric("R^2", metrics["R^2"])\n        mlflow.log_metric("MAE", metrics["mean_absolute_error"])\n\n    return model, metrics["R^2"]\n')),(0,i.kt)("p",null,"Run the training function to make sure it works.\nIt's a good idea to make sure training code runs before adding in tuning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'initial_model, val_metric = train_tree(\n    alpha=0.2, learningRate=0.3, numLeaves=31, numIterations=100\n)\nprint(\n    f"The trained decision tree achieved a R^2 of {val_metric} on the validation data"\n)\n')),(0,i.kt)("h2",{id:"part-2-use-hyperopt-to-tune-hyperparameters"},"Part 2. Use Hyperopt to tune hyperparameters"),(0,i.kt)("p",null,"In the second section, the Hyperopt workflow is created by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define a function to minimize"),(0,i.kt)("li",{parentName:"ul"},"Define a search space over hyperparameters"),(0,i.kt)("li",{parentName:"ul"},"Specifying the search algorithm and using ",(0,i.kt)("inlineCode",{parentName:"li"},"fmin()")," for tuning the model.")),(0,i.kt)("p",null,"For more information about the Hyperopt APIs, see the ",(0,i.kt)("a",{parentName:"p",href:"http://hyperopt.github.io/hyperopt/"},"Hyperopt documentation"),"."),(0,i.kt)("h3",{id:"define-a-function-to-minimize"},"Define a function to minimize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input: hyperparameters"),(0,i.kt)("li",{parentName:"ul"},"Internally: Reuse the training function defined above."),(0,i.kt)("li",{parentName:"ul"},"Output: loss")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from hyperopt import fmin, tpe, hp, Trials, STATUS_OK\n\n\ndef train_with_hyperopt(params):\n    """\n    An example train method that calls into MLlib.\n    This method is passed to hyperopt.fmin().\n\n    :param params: hyperparameters as a dict. Its structure is consistent with how search space is defined. See below.\n    :return: dict with fields \'loss\' (scalar loss) and \'status\' (success/failure status of run)\n    """\n    # For integer parameters, make sure to convert them to int type if Hyperopt is searching over a continuous range of values.\n    alpha = params["alpha"]\n    learningRate = params["learningRate"]\n    numLeaves = int(params["numLeaves"])\n    numIterations = int(params["numIterations"])\n\n    model, r_squared = train_tree(alpha, learningRate, numLeaves, numIterations)\n\n    # Hyperopt expects you to return a loss (for which lower is better), so take the negative of the R^2 (for which higher is better).\n    loss = -r_squared\n\n    return {"loss": loss, "status": STATUS_OK}\n')),(0,i.kt)("h3",{id:"define-the-search-space-over-hyperparameters"},"Define the search space over hyperparameters"),(0,i.kt)("p",null,"This example tunes four hyperparameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"learningRate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"numLeaves")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"numIterations"),". See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperopt/hyperopt/wiki/FMin#21-parameter-expressions"},"Hyperopt documentation")," for details on defining a search space and parameter expressions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'space = {\n    "alpha": hp.uniform("alpha", 0, 1),\n    "learningRate": hp.uniform("learningRate", 0, 1),\n    "numLeaves": hp.uniformint("numLeaves", 30, 50),\n    "numIterations": hp.uniformint("numIterations", 100, 300),\n}\n')),(0,i.kt)("h3",{id:"tune-the-model-using-hyperopt-fmin"},"Tune the model using Hyperopt ",(0,i.kt)("inlineCode",{parentName:"h3"},"fmin()")),(0,i.kt)("p",null,"For tuning the model with Hyperopt's ",(0,i.kt)("inlineCode",{parentName:"p"},"fmin()"),", the following steps are taken:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"max_evals")," to the maximum number of points in the hyperparameter space to be tested."),(0,i.kt)("li",{parentName:"ul"},"Specifying the search algorithm, either ",(0,i.kt)("inlineCode",{parentName:"li"},"hyperopt.tpe.suggest")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"hyperopt.rand.suggest"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hyperopt.tpe.suggest"),": Tree of Parzen Estimators, a Bayesian approach which iteratively and adaptively selects new hyperparameter settings to explore based on previous results"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hyperopt.rand.suggest"),": Random search, a non-adaptive approach that randomly samples the search space")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:"),(0,i.kt)("br",{parentName:"p"}),"\n","When using Hyperopt with SynapseML and other distributed training algorithms, do not pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"trials")," argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"fmin()"),". When you do not include the ",(0,i.kt)("inlineCode",{parentName:"p"},"trials")," argument, Hyperopt uses the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Trials")," class, which runs on the cluster driver. Hyperopt needs to evaluate each trial on the driver node so that each trial can initiate distributed training jobs.  "),(0,i.kt)("p",null,"Do not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkTrials")," class with SynapseML. ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkTrials")," is designed to distribute trials for algorithms that are not themselves distributed. SynapseML uses distributed computing already and is not compatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkTrials"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"algo = tpe.suggest\n\nwith mlflow.start_run():\n    best_params = fmin(fn=train_with_hyperopt, space=space, algo=algo, max_evals=8)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Print out the parameters that produced the best model\nbest_params\n")),(0,i.kt)("h3",{id:"retrain-the-model-on-the-full-training-dataset"},"Retrain the model on the full training dataset"),(0,i.kt)("p",null,'For tuning, this workflow split the training dataset into training and validation subsets. Now, retrain the model using the "best" hyperparameters on the full training dataset.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'best_alpha = best_params["alpha"]\nbest_learningRate = best_params["learningRate"]\nbest_numIterations = int(best_params["numIterations"])\nbest_numLeaves = int(best_params["numLeaves"])\n\nfinal_model, val_r_squared = train_tree(\n    best_alpha, best_learningRate, best_numIterations, best_numLeaves\n)\n')),(0,i.kt)("p",null,'Use the test dataset to compare evaluation metrics for the initial and "best" models.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Define an evaluation metric and evaluate the model on the test dataset.\ncms = ComputeModelStatistics(\n    evaluationMetric="regression", labelCol="target", scoresCol="prediction"\n)\n\ninitial_model_predictions = initial_model.transform(test_data)\ninitial_model_test_metric = (\n    cms.transform(initial_model_predictions).collect()[0].asDict()["R^2"]\n)\n\nfinal_model_predictions = final_model.transform(test_data)\nfinal_model_test_metric = (\n    cms.transform(final_model_predictions).collect()[0].asDict()["R^2"]\n)\n\nprint(\n    f"On the test data, the initial (untuned) model achieved R^2 {initial_model_test_metric}, and the final (tuned) model achieved {final_model_test_metric}."\n)\n')))}c.isMDXComponent=!0}}]);