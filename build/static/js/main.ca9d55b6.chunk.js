(this["webpackJsonpairbnb-price-prediction"]=this["webpackJsonpairbnb-price-prediction"]||[]).push([[0],{45:function(e,a,t){e.exports=t(74)},50:function(e,a,t){},52:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var l,o=t(0),n=t.n(o),r=t(15),i=t.n(r),m=(t(50),t(12)),c=t(96),s=t(95),u=t(94),d=t(93),p=t(92),_=t(4),h=(t(52),t(37)),E=t.n(h);!function(e){e.id="id",e.name="name",e.host_id="host_id",e.host_name="host_name",e.neighbourhood_group="neighbourhood_group",e.neighbourhood="neighbourhood",e.latitude="latitude",e.longitude="longitude",e.room_type="room_type",e.price="price",e.minimum_nights="minimum_nights",e.number_of_reviews="number_of_reviews",e.last_review="last_review",e.reviews_per_month="reviews_per_month",e.calculated_host_listings_count="calculated_host_listings_count",e.availability_365="availability_365",e.column_16="column_16",e.column_17="column_17"}(l||(l={}));var b=function(){var e=v(),a=n.a.useState(),t=Object(m.a)(a,2),o=t[0],r=t[1],i=Object(_.b)(),p=i.handleSubmit,h=i.control,b=n.a.useCallback((function(e){var a=function(e){return{Inputs:{input1:{ColumnNames:["id","name","host_id","host_name","neighbourhood_group","neighbourhood","latitude","longitude","room_type","price","minimum_nights","number_of_reviews","last_review","reviews_per_month","calculated_host_listings_count","availability_365","Column 16","Column 17"],Values:[[e.id,e.name,e.host_id,e.host_name,e.neighbourhood_group,e.neighbourhood,e.latitude,e.longitude,e.room_type,e.price,e.minimum_nights,e.number_of_reviews,e.last_review,e.reviews_per_month,e.calculated_host_listings_count,e.availability_365,"0","0"]]}},GlobalParameters:{}}}(e);E.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,a,{headers:{Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){console.log(e),r({price:e.data.Results.output1.Values[5],scoredLabelMean:e.data.Results.output1.Values[11],scoredLabelStandardDeviation:e.data.Results.output1.Values[12]})})).catch((function(e){console.log(e),alert(null===e||void 0===e?void 0:e.message)}))}),[]),g=0,f=0;return o&&(g=(null===o||void 0===o?void 0:o.scoredLabelMean)+(null===o||void 0===o?void 0:o.scoredLabelStandardDeviation),f=(null===o||void 0===o?void 0:o.scoredLabelMean)-(null===o||void 0===o?void 0:o.scoredLabelStandardDeviation)),n.a.createElement("div",{className:e.app},n.a.createElement("header",{className:e.header},n.a.createElement("h1",null,"Airbnb Price Prediction")),n.a.createElement("main",{className:e.main},n.a.createElement("form",{onSubmit:p(b)},n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.id,className:e.inputLabel},l.id.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.id})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.name,className:e.inputLabel},l.name.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.name})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.host_id,className:e.inputLabel},l.host_id.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.host_id})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.host_name,className:e.inputLabel},l.host_name.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.host_name})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.neighbourhood_group,className:e.inputLabel},l.neighbourhood_group.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.neighbourhood_group})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.neighbourhood,className:e.inputLabel},l.neighbourhood.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.neighbourhood})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.latitude,className:e.inputLabel},l.latitude.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.latitude})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.longitude,className:e.inputLabel},l.longitude.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.longitude})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.room_type,className:e.inputLabel},l.room_type.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.room_type})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.price,className:e.inputLabel},l.price.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.price})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.minimum_nights,className:e.inputLabel},l.minimum_nights.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.minimum_nights})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.number_of_reviews,className:e.inputLabel},l.number_of_reviews.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.number_of_reviews})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.last_review,className:e.inputLabel},l.last_review.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.last_review})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.reviews_per_month,className:e.inputLabel},l.reviews_per_month.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.reviews_per_month})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.calculated_host_listings_count,className:e.inputLabel},l.calculated_host_listings_count.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.calculated_host_listings_count})),n.a.createElement(c.a,{required:!0,className:e.formControl},n.a.createElement(s.a,{htmlFor:l.availability_365,className:e.inputLabel},l.availability_365.toUpperCase()),n.a.createElement(_.a,{as:n.a.createElement(u.a,null),control:h,defaultValue:"",name:l.availability_365})),n.a.createElement(d.a,{type:"submit",variant:"contained",className:e.button},"Submit"))),o&&n.a.createElement("section",{className:e.section},n.a.createElement("p",null,"Predicted price is: ",null===o||void 0===o?void 0:o.scoredLabelMean),n.a.createElement("p",null,"Predicted price deviation is: ",null===o||void 0===o?void 0:o.scoredLabelStandardDeviation),(null===o||void 0===o?void 0:o.price)>g&&n.a.createElement("p",{className:e.expensive},"Too expensive!"),(null===o||void 0===o?void 0:o.price)<f&&n.a.createElement("p",{className:e.cheap},"Cheap accomodation!"),(null===o||void 0===o?void 0:o.price)>f&&(null===o||void 0===o?void 0:o.price)<g&&n.a.createElement("p",null,"Reasonable price!")))},v=Object(p.a)({app:{textAlign:"center",backgroundColor:"#282c34",fontSize:"calc(10px + 2vmin)",color:"white",minHeight:"100vh",paddingBottom:"50px"},header:{margin:"0px",padding:"20px"},main:{backgroundColor:"white",maxWidth:"400px",margin:"0 auto",padding:"20px",borderRadius:"10px"},formControl:{width:"100%",paddingTop:"8px",paddingBottom:"8px"},inputLabel:{fontWeight:"bold"},button:{width:"100%",marginTop:"20px",marginBottom:"20px",fontWeight:"bold"},section:{maxWidth:"600px"},cheap:{color:"green"},expensive:{color:"red"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ca9d55b6.chunk.js.map