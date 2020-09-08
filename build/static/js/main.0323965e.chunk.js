(this["webpackJsonpairbnb-price-prediction"]=this["webpackJsonpairbnb-price-prediction"]||[]).push([[0],{42:function(e,a,t){e.exports=t(71)},47:function(e,a,t){},49:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n,l=t(0),o=t.n(l),r=t(14),m=t.n(r),i=(t(47),t(93)),c=t(92),s=t(91),u=t(90),p=t(89),d=t(4),h=(t(49),t(34)),_=t.n(h);!function(e){e.id="id",e.name="name",e.host_id="host_id",e.host_name="host_name",e.neighbourhood_group="neighbourhood_group",e.neighbourhood="neighbourhood",e.latitude="latitude",e.longitude="longitude",e.room_type="room_type",e.price="price",e.minimum_nights="minimum_nights",e.number_of_reviews="number_of_reviews",e.last_review="last_review",e.reviews_per_month="reviews_per_month",e.calculated_host_listings_count="calculated_host_listings_count",e.availability_365="availability_365",e.column_16="column_16",e.column_17="column_17"}(n||(n={}));var b=function(){var e=E(),a=Object(d.b)(),t=a.handleSubmit,l=a.control,r=o.a.useCallback((function(e){var a=function(e){return{Inputs:{input1:{ColumnNames:["id","name","host_id","host_name","neighbourhood_group","neighbourhood","latitude","longitude","room_type","price","minimum_nights","number_of_reviews","last_review","reviews_per_month","calculated_host_listings_count","availability_365","Column 16","Column 17"],Values:[[e.id,e.name,e.host_id,e.host_name,e.neighbourhood_group,e.neighbourhood,e.latitude,e.longitude,e.room_type,e.price,e.minimum_nights,e.number_of_reviews,e.last_review,e.reviews_per_month,e.calculated_host_listings_count,e.availability_365,"0","0"]]}},GlobalParameters:{}}}(e);_.a.post("https://ussouthcentral.services.azureml.net/workspaces/cf5590ba445b41549f7c76a333f31a86/services/bf30be8120c34d029e17395f67532072/execute?api-version=2.0&details=true",a,{headers:{Authorization:"Bearer X3atS1Q6K/BhBk5gfjq143ZeNPY21eU2gMRsDLhsLRo3Hc1oScPYa7dUHXoljzlARiC2XLbYvyaYaxo3CqoBtg==","Content-Type":"application/json",Accept:"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}),[]);return o.a.createElement("div",{className:e.app},o.a.createElement("header",{className:e.header},o.a.createElement("h1",null,"Airbnb Price Prediction")),o.a.createElement("main",{className:e.main},o.a.createElement("form",{onSubmit:t(r)},o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.id,className:e.inputLabel},n.id.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.id})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.name,className:e.inputLabel},n.name.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.name})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.host_id,className:e.inputLabel},n.host_id.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.host_id})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.host_name,className:e.inputLabel},n.host_name.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.host_name})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.neighbourhood_group,className:e.inputLabel},n.neighbourhood_group.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.neighbourhood_group})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.neighbourhood,className:e.inputLabel},n.neighbourhood.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.neighbourhood})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.latitude,className:e.inputLabel},n.latitude.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.latitude})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.longitude,className:e.inputLabel},n.longitude.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.longitude})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.room_type,className:e.inputLabel},n.room_type.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.room_type})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.price,className:e.inputLabel},n.price.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.price})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.minimum_nights,className:e.inputLabel},n.minimum_nights.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.minimum_nights})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.number_of_reviews,className:e.inputLabel},n.number_of_reviews.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.number_of_reviews})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.last_review,className:e.inputLabel},n.last_review.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.last_review})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.reviews_per_month,className:e.inputLabel},n.reviews_per_month.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.reviews_per_month})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.calculated_host_listings_count,className:e.inputLabel},n.calculated_host_listings_count.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.calculated_host_listings_count})),o.a.createElement(i.a,{required:!0,className:e.formControl},o.a.createElement(c.a,{htmlFor:n.availability_365,className:e.inputLabel},n.availability_365.toUpperCase()),o.a.createElement(d.a,{as:o.a.createElement(s.a,null),control:l,defaultValue:"",name:n.availability_365})),o.a.createElement(u.a,{type:"submit",variant:"contained",className:e.button},"Submit"))))},E=Object(p.a)({app:{textAlign:"center",backgroundColor:"#282c34",fontSize:"calc(10px + 2vmin)",color:"white",minHeight:"100vh",paddingBottom:"50px"},header:{margin:"0px",padding:"20px"},main:{backgroundColor:"white",maxWidth:"400px",margin:"0 auto",padding:"20px",borderRadius:"10px"},formControl:{width:"100%",paddingTop:"8px",paddingBottom:"8px"},inputLabel:{fontWeight:"bold"},button:{width:"100%",marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0323965e.chunk.js.map