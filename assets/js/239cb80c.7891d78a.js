"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7579],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86496:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"DeepLearning - Deep Vision Classifier",hide_title:!0,status:"stable"},s=void 0,p={unversionedId:"features/simple_deep_learning/DeepLearning - Deep Vision Classifier",id:"version-0.10.1/features/simple_deep_learning/DeepLearning - Deep Vision Classifier",title:"DeepLearning - Deep Vision Classifier",description:"Deep Learning - Deep Vision Classifier",source:"@site/versioned_docs/version-0.10.1/features/simple_deep_learning/DeepLearning - Deep Vision Classifier.md",sourceDirName:"features/simple_deep_learning",slug:"/features/simple_deep_learning/DeepLearning - Deep Vision Classifier",permalink:"/SynapseML/docs/features/simple_deep_learning/DeepLearning - Deep Vision Classifier",tags:[],version:"0.10.1",frontMatter:{title:"DeepLearning - Deep Vision Classifier",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Deep Vision Classification on Databricks",permalink:"/SynapseML/docs/features/simple_deep_learning/about"},next:{title:"AzureSearchIndex - Met Artworks",permalink:"/SynapseML/docs/features/other/AzureSearchIndex - Met Artworks"}},c={},u=[{value:"Deep Learning - Deep Vision Classifier",id:"deep-learning---deep-vision-classifier",level:2},{value:"Environment Setup -- reinstall horovod based on new version of pytorch",id:"environment-setup----reinstall-horovod-based-on-new-version-of-pytorch",level:3},{value:"Read Dataset",id:"read-dataset",level:3},{value:"Training",id:"training",level:3},{value:"Prediction",id:"prediction",level:3}],d={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deep-learning---deep-vision-classifier"},"Deep Learning - Deep Vision Classifier"),(0,i.kt)("h3",{id:"environment-setup----reinstall-horovod-based-on-new-version-of-pytorch"},"Environment Setup -- reinstall horovod based on new version of pytorch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# install cloudpickle 2.0.0 to add synapse module for usage of horovod\n%pip install cloudpickle==2.0.0 --force-reinstall --no-deps\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import synapse\nimport cloudpickle\n\ncloudpickle.register_pickle_by_value(synapse)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"! horovodrun --check-build\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.functions import udf, col, regexp_replace\nfrom pyspark.sql.types import IntegerType\nfrom pyspark.ml.evaluation import MulticlassClassificationEvaluator\n")),(0,i.kt)("h3",{id:"read-dataset"},"Read Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def assign_label(path):\n    num = int(path.split("/")[-1].split(".")[0].split("_")[1])\n    return num // 81\n\n\nassign_label_udf = udf(assign_label, IntegerType())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# These files are already uploaded for build test machine\ntrain_df = (\n    spark.read.format("binaryFile")\n    .option("pathGlobFilter", "*.jpg")\n    .load("/tmp/17flowers/train")\n    .withColumn("image", regexp_replace("path", "dbfs:", "/dbfs"))\n    .withColumn("label", assign_label_udf(col("path")))\n    .select("image", "label")\n)\n\ndisplay(train_df.limit(100))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'test_df = (\n    spark.read.format("binaryFile")\n    .option("pathGlobFilter", "*.jpg")\n    .load("/tmp/17flowers/test")\n    .withColumn("image", regexp_replace("path", "dbfs:", "/dbfs"))\n    .withColumn("label", assign_label_udf(col("path")))\n    .select("image", "label")\n)\n')),(0,i.kt)("h3",{id:"training"},"Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from horovod.spark.common.store import DBFSLocalStore\nfrom pytorch_lightning.callbacks import ModelCheckpoint\nfrom synapse.ml.dl import *\n\nrun_output_dir = "/dbfs/FileStore/test/resnet50"\nstore = DBFSLocalStore(run_output_dir)\n\nepochs = 10\n\ncallbacks = [ModelCheckpoint(filename="{epoch}-{train_loss:.2f}")]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'deep_vision_classifier = DeepVisionClassifier(\n    backbone="resnet50",\n    store=store,\n    callbacks=callbacks,\n    num_classes=17,\n    batch_size=16,\n    epochs=epochs,\n    validation=0.1,\n)\n\ndeep_vision_model = deep_vision_classifier.fit(train_df)\n')),(0,i.kt)("h3",{id:"prediction"},"Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pred_df = deep_vision_model.transform(test_df)\nevaluator = MulticlassClassificationEvaluator(\n    predictionCol="prediction", labelCol="label", metricName="accuracy"\n)\nprint("Test accuracy:", evaluator.evaluate(pred_df))\n')))}f.isMDXComponent=!0}}]);