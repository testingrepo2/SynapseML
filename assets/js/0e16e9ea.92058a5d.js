"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7721],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],s={title:"Quickstart - Exploring Art Across Cultures",hide_title:!0,status:"stable"},o="Exploring Art across Culture and Medium with Fast, Conditional, k-Nearest Neighbors",u={unversionedId:"Explore Algorithms/Other Algorithms/Quickstart - Exploring Art Across Cultures",id:"version-0.11.4/Explore Algorithms/Other Algorithms/Quickstart - Exploring Art Across Cultures",title:"Quickstart - Exploring Art Across Cultures",description:"This article serves as a guideline for match-finding via k-nearest-neighbors. You set up code that allows queries involving cultures and mediums of art amassed from the Metropolitan Museum of Art in NYC and the Rijksmuseum in Amsterdam.",source:"@site/versioned_docs/version-0.11.4/Explore Algorithms/Other Algorithms/Quickstart - Exploring Art Across Cultures.md",sourceDirName:"Explore Algorithms/Other Algorithms",slug:"/Explore Algorithms/Other Algorithms/Quickstart - Exploring Art Across Cultures",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/Other Algorithms/Quickstart - Exploring Art Across Cultures",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"Quickstart - Exploring Art Across Cultures",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Anomalous Access Detection",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/Other Algorithms/Quickstart - Anomalous Access Detection"},next:{title:"Overview",permalink:"/SynapseML/docs/0.11.4/Use with MLFlow/Overview"}},m={},c=[{value:"Overview of the BallTree",id:"overview-of-the-balltree",level:2},{value:"Setup",id:"setup",level:2},{value:"Define categories to be queried on",id:"define-categories-to-be-queried-on",level:2},{value:"Define and fit ConditionalKNN models",id:"define-and-fit-conditionalknn-models",level:2},{value:"Define matching and visualizing methods",id:"define-matching-and-visualizing-methods",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2},{value:"Demo",id:"demo",level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exploring-art-across-culture-and-medium-with-fast-conditional-k-nearest-neighbors"},"Exploring Art across Culture and Medium with Fast, Conditional, k-Nearest Neighbors"),(0,i.kt)("p",null,"This article serves as a guideline for match-finding via k-nearest-neighbors. You set up code that allows queries involving cultures and mediums of art amassed from the Metropolitan Museum of Art in NYC and the Rijksmuseum in Amsterdam."),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/art/cross_cultural_matches.jpg",width:"600"}),(0,i.kt)("h2",{id:"overview-of-the-balltree"},"Overview of the BallTree"),(0,i.kt)("p",null,'The structure functioning behind the KNN model is a BallTree, which is a recursive binary tree where each node (or "ball") contains a partition of the points of data to be queried. Building a BallTree involves assigning data points to the "ball" whose center they\'re closest to (with respect to a certain specified feature), resulting in a structure that allows binary-tree-like traversal and lends itself to finding k-nearest neighbors at a BallTree leaf.'),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Import necessary Python libraries and prepare dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.types import BooleanType\nfrom pyspark.sql.types import *\nfrom pyspark.sql.functions import lit, array, array_contains, udf, col, struct\nfrom synapse.ml.nn import ConditionalKNN, ConditionalKNNModel\nfrom PIL import Image\nfrom io import BytesIO\nimport requests\nimport numpy as np\nimport matplotlib.pyplot as plt\n")),(0,i.kt)("p",null,"Our dataset comes from a table containing artwork information from both the Met and Rijks museums. The schema is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": A unique identifier for a piece of art",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sample Met id: ",(0,i.kt)("em",{parentName:"li"},"388395")," "),(0,i.kt)("li",{parentName:"ul"},"Sample Rijks id: ",(0,i.kt)("em",{parentName:"li"},"SK-A-2344")," "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Title"),": Art piece title, as written in the museum's database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Artist"),": Art piece artist, as written in the museum's database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Thumbnail_Url"),": Location of a JPEG thumbnail of the art piece"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Image_Url")," Location of an image of the art piece hosted on the Met/Rijks website"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Culture"),": Category of culture that the art piece falls under",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sample culture categories: ",(0,i.kt)("em",{parentName:"li"},"latin american"),", ",(0,i.kt)("em",{parentName:"li"},"egyptian"),", etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Classification"),": Category of medium that the art piece falls under",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sample medium categories: ",(0,i.kt)("em",{parentName:"li"},"woodwork"),", ",(0,i.kt)("em",{parentName:"li"},"paintings"),", etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Museum_Page"),": Link to the work of art on the Met/Rijks website"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Norm_Features"),": Embedding of the art piece image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Museum"),": Specifies which museum the piece originated from")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# loads the dataset and the two trained CKNN models for querying by medium and culture\ndf = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/met_and_rijks.parquet"\n)\ndisplay(df.drop("Norm_Features"))\n')),(0,i.kt)("h2",{id:"define-categories-to-be-queried-on"},"Define categories to be queried on"),(0,i.kt)("p",null,"Two KNN models are used: one for culture, and one for medium."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# mediums = ['prints', 'drawings', 'ceramics', 'textiles', 'paintings', \"musical instruments\",\"glass\", 'accessories', 'photographs',  \"metalwork\",\n#           \"sculptures\", \"weapons\", \"stone\", \"precious\", \"paper\", \"woodwork\", \"leatherwork\", \"uncategorized\"]\n\nmediums = [\"paintings\", \"glass\", \"ceramics\"]\n\n# cultures = ['african (general)', 'american', 'ancient american', 'ancient asian', 'ancient european', 'ancient middle-eastern', 'asian (general)',\n#            'austrian', 'belgian', 'british', 'chinese', 'czech', 'dutch', 'egyptian']#, 'european (general)', 'french', 'german', 'greek',\n#            'iranian', 'italian', 'japanese', 'latin american', 'middle eastern', 'roman', 'russian', 'south asian', 'southeast asian',\n#            'spanish', 'swiss', 'various']\n\ncultures = [\"japanese\", \"american\", \"african (general)\"]\n\n# Uncomment the above for more robust and large scale searches!\n\nclasses = cultures + mediums\n\nmedium_set = set(mediums)\nculture_set = set(cultures)\nselected_ids = {\"AK-RBK-17525-2\", \"AK-MAK-1204\", \"AK-RAK-2015-2-9\"}\n\nsmall_df = df.where(\n    udf(\n        lambda medium, culture, id_val: (medium in medium_set)\n        or (culture in culture_set)\n        or (id_val in selected_ids),\n        BooleanType(),\n    )(\"Classification\", \"Culture\", \"id\")\n)\n\nsmall_df.count()\n")),(0,i.kt)("h2",{id:"define-and-fit-conditionalknn-models"},"Define and fit ConditionalKNN models"),(0,i.kt)("p",null,"Create ConditionalKNN models for both the medium and culture columns; each model takes in an output column, features column (feature vector), values column (cell values under the output column), and label column (the quality that the respective KNN is conditioned on)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'medium_cknn = (\n    ConditionalKNN()\n    .setOutputCol("Matches")\n    .setFeaturesCol("Norm_Features")\n    .setValuesCol("Thumbnail_Url")\n    .setLabelCol("Classification")\n    .fit(small_df)\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'culture_cknn = (\n    ConditionalKNN()\n    .setOutputCol("Matches")\n    .setFeaturesCol("Norm_Features")\n    .setValuesCol("Thumbnail_Url")\n    .setLabelCol("Culture")\n    .fit(small_df)\n)\n')),(0,i.kt)("h2",{id:"define-matching-and-visualizing-methods"},"Define matching and visualizing methods"),(0,i.kt)("p",null,"After the initial dataset and category setup, prepare methods that will query and visualize the conditional KNN's results."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addMatches()")," creates a Dataframe with a handful of matches per category."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def add_matches(classes, cknn, df):\n    results = df\n    for label in classes:\n        results = cknn.transform(\n            results.withColumn("conditioner", array(lit(label)))\n        ).withColumnRenamed("Matches", "Matches_{}".format(label))\n    return results\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"plot_urls()")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"plot_img")," to visualize top matches for each category into a grid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def plot_img(axis, url, title):\n    try:\n        response = requests.get(url)\n        img = Image.open(BytesIO(response.content)).convert("RGB")\n        axis.imshow(img, aspect="equal")\n    except:\n        pass\n    if title is not None:\n        axis.set_title(title, fontsize=4)\n    axis.axis("off")\n\n\ndef plot_urls(url_arr, titles, filename):\n    nx, ny = url_arr.shape\n\n    plt.figure(figsize=(nx * 5, ny * 5), dpi=1600)\n    fig, axes = plt.subplots(ny, nx)\n\n    # reshape required in the case of 1 image query\n    if len(axes.shape) == 1:\n        axes = axes.reshape(1, -1)\n\n    for i in range(nx):\n        for j in range(ny):\n            if j == 0:\n                plot_img(axes[j, i], url_arr[i, j], titles[i])\n            else:\n                plot_img(axes[j, i], url_arr[i, j], None)\n\n    plt.savefig(filename, dpi=1600)  # saves the results as a PNG\n\n    display(plt.show())\n')),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"Define ",(0,i.kt)("inlineCode",{parentName:"p"},"test_all()")," to take in the data, CKNN models, the art id values to query on, and the file path to save the output visualization to. The medium and culture models were previously trained and loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# main method to test a particular dataset with two CKNN models and a set of art IDs, saving the result to filename.png\n\n\ndef test_all(data, cknn_medium, cknn_culture, test_ids, root):\n    is_nice_obj = udf(lambda obj: obj in test_ids, BooleanType())\n    test_df = data.where(is_nice_obj("id"))\n\n    results_df_medium = add_matches(mediums, cknn_medium, test_df)\n    results_df_culture = add_matches(cultures, cknn_culture, results_df_medium)\n\n    results = results_df_culture.collect()\n\n    original_urls = [row["Thumbnail_Url"] for row in results]\n\n    culture_urls = [\n        [row["Matches_{}".format(label)][0]["value"] for row in results]\n        for label in cultures\n    ]\n    culture_url_arr = np.array([original_urls] + culture_urls)[:, :]\n    plot_urls(culture_url_arr, ["Original"] + cultures, root + "matches_by_culture.png")\n\n    medium_urls = [\n        [row["Matches_{}".format(label)][0]["value"] for row in results]\n        for label in mediums\n    ]\n    medium_url_arr = np.array([original_urls] + medium_urls)[:, :]\n    plot_urls(medium_url_arr, ["Original"] + mediums, root + "matches_by_medium.png")\n\n    return results_df_culture\n')),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,"The following cell performs batched queries given desired image IDs and a filename to save the visualization."),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/art/cross_cultural_matches.jpg",width:"600"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# sample query\nresult_df = test_all(small_df, medium_cknn, culture_cknn, selected_ids, root=".")\n')))}d.isMDXComponent=!0}}]);