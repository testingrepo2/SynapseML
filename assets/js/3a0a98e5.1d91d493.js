(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8789],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4780:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(4034),r=n(9973),o=(n(7294),n(3905)),i=["components"],l={title:"Spark Serving",hide_title:!0,sidebar_label:"About",name:"about"},s='<img src="/img/notebooks/SparkServing3.svg" width="90" align="left" /> Spark Serving',u={unversionedId:"features/spark_serving/about",id:"features/spark_serving/about",isDocsHomePage:!1,title:"Spark Serving",description:"An Engine for Deploying Spark Jobs as Distributed Web Services",source:"@site/docs/features/spark_serving/about.md",sourceDirName:"features/spark_serving",slug:"/features/spark_serving/about",permalink:"/SynapseML/docs/next/features/spark_serving/about",tags:[],version:"current",frontMatter:{title:"Spark Serving",hide_title:!0,sidebar_label:"About"},sidebar:"docs",previous:{title:"SparkServing - Deploying a Classifier",permalink:"/SynapseML/docs/next/features/spark_serving/SparkServing - Deploying a Classifier"},next:{title:"Vowpal Wabbit - Overview",permalink:"/SynapseML/docs/next/features/vw/Vowpal Wabbit - Overview"}},p=[{value:"An Engine for Deploying Spark Jobs as Distributed Web Services",id:"an-engine-for-deploying-spark-jobs-as-distributed-web-services",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Jupyter Notebook Examples",id:"jupyter-notebook-examples",children:[],level:3},{value:"Spark Serving Hello World",id:"spark-serving-hello-world",children:[],level:3},{value:"Deploying a Deep Network with the CNTKModel",id:"deploying-a-deep-network-with-the-cntkmodel",children:[],level:3}],level:2},{value:"Architecture",id:"architecture",children:[{value:"Head Node Load Balanced",id:"head-node-load-balanced",children:[],level:3},{value:"Fully Distributed (Custom Load Balancer)",id:"fully-distributed-custom-load-balancer",children:[],level:3},{value:"Sub-Millisecond Latency with Continuous Processing",id:"sub-millisecond-latency-with-continuous-processing",children:[{value:"Databricks Setup",id:"databricks-setup",children:[{value:"Linux Gateway Setup - Azure",id:"linux-gateway-setup---azure",children:[],level:5}],level:4}],level:3}],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-spark-serving"},(0,o.kt)("img",{src:"/img/notebooks/SparkServing3.svg",width:"90",align:"left"})," Spark Serving"),(0,o.kt)("h3",{id:"an-engine-for-deploying-spark-jobs-as-distributed-web-services"},"An Engine for Deploying Spark Jobs as Distributed Web Services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Distributed"),": Takes full advantage of Node, JVM, and thread level\nparallelism that Spark is famous for."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast"),": No single node bottlenecks, no round trips to Python.\nRequests can be routed directly to and from worker JVMs through\nnetwork switches.  Spin up a web service in a matter of seconds. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Low Latency"),": When using continuous serving,\nyou can achieve latencies as low as 1 millisecond."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deployable Anywhere"),": Works anywhere that runs Spark such as\nDatabricks, HDInsight, AZTK, DSVMs, local, or on your own\ncluster.  Usable from Spark, PySpark, and SparklyR."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lightweight"),": No dependence on additional (costly) Kafka or\nKubernetes clusters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Idiomatic"),": Uses the same API as batch and structured streaming."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible"),": Spin up and manage several services on a single Spark\ncluster.  Synchronous and Asynchronous service management and\nextensibility.  Deploy any spark job that is expressible as a\nstructured streaming query.  Use serving sources/sinks with other\nSpark data sources/sinks for more complex deployments.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"jupyter-notebook-examples"},"Jupyter Notebook Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/features/spark_serving/SparkServing%20-%20Deploying%20a%20Classifier"},"Deploy a classifier trained on the Adult Census Dataset")),(0,o.kt)("li",{parentName:"ul"},"More coming soon!")),(0,o.kt)("h3",{id:"spark-serving-hello-world"},"Spark Serving Hello World"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import synapse.ml\nimport pyspark\nfrom pyspark.sql.functions import udf, col, length\nfrom pyspark.sql.types import *\n\ndf = spark.readStream.server() \\\n    .address("localhost", 8888, "my_api") \\\n    .load() \\\n    .parseRequest(StructType().add("foo", StringType()).add("bar", IntegerType()))\n\nreplies = df.withColumn("fooLength", length(col("foo")))\\\n    .makeReply("fooLength") \n\nserver = replies\\\n    .writeStream \\\n    .server() \\\n    .replyTo("my_api") \\\n    .queryName("my_query") \\\n    .option("checkpointLocation", "file:///path/to/checkpoints") \\\n    .start()\n')),(0,o.kt)("h3",{id:"deploying-a-deep-network-with-the-cntkmodel"},"Deploying a Deep Network with the CNTKModel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import synapse.ml\nfrom synapse.ml.cntk import CNTKModel\nimport pyspark\nfrom pyspark.sql.functions import udf, col\n\ndf = spark.readStream.server() \\\n       .address("localhost", 8888, "my_api")\n       .load()\n       .parseRequest(<Insert your models input schema here>)\n\n# See notebook examples for how to create and save several\n# examples of CNTK models\nnetwork = CNTKModel.load("file:///path/to/my_cntkmodel.mml")\n\ntransformed_df = network.transform(df).makeReply(<Whatever column you wish to send back>)\n\nserver = transformed_df \\\n           .writeStream \\\n           .server() \\\n           .replyTo("my_api") \\\n           .queryName("my_query") \\\n           .option("checkpointLocation", "file:///path/to/checkpoints") \\\n           .start()\n')),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Spark Serving adds special streaming sources sinks to turn any\nstructured streaming job into a web service.  Spark Serving comes\nwith two deployment options that vary based on the load balancing used:"),(0,o.kt)("p",null,"In brief you can use the following:\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.readStream.server()"),": For head node load balanced services\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.readStream.distributedServer()"),": For custom load balanced services\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.readStream.continuousServer()"),": For a custom load balanced, sub-millisecond latency continuous server"),(0,o.kt)("p",null,"To create the various different serving dataframes and use the equivalent statements after ",(0,o.kt)("inlineCode",{parentName:"p"},"df.writeStream"),"\nfor replying to the web requests"),(0,o.kt)("h3",{id:"head-node-load-balanced"},"Head Node Load Balanced"),(0,o.kt)("p",null,"You can deploy head node load balancing with the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPSource")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPSink")," classes.  This mode spins up a queue on the head node,\ndistributes work across partitions, then collects response data back to\nthe head node.  All HTTP requests are kept and replied to on the head\nnode. In both python and Scala these classes can be access by using\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.readStream.server()")," after importing MMLSpark.\nThis mode allows for more complex windowing, repartitioning, and\nSQL operations.  This option is also idea for rapid setup and testing,\nas it doesn't require any additional load balancing or network\nswitches.A diagram of this configuration can be seen below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/notebooks/HeadNodeDistributed2.png",width:"600"})),(0,o.kt)("h3",{id:"fully-distributed-custom-load-balancer"},"Fully Distributed (Custom Load Balancer)"),(0,o.kt)("p",null,"You can configure Spark Serving for a custom load balancer using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"DistributedHTTPSource")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DistributedHTTPSink")," classes.  This mode\nspins up servers on each executor JVM.",(0,o.kt)("br",{parentName:"p"}),"\n","In both python and Scala these classes can be access by using\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.readStream.distributedServer()")," after importing MMLSpark.\nEach server will feed its\nexecutor's partitions in parallel.  This mode is key for high throughput\nand low latency as data does not need to be transferred to and from the\nhead node.  This deployment results in several web services that all\nroute into the same spark computation.  You can deploy an external load\nbalancer to unify the executor's services under a single IP address.\nSupport for automatic load balancer management and deployment is\ntargeted for the next release of MMLSpark.  A diagram of this\nconfiguration can be seen below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/notebooks/FullyDistributed2.png",width:"600"})),(0,o.kt)("p",null,"Queries that involve data movement across workers, such as a nontrivial\nSQL join, need special consideration.  The user must ensure that the\nright machine replies to each request.  One can route data back to the\noriginating partition with a broadcast join.  In the future, request\nrouting will be automatically handled by the sink."),(0,o.kt)("h3",{id:"sub-millisecond-latency-with-continuous-processing"},"Sub-Millisecond Latency with Continuous Processing"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/notebooks/latency_comparison.png",width:"600"})),(0,o.kt)("p",null,"Continuous processing can be enabled by hooking into the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPSourceV2")," class using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.readStream.continuousServer()\n  ...\n")),(0,o.kt)("p",null,"Note that in continuous serving, much like continuous streaming you need to add a trigger to your write statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' df.writeStream\n  .continuousServer()\n  .trigger(continuous="1 second")\n  ...\n')),(0,o.kt)("p",null,"The architecture is very similiar to the custom load balancer setup described above.\nMore specifically, Spark will manage a web service on each partition.\nThese webservices can be unified together using an Azure Load Balancer,\nKubernetes Service Endpoint, Azure Application gateway or any other way to load balance a distributed service.\nIt is currently the user's responsibility to optionally unify these services as they see fit.\nIn the furutre we will include options to dynamically spin up and manage a load balancer."),(0,o.kt)("h4",{id:"databricks-setup"},"Databricks Setup"),(0,o.kt)("p",null,"Databricks is a managed architecture and they have restricted\nall incoming traffic to the nodes of the cluster.\nIf you create a web service in your databricks cluster (head or worker nodes),\nyour cluster can communicate with the service, but the outside world cannot.\nHowever, In the future, Databricks will support Virtual Network Injection so this will not be a problem.\nIn the meantime, you must use SSH tunneling to forward the services to another machine(s)\nto act as a networking gateway. This machine can be any machine that accpets SSH traffic and requests.\nWe have included settings to automatically configure this SSH tunneling for convenience."),(0,o.kt)("h5",{id:"linux-gateway-setup---azure"},"Linux Gateway Setup - Azure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal"},"Create a Linux VM using SSH")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nsg-quickstart-portal"},"Open ports 8000-9999 from the Azure Portal")),(0,o.kt)("li",{parentName:"ol"},"Open the port on the firewall on the VM",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-$xslt"},'firewall-cmd --zone=public --add-port=8000-10000/tcp --permanent\nfirewall-cmd --reload\necho "GatewayPorts yes" >> /etc/ssh/sshd_config\nservice ssh --full-restart\n'))),(0,o.kt)("li",{parentName:"ol"},"Add your private key to a private container in ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=portal"},"Azure Storage Blob"),"."),(0,o.kt)("li",{parentName:"ol"},"Generate a SAS link for your key and save it."),(0,o.kt)("li",{parentName:"ol"},'Simply include the following parameters on your reader to configure the SSH tunneling:\nserving_inputs = (spark.readStream.continuousServer()\n.option("numPartitions", 1)\n.option("forwarding.enabled", True)  # enable ssh forwarding to a gateway machine\n.option("forwarding.username", "username")\n.option("forwarding.sshHost", "ip or dns")\n.option("forwarding.keySas", "SAS url from the previous step")\n.address("localhost", 8904, "my_api")\n.load() ')),(0,o.kt)("p",null,"Note that this will make your service require an extra jump and affect latency.\nIt is important to pick a gateway that has good connectivity to your spark cluster.\nFor this reason we suggest using Spark Serving\non a cluster enviromnent that is more open such as Kubernetes, Mesos, or Azure Batch\nfor best performance and ease of configuration."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Necessary"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Applicable When"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"The host to spin up a server on"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"The starting port when creating the web services.  Web services will increment this port several  times to find an open port.  In the future the flexibility of this param will be expanded"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The Path of the api a user would call. The format is ",(0,o.kt)("inlineCode",{parentName:"td"},"hostname:port/name")),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to forward the services to a gateway machine"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"When you need to forward services out of  a protected network. Only Supported for Continuous Serving.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.username"),(0,o.kt)("td",{parentName:"tr",align:null},"the username to connect to on the remote host"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.sshport"),(0,o.kt)("td",{parentName:"tr",align:null},"the port to ssh connect to"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"22"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.sshHost"),(0,o.kt)("td",{parentName:"tr",align:null},"the host of the gateway machine"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.keySas"),(0,o.kt)("td",{parentName:"tr",align:null},"A Secure access link that can be used to automatically download the required ssh private key"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Sometimes more convenient than a directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forwarding.keyDir"),(0,o.kt)("td",{parentName:"tr",align:null},"A directory on the machines holding the private key"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},'"~/.ssh"'),(0,o.kt)("td",{parentName:"tr",align:null},"Useful if you cannot send keys over the wire securely")))))}c.isMDXComponent=!0}}]);