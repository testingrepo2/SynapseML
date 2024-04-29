"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={title:"Quickstart - Fine-tune a Text Classifier",hide_title:!0,status:"stable"},o=void 0,l={unversionedId:"Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Text Classifier",id:"version-1.0.2/Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Text Classifier",title:"Quickstart - Fine-tune a Text Classifier",description:"Deep Learning - Deep Text Classifier",source:"@site/versioned_docs/version-1.0.2/Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Text Classifier.md",sourceDirName:"Explore Algorithms/Deep Learning",slug:"/Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Text Classifier",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Text Classifier",draft:!1,tags:[],version:"1.0.2",frontMatter:{title:"Quickstart - Fine-tune a Text Classifier",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Distributed Training",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Deep Learning/Distributed Training"},next:{title:"Quickstart - Fine-tune a Vision Classifier",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Deep Learning/Quickstart - Fine-tune a Vision Classifier"}},s={},p=[{value:"Deep Learning - Deep Text Classifier",id:"deep-learning---deep-text-classifier",level:2},{value:"Environment Setup on databricks",id:"environment-setup-on-databricks",level:3},{value:"Read Dataset",id:"read-dataset",level:3},{value:"Training",id:"training",level:3},{value:"Prediction",id:"prediction",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deep-learning---deep-text-classifier"},"Deep Learning - Deep Text Classifier"),(0,a.kt)("h3",{id:"environment-setup-on-databricks"},"Environment Setup on databricks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# install cloudpickle 2.0.0 to add synapse module for usage of horovod\n%pip install cloudpickle==2.0.0 --force-reinstall --no-deps\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import synapse\nimport cloudpickle\n\ncloudpickle.register_pickle_by_value(synapse)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"! horovodrun --check-build\n")),(0,a.kt)("h3",{id:"read-dataset"},"Read Dataset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import urllib\n\nurllib.request.urlretrieve(\n    "https://mmlspark.blob.core.windows.net/publicwasb/text_classification/Emotion_classification.csv",\n    "/tmp/Emotion_classification.csv",\n)\n\nimport pandas as pd\nfrom pyspark.ml.feature import StringIndexer\n\ndf = pd.read_csv("/tmp/Emotion_classification.csv")\ndf = spark.createDataFrame(df)\n\nindexer = StringIndexer(inputCol="Emotion", outputCol="label")\nindexer_model = indexer.fit(df)\ndf = indexer_model.transform(df).drop(("Emotion"))\n\ntrain_df, test_df = df.randomSplit([0.85, 0.15], seed=1)\ndisplay(train_df)\n')),(0,a.kt)("h3",{id:"training"},"Training"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from horovod.spark.common.store import DBFSLocalStore\nfrom pytorch_lightning.callbacks import ModelCheckpoint\nfrom synapse.ml.dl import *\nimport uuid\n\ncheckpoint = "bert-base-uncased"\nrun_output_dir = f"/dbfs/FileStore/test/{checkpoint}/{str(uuid.uuid4())[:8]}"\nstore = DBFSLocalStore(run_output_dir)\n\nepochs = 1\n\ncallbacks = [ModelCheckpoint(filename="{epoch}-{train_loss:.2f}")]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'deep_text_classifier = DeepTextClassifier(\n    checkpoint=checkpoint,\n    store=store,\n    callbacks=callbacks,\n    num_classes=6,\n    batch_size=16,\n    epochs=epochs,\n    validation=0.1,\n    text_col="Text",\n)\n\ndeep_text_model = deep_text_classifier.fit(train_df.limit(6000).repartition(50))\n')),(0,a.kt)("h3",{id:"prediction"},"Prediction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.evaluation import MulticlassClassificationEvaluator\n\npred_df = deep_text_model.transform(test_df.limit(500))\nevaluator = MulticlassClassificationEvaluator(\n    predictionCol="prediction", labelCol="label", metricName="accuracy"\n)\nprint("Test accuracy:", evaluator.evaluate(pred_df))\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Cleanup the output dir for test\ndbutils.fs.rm(run_output_dir, True)\n")))}u.isMDXComponent=!0}}]);