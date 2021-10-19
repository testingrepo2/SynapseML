(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5521],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},635:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),o=["components"],i={title:"Installation",description:"Getting started with SynapseML"},p=void 0,l={unversionedId:"getting_started/installation",id:"getting_started/installation",isDocsHomePage:!1,title:"Installation",description:"Getting started with SynapseML",source:"@site/docs/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/SynapseML/docs/next/getting_started/installation",version:"current",frontMatter:{title:"Installation",description:"Getting started with SynapseML"},sidebar:"docs",previous:{title:"Introduction",permalink:"/SynapseML/docs/next/about"},next:{title:"First Example",permalink:"/SynapseML/docs/next/getting_started/first_example"}},c=[{value:"Python",id:"python",children:[]},{value:"SBT",id:"sbt",children:[]},{value:"Spark package",id:"spark-package",children:[]},{value:"Databricks",id:"databricks",children:[]},{value:"Apache Livy and HDInsight",id:"apache-livy-and-hdinsight",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Building from source",id:"building-from-source",children:[]},{value:"R (Beta)",id:"r-beta",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"python"},"Python"),(0,s.kt)("p",null,"To try out SynapseML on a Python (or Conda) installation you can get Spark\ninstalled via pip with ",(0,s.kt)("inlineCode",{parentName:"p"},"pip install pyspark"),".  You can then use ",(0,s.kt)("inlineCode",{parentName:"p"},"pyspark")," as in\nthe above example, or from python:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark\nspark = pyspark.sql.SparkSession.builder.appName("MyApp") \\\n            .config("spark.jars.packages", "com.microsoft.azure:synapseml:0.9.1") \\\n            .config("spark.jars.repositories", "https://mmlspark.azureedge.net/maven") \\\n            .getOrCreate()\nimport synapse.ml\n')),(0,s.kt)("h3",{id:"sbt"},"SBT"),(0,s.kt)("p",null,"If you are building a Spark application in Scala, add the following lines to\nyour ",(0,s.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'resolvers += "SynapseML" at "https://mmlspark.azureedge.net/maven"\nlibraryDependencies += "com.microsoft.azure" %% "synapseml" % "0.9.1"\n\n')),(0,s.kt)("h3",{id:"spark-package"},"Spark package"),(0,s.kt)("p",null,"SynapseML can be conveniently installed on existing Spark clusters via the\n",(0,s.kt)("inlineCode",{parentName:"p"},"--packages")," option, examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --packages com.microsoft.azure:synapseml:0.9.1\npyspark --packages com.microsoft.azure:synapseml:0.9.1\nspark-submit --packages com.microsoft.azure:synapseml:0.9.1 MyApp.jar\n")),(0,s.kt)("p",null,"This can be used in other Spark contexts too. For example, you can use SynapseML\nin ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/"},"AZTK")," by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/wiki/PySpark-on-Azure-with-AZTK#optional-set-up-mmlspark"},"adding it to the\n",(0,s.kt)("inlineCode",{parentName:"a"},".aztk/spark-defaults.conf"),"\nfile"),"."),(0,s.kt)("h3",{id:"databricks"},"Databricks"),(0,s.kt)("p",null,"To install SynapseML on the ",(0,s.kt)("a",{parentName:"p",href:"http://community.cloud.databricks.com"},"Databricks\ncloud"),", create a new ",(0,s.kt)("a",{parentName:"p",href:"https://docs.databricks.com/user-guide/libraries.html#libraries-from-maven-pypi-or-spark-packages"},"library from Maven\ncoordinates"),"\nin your workspace."),(0,s.kt)("p",null,"For the coordinates use: ",(0,s.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure:synapseml:0.9.1"),"\nwith the resolver: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://mmlspark.azureedge.net/maven"),". Ensure this library is\nattached to your target cluster(s)."),(0,s.kt)("p",null,"Finally, ensure that your Spark cluster has at least Spark 3.12 and Scala 2.12."),(0,s.kt)("p",null,"You can use SynapseML in both your Scala and PySpark notebooks. To get started with our example notebooks import the following databricks archive:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"https://mmlspark.blob.core.windows.net/dbcs/SynapseMLExamplesv0.9.1.dbc")),(0,s.kt)("h3",{id:"apache-livy-and-hdinsight"},"Apache Livy and HDInsight"),(0,s.kt)("p",null,"To install SynapseML from within a Jupyter notebook served by Apache Livy the following configure magic can be used. You will need to start a new session after this configure cell is executed."),(0,s.kt)("p",null,"Excluding certain packages from the library may be necessary due to current issues with Livy 0.5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        "spark.jars.packages": "com.microsoft.azure:synapseml:0.9.1",\n        "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12"\n    }\n}\n')),(0,s.kt)("p",null,'In Azure Synapse, "spark.yarn.user.classpath.first" should be set to "true" to override the existing SynapseML packages'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        "spark.jars.packages": "com.microsoft.azure:synapseml:0.9.1",\n        "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12",\n        "spark.yarn.user.classpath.first": "true"\n    }\n}\n')),(0,s.kt)("h3",{id:"docker"},"Docker"),(0,s.kt)("p",null,"The easiest way to evaluate SynapseML is via our pre-built Docker container.  To\ndo so, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 -e ACCEPT_EULA=yes mcr.microsoft.com/mmlspark/release\n")),(0,s.kt)("p",null,"Navigate to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8888/"},"http://localhost:8888/")," in your web browser to run the sample\nnotebooks.  See the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/docs/docker.md"},"documentation")," for more on Docker use."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To read the EULA for using the docker image, run "),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 mcr.microsoft.com/mmlspark/release eula\n"))),(0,s.kt)("h3",{id:"building-from-source"},"Building from source"),(0,s.kt)("p",null,"SynapseML has recently transitioned to a new build infrastructure.\nFor detailed developer docs please see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/docs/developer-readme.md"},"Developer Readme")),(0,s.kt)("p",null,"If you are an existing SynapseML developer, you will need to reconfigure your\ndevelopment setup. We now support platform independent development and\nbetter integrate with intellij and SBT.\nIf you encounter issues please reach out to our support email!"),(0,s.kt)("h3",{id:"r-beta"},"R (Beta)"),(0,s.kt)("p",null,"To try out SynapseML using the R autogenerated wrappers ",(0,s.kt)("a",{parentName:"p",href:"/SynapseML/docs/next/reference/R-setup"},"see our\ninstructions"),".  Note: This feature is still under development\nand some necessary custom wrappers may be missing."))}m.isMDXComponent=!0}}]);