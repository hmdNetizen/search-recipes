(this["webpackJsonpfood-recipes"]=this["webpackJsonpfood-recipes"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.9cf51d02.png"},31:function(e,t,a){e.exports=a.p+"static/media/loading.a1997869.gif"},32:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=a(12),o=a.n(i),m=a(26),s=a(8),u=(a(38),a(39),a(27)),p=a.n(u),E=a(28),d=a.n(E),f=(a(57),a(10)),b=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{src:d.a,alt:"Logo",width:90})),r.a.createElement("h1",null,"Chefs Mentor")))},g=function(e){var t=e.onSubmit,a=e.showClearBtn,c=e.clearRecipes,l=Object(n.useState)(""),i=Object(s.a)(l,2),o=i[0],m=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),m("")},className:"mx-2"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",value:o,onChange:function(e){m(e.target.value)},className:"form-control bg-light",placeholder:"Search..."}),r.a.createElement("button",{className:"btn btn-block btn-warning mt-2"},"Search"),a&&r.a.createElement("button",{onClick:c,className:"btn btn-block btn-light mb-4 mt-1"},"Clear Recipes")))},h={display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10,textAlign:"left",color:"#f4f4f4"},v=function(e){return r.a.createElement("div",{style:{border:"1px solid rgba(235, 242, 249, .3)",padding:10,margin:"10px 10px 20px"}},r.a.createElement("h4",{className:"text-light"},"Ingredients"),r.a.createElement("ul",{style:h},e.ingredients.map((function(e,t){return r.a.createElement("li",{key:t,style:{padding:10}},e.text)}))))},y=function(e){var t=e.recipe;return r.a.createElement("div",{className:"recipe-details"},r.a.createElement("h3",null,"Recipes"),r.a.createElement("img",{src:t.recipe.image,alt:"alt",width:200}),r.a.createElement("h2",null,t.recipe.label),r.a.createElement("p",null,"Calories: ",r.a.createElement("br",null),r.a.createElement("span",null,Math.round(t.recipe.calories))),r.a.createElement(v,{ingredients:t.recipe.ingredients}),r.a.createElement("a",{href:t.recipe.url},"Recipe Details"))},x=(a(63),a(31)),N=a.n(x),O={display:"block",margin:"0 auto"},S=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:N.a,alt:"spinner",width:70,style:O}))},_=function(e){var t=e.recipes;return e.loading?r.a.createElement(S,null):r.a.createElement("div",{className:"recipe-container"},t.map((function(e,t){return r.a.createElement(y,{recipe:e,key:e.recipe.uri})})))},C={margin:"0 10px"},k=function(e){var t=e.alert;return 0!==Object.keys(t).length&&r.a.createElement("div",{style:C,className:"alert ".concat(t.type)},r.a.createElement("i",{className:"fas fa-exclamation-circle mr-2"}),t.message)},j=a(6),w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Contact me"))},A=(a(64),function(){return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Find Your Favourite Food Recipes")))});console.log("62c6c45e");var P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],E=i[1],d=Object(n.useState)({}),h=Object(s.a)(d,2),v=h[0],y=h[1],x=function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=4;break}O("alert-danger","Please type in something"),e.next=12;break;case 4:return E(!0),"62c6c45e","3abe1ba93082c014b530eaa1739f318b",e.next=9,p.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("62c6c45e","&app_key=").concat("3abe1ba93082c014b530eaa1739f318b","&from=0&to=30"));case 9:a=e.sent,c(a.data.hits),E(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){c([]),E(!1)},O=function(e,t){y({type:e,message:t}),setTimeout((function(){return y({})}),2e3)};return r.a.createElement(f.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(A,null),r.a.createElement("h1",null,Object({NODE_ENV:"production",PUBLIC_URL:"/hmdNetizen/search-recipes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_ID:"62c6c45e",REACT_APP_API_KEY:"3abe1ba93082c014b530eaa1739f318b"}).MY_NAME),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(k,{alert:v}),r.a.createElement(g,{onSubmit:x,showClearBtn:a.length>0,clearRecipes:N}),r.a.createElement(_,{recipes:a,loading:u}))}}),r.a.createElement(j.a,{path:"/contact",component:w})),r.a.createElement("footer",null,r.a.createElement("div",null,"\xa9Copyright - Hamed Ayinde Jimoh")))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d304613b.chunk.js.map