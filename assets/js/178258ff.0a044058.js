"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[6706],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||s;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(3117),o=n(102),s=(n(7294),n(3905)),r=["components"],i={title:"GeospatialServices - Flooding Risk",hide_title:!0,status:"stable",name:"GeospatialServices - Flooding Risk"},l="Visualizing Customer addresses on a flood plane",p={unversionedId:"features/geospatial_services/GeospatialServices - Flooding Risk",id:"features/geospatial_services/GeospatialServices - Flooding Risk",title:"GeospatialServices - Flooding Risk",description:"King County (WA) publishes flood plain data as well as tax parcel data. We can use the addresses in the tax parcel data and use the geocoder to calculate coordinates. Using this coordinates and the flood plain data we can enrich out dataset with a flag indicating whether the house is in a flood zone or not.",source:"@site/docs/features/geospatial_services/GeospatialServices - Flooding Risk.md",sourceDirName:"features/geospatial_services",slug:"/features/geospatial_services/GeospatialServices - Flooding Risk",permalink:"/SynapseML/docs/next/features/geospatial_services/GeospatialServices - Flooding Risk",tags:[],version:"current",frontMatter:{title:"GeospatialServices - Flooding Risk",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"IsolationForest - Multivariate Anomaly Detection",permalink:"/SynapseML/docs/next/features/isolation_forest/IsolationForest - Multivariate Anomaly Detection"},next:{title:"GeospatialServices - Overview",permalink:"/SynapseML/docs/next/features/geospatial_services/GeospatialServices - Overview"}},d=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Load address data:",id:"load-address-data",children:[],level:3},{value:"Wire-up the Address Geocoder",id:"wire-up-the-address-geocoder",children:[],level:3},{value:"Setup Check Point In Polygon",id:"setup-check-point-in-polygon",children:[],level:3},{value:"Cleanup Uploaded User Data (Optional)",id:"cleanup-uploaded-user-data-optional",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"visualizing-customer-addresses-on-a-flood-plane"},"Visualizing Customer addresses on a flood plane"),(0,s.kt)("p",null,"King County (WA) publishes flood plain data as well as tax parcel data. We can use the addresses in the tax parcel data and use the geocoder to calculate coordinates. Using this coordinates and the flood plain data we can enrich out dataset with a flag indicating whether the house is in a flood zone or not."),(0,s.kt)("p",null,"The following data has been sourced from King County's Open data portal. ",(0,s.kt)("a",{parentName:"p",href:"https://data.kingcounty.gov/"},(0,s.kt)("em",{parentName:"a"},"Link"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/maps/KingCountyAddress.csv"},"Address Data")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/maps/KingCountyFloodPlains.geojson"},"Flood plains"))),(0,s.kt)("p",null,"For this demonstration, please follow the instructions on setting up your azure maps account from the overview notebook."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Upload the flood plains data as map data to your creator resource")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport json\nimport time\nimport requests\nfrom requests.adapters import HTTPAdapter\nfrom requests.packages.urllib3.util.retry import Retry\n\n# Configure more resiliant requests to stop flakiness\nretry_strategy = Retry(\n    total=3,\n    status_forcelist=[429, 500, 502, 503, 504],\n    method_whitelist=["HEAD", "GET", "PUT", "DELETE", "OPTIONS", "TRACE"]\n)\nadapter = HTTPAdapter(max_retries=retry_strategy)\nhttp = requests.Session()\nhttp.mount("https://", adapter)\nhttp.mount("http://", adapter)\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n\n# Azure Maps account key\nazureMapsKey = os.environ["AZURE_MAPS_KEY"] #Replace this with your azure maps key\n\n# Creator Geo prefix\n# for this example, assuming that the creator resource is created in `EAST US 2`.\natlas_geo_prefix = "us"\n\n# Load flood plains data\nflood_plain_geojson = http.get("https://mmlspark.blob.core.windows.net/publicwasb/maps/KingCountyFloodPlains.geojson").content\n\n# Upload this flood plains data to your maps/creator account. This is a Long-Running async operation and takes approximately 15~30 seconds to complete\nr= http.post(f\'https://{atlas_geo_prefix}.atlas.microsoft.com/mapData/upload?api-version=1.0&dataFormat=geojson&subscription-key={azureMapsKey}\',\n    json=json.loads(flood_plain_geojson))\n\n# Poll for resource upload completion\nresource_location = r.headers.get(\'location\')\nfor _ in range(20):\n  resource = json.loads(http.get(f\'{resource_location}&subscription-key={azureMapsKey}\').content)\n  status = resource["status"].lower()\n  if status == "running":\n    time.sleep(5) # wait in a polling loop\n  elif status == "succeeded":\n    break\n  else:\n    raise ValueError("Unknown status {}".format(status))\n\n# Once the above operation returns a HTTP 201, get the user_data_id of the flood plains data, you uploaded to your map account.\nuser_data_id_resource_url = resource[\'resourceLocation\']\nuser_data_id = json.loads(http.get(f\'{user_data_id_resource_url}&subscription-key={azureMapsKey}\').content)[\'udid\']\n')),(0,s.kt)("p",null,"Now that we have the flood plains data setup in our maps account, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CheckPointInPolygon")," function to check if a location ",(0,s.kt)("inlineCode",{parentName:"p"},"(lat,lon)")," coordinate is in a flood zone."),(0,s.kt)("h3",{id:"load-address-data"},"Load address data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read\\\n    .option("header", "true")\\\n    .csv("wasbs://publicwasb@mmlspark.blob.core.windows.net/maps/KingCountyAddress.csv")\n\n# Visualize incoming schema\nprint("Schema:")\ndata.printSchema()\n\n# Choose a subset of the data for this example\nsubset_data = data.limit(50)\ndisplay(subset_data)\n')),(0,s.kt)("h3",{id:"wire-up-the-address-geocoder"},"Wire-up the Address Geocoder"),(0,s.kt)("p",null,"We will use the address geocoder to enrich the dataset with location coordinates of the addresses."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import col\nfrom synapse.ml.cognitive import *\nfrom synapse.ml.stages import FixedMiniBatchTransformer, FlattenBatch\nfrom synapse.ml.geospatial import *\n\ndef extract_location_fields(df):\n    # Use this function to select only lat/lon columns into the dataframe\n    return df.select(col("*"),\n        col("output.response.results").getItem(0).getField("position").getField("lat").alias("Latitude"),\n        col("output.response.results").getItem(0).getField("position").getField("lon").alias("Longitude")\n    ).drop("output")\n   \n\n# Azure Maps geocoder to enhance the dataframe with location data\ngeocoder = (AddressGeocoder()\n    .setSubscriptionKey(azureMapsKey)\n    .setAddressCol("FullAddress")\n    .setOutputCol("output"))\n\n# Set up a fixed mini batch transformer to geocode addresses\nbatched_dataframe = geocoder.transform(FixedMiniBatchTransformer().setBatchSize(10).transform(subset_data.coalesce(1)))\ngeocoded_addresses = extract_location_fields(FlattenBatch().transform(batched_dataframe))\n\n# Display the results\ndisplay(geocoded_addresses)\n')),(0,s.kt)("p",null,"Now that we have geocoded the addresses, we can now use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CheckPointInPolygon")," function to check if a property is in a flood zone or not."),(0,s.kt)("h3",{id:"setup-check-point-in-polygon"},"Setup Check Point In Polygon"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def extract_point_in_polygon_result_fields(df):\n    # Use this function to select only lat/lon columns into the dataframe\n    return df.select(col("*"),\n        col("output.result.pointInPolygons").alias("In Polygon"),\n        col("output.result.intersectingGeometries").alias("Intersecting Polygons")\n    ).drop("output")\n\n\ncheck_point_in_polygon = (CheckPointInPolygon()\n    .setSubscriptionKey(azureMapsKey)\n    .setGeography(atlas_geo_prefix)\n    .setUserDataIdentifier(user_data_id)\n    .setLatitudeCol("Latitude")\n    .setLongitudeCol("Longitude")\n    .setOutputCol("output"))\n\n\nflood_plain_addresses = extract_point_in_polygon_result_fields(check_point_in_polygon.transform(geocoded_addresses))\n\n# Display the results\ndisplay(flood_plain_addresses)\n')),(0,s.kt)("h3",{id:"cleanup-uploaded-user-data-optional"},"Cleanup Uploaded User Data (Optional)"),(0,s.kt)("p",null,"You can (optionally) delete the uploaded geojson polygon."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'res = http.delete(f"https://{atlas_geo_prefix}.atlas.microsoft.com/mapData/{user_data_id}?api-version=1.0&subscription-key={azureMapsKey}")\n')))}u.isMDXComponent=!0}}]);