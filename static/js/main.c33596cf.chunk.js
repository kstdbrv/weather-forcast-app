(this["webpackJsonpcreate-react-app-ts"]=this["webpackJsonpcreate-react-app-ts"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"showLoaderForcast",(function(){return v})),n.d(a,"hideLoaderForcast",(function(){return g})),n.d(a,"showLoaderPast",(function(){return m})),n.d(a,"hideLoaderPast",(function(){return _}));var r={};n.r(r),n.d(r,"getDate",(function(){return x}));var c={};n.r(c),n.d(c,"fetch7DayForecast",(function(){return k})),n.d(c,"fetchPastForecast",(function(){return P}));var o={};n.r(o),n.d(o,"getLocation",(function(){return H}));var i,s,l=n(7),u=n.n(l),d=(n(28),n(1)),f=n.n(d),j=n(8),O=(n(29),n(30),[{name:"Select city",disabled:!0,hidden:!0},{name:"Samara",lat:"53.195873"},{name:"Tolyatti",lat:"53.507836"},{name:"Saratov",lat:"51.533557"},{name:"Kazan",lat:"55.796127"},{name:"Krasnodar",lat:"45.035470"},{name:"\u0421urrent location",lat:"current"}]),p=n(3),h=n(5),b=n(2);function v(){return{type:i.SHOW_LOADER_FORECAST}}function g(){return{type:i.HIDE_LOADER_FORECAST}}function m(){return{type:i.SHOW_LOADER_PAST}}function _(){return{type:i.HIDE_LOADER_PAST}}function x(e){return{type:s.GET_DATE,unixDate:e}}!function(e){e.SHOW_LOADER_FORECAST="SHOW_LOADER_FORECAST",e.HIDE_LOADER_FORECAST="HIDE_LOADER_FORECAST",e.SHOW_LOADER_PAST="SHOW_LOADER_PAST",e.HIDE_LOADER_PAST="HIDE_LOADER_PAST"}(i||(i={})),function(e){e.GET_DATE="GET_DATE",e.GET_LOCATION="GET_LOCATION"}(s||(s={}));var w,E,y=n(6),S=n.n(y),D=n(12),T=n(9),A=n.n(T),C=A.a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),L=A.a.CancelToken.source(),N=A.a.isCancel;!function(e){e.FETCH_7DAYSFORECAST="FETCH_7DAYSFORECAST"}(w||(w={})),function(e){e.FETCH_PAST_FORECAST="FETCH_PAST_FORECAST"}(E||(E={}));var F=function(e){!function(e){if(!e)return!1;var t="number"===typeof e.code,n="string"===typeof e.message;return t&&n}(e)?console.log("something is not an server error"):console.error("Error code: ".concat(e.code,", message: ").concat(e.message))},R="43970c1fd0eb1ec3e95ad78e5bda6745";function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var a=Object(D.a)(S.a.mark((function a(r){var c,o;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(v()),c="/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=").concat(n,"&units=metric&appid=").concat(R),a.next=5,C.get(c,{cancelToken:L.token});case 5:o=a.sent,r({type:w.FETCH_7DAYSFORECAST,data:o.data}),r(g()),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),F(a.t0),N(a.t0)?(console.log("Request canceled",a.t0.message),r(g())):r(g());case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}function P(){return function(){var e=Object(D.a)(S.a.mark((function e(t,n){var a,r,c,o,i,s,l,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.pastCardInfo,c=r.unixDate,o=r.cityLocation,null!==c&&null!==o){e.next=5;break}return e.abrupt("return");case 5:return i=o.lat,s=o.lon,e.prev=6,t(m()),l="/onecall/timemachine?lat=".concat(i,"&lon=").concat(s,"&dt=").concat(c,"&units=metric&appid=").concat(R),e.next=11,C.get(l,{cancelToken:L.token});case 11:u=e.sent,t({type:E.FETCH_PAST_FORECAST,data:u.data}),t(_()),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),F(e.t0),N(e.t0)?(console.log("Request canceled",e.t0.message),t(_())):t(_());case 20:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t,n){return e.apply(this,arguments)}}()}function H(e,t){return function(n){n({type:s.GET_LOCATION,cityLocation:{lat:e,lon:t}}),n(P())}}var I=Object(b.a)(Object(b.a)(Object(b.a)(Object(b.a)({},a),r),o),c),W=function(){var e=Object(p.b)();return Object(h.bindActionCreators)(I,e)};function M(e){switch(e.code){case e.PERMISSION_DENIED:console.error("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:console.error("Location information is unavailable.");break;case e.TIMEOUT:console.error("The request to get user location timed out.");break;default:console.error("Code: ".concat(e.code,": ").concat(e.message))}}var G=n(0),U=function(e){var t=e.forecast7DaysData,n=W().fetch7DayForecast,a={enableHighAccuracy:!0,timeout:1500,maximumAge:0},r=function(e){var t=e.coords.latitude.toString(),a=e.coords.longitude.toString();n(t,a)},c=["select-future__city",Object.keys(t).length?"select-future__city--active":null];return Object(G.jsx)("form",{className:"card-forcast__select select-future",children:Object(G.jsx)("select",{onChange:function(e){if("current"===e.target.value){navigator.geolocation&&navigator.geolocation.getCurrentPosition(r,M,a)}var t=e.target.value;switch(t){case"53.195873":return n(t,"50.100193");case"53.507836":return n(t,"49.420393");case"51.533557":return n(t,"46.034257");case"55.796127":return n(t,"49.106405");case"45.035470":return n(t,"38.975313");default:return}},className:c.join(" "),defaultValue:"Select city",children:O.map((function(e){return Object(G.jsx)("option",{value:e.lat,disabled:e.disabled,hidden:e.hidden,children:e.name},e.name)}))})})},B=(n(57),function(){return Object(G.jsx)("div",{className:"loader-centre",children:Object(G.jsxs)("div",{className:"lds-roller",children:[Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{})]})})});function V(e){var t=new Date(1e3*e),n=t.getDate();n<10&&(n="0"+n);var a=t.getFullYear();return n+" "+function(){switch(t.getMonth()+1){case 1:return"jan";case 2:return"feb";case 3:return"mar";case 4:return"apr";case 5:return"may";case 6:return"jun";case 7:return"jul";case 8:return"aug";case 9:return"sep";case 10:return"oct";case 11:return"nov";case 12:return"dec";default:return}}()+" "+a}n(58);var Y,q=function(e){var t,n=Object(p.c)((function(e){return e.forecastData}));if(window.screen.width>768&&e.currentShowCards.length)t=e.currentShowCards;else if(window.screen.width<768)t=n.daily;else{t=[0,1,2].map((function(e){return n.daily[e]}))}return t.map((function(e){var t=V(e.dt),n=Math.round(e.temp.eve);return Object(G.jsxs)("div",{className:"unit-forecast",children:[Object(G.jsx)("p",{className:"unit-forecast__date",children:t}),e.weather.map((function(e){var t="http://openweathermap.org/img/wn/"+e.icon+"@2x.png";return Object(G.jsx)("img",{className:"unit-forecast__image",src:t,alt:e.description},e.id)})),Object(G.jsxs)("div",{className:"unit-forecast__tmp",children:[Object(G.jsx)("span",{className:"unit-forecast__num",children:n>=0?"+".concat(n):n}),Object(G.jsx)("span",{children:"\xb0"})]})]},e.dt)}))},z=n.p+"static/media/placeholder.1a7907bc.svg",J=(n(59),function(){return Object(G.jsxs)(f.a.Fragment,{children:[Object(G.jsx)("img",{className:"card-forcast__placeholder",src:z,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0433\u043e\u0434\u044b"}),Object(G.jsx)("p",{className:"card-forcast__text",children:"Fill in all the fields and the weather will be displayed"})]})}),K=p.c,X=function(){var e=K((function(e){return e.app})).loading7DaysForecast,t=Object(p.c)((function(e){return e.forecastData})),n=Object(d.useRef)([0,1,2]),a=Object(d.useState)([]),r=Object(j.a)(a,2),c=r[0],o=r[1],i=n.current.includes(7),s=n.current.includes(0),l=["arrow arrow-prev",s?"arrow--disabled":""],u=["arrow arrow-next",i?"arrow--disabled":""];return Object(G.jsxs)("article",{className:"card-forcast card-forcast--future",children:[Object(G.jsx)("h3",{className:"card-forcast__title",children:"7 Days Forecast"}),Object(G.jsx)(U,{forecast7DaysData:t}),e?Object(G.jsx)(B,{}):t.daily?Object(G.jsx)("div",{className:"card-forcast__wrapper",children:Object(G.jsxs)("div",{className:"card-forcast__overflow",children:[Object(G.jsx)(q,{currentShowCards:c}),Object(G.jsx)("button",{className:l.join(" ").trim(),onClick:function(){if(!s){var e=n.current.map((function(e){return e-1}));n.current=e;var a=e.map((function(e){return t.daily[e]}));o((function(e){return a}))}}}),Object(G.jsx)("button",{className:u.join(" ").trim(),onClick:function(){if(!i){var e=n.current.map((function(e){return e+1}));n.current=e;var a=e.map((function(e){return t.daily[e]}));o((function(e){return a}))}}})]})}):Object(G.jsx)(J,{})]})},$=(n(60),function(){var e=W().getLocation,t=K((function(e){return e.pastCardInfo.cityLocation})),n={enableHighAccuracy:!0,timeout:1500,maximumAge:0},a=function(t){var n=t.coords.latitude.toString(),a=t.coords.longitude.toString();e(n,a)},r=["select-past__city",null===t?null:"select-past__city--active"];return Object(G.jsx)("select",{onChange:function(t){if("current"===t.target.value){navigator.geolocation&&navigator.geolocation.getCurrentPosition(a,M,n)}var r=t.target.value;switch(r){case"53.195873":return e(r,"50.100193");case"53.507836":return e(r,"49.420393");case"51.533557":return e(r,"46.034257");case"55.796127":return e(r,"49.106405");case"45.035470":return e(r,"38.975313");default:return}},className:r.join(" ").trim(),defaultValue:"Select city",children:O.map((function(e){return Object(G.jsx)("option",{value:e.lat,disabled:e.disabled,hidden:e.hidden,children:e.name},e.name)}))})}),Q=(n(61),(new Date).getTime()),Z=new Date(Q-432e6).toJSON().slice(0,10),ee=(new Date).getTime(),te=new Date(ee-864e5).toJSON().slice(0,10),ne=function(){var e=K((function(e){return e.pastCardInfo})).unixDate,t=Object(d.useRef)(null),n=Object(d.useRef)(null);Object(d.useEffect)((function(){var a=t.current,r=n.current,c=function(){r.classList.add("select-past__hide-placeholder")},o=function(){r.classList.remove("select-past__hide-placeholder")};return a.addEventListener("focus",c),e||a.addEventListener("blur",o),function(){a.removeEventListener("focus",c),a.removeEventListener("blur",o)}}),[e]);var a=W(),r=a.getDate,c=a.fetchPastForecast,o=["select-past__date",null===e?null:"select-past__date--active"];return Object(G.jsxs)("div",{className:"select-past__wrapper",ref:n,children:[Object(G.jsx)("input",{className:o.join(" ").trim(),type:"date",ref:t,onChange:function(e){var t=e.target.value,n=new Date("".concat(t)).getTime()/1e3;n>Date.now()/1e3||(r(n),c())},min:Z,max:te}),Object(G.jsx)("p",{className:"select-past__placeholder",children:"Select date"})]})},ae=(n(62),function(){var e=Object(p.c)((function(e){return e.pastData})),t=e.hourly[11],n=V(e.current.dt),a=Math.round(t.temp);return Object(G.jsxs)("div",{className:"card-forcast__unit unit-past",children:[Object(G.jsx)("p",{className:"unit-past__date",children:n}),t.weather.map((function(e){var t="http://openweathermap.org/img/wn/"+e.icon+"@2x.png";return Object(G.jsx)("img",{className:"unit-past__image",src:t,alt:e.description},e.id)})),Object(G.jsxs)("div",{className:"unit-past__tmp",children:[Object(G.jsx)("span",{className:"unit-past__num",children:a>=0?"+".concat(a):a}),Object(G.jsx)("span",{children:"\xb0"})]})]})}),re=function(){var e=K((function(e){return e.app})).loadingPastForecast,t=Object(p.c)((function(e){return e.pastData}));return Object(G.jsxs)("article",{className:"card-forcast card-forcast--past",children:[Object(G.jsx)("h3",{className:"card-forcast__title card-forcast__title--left",children:"Forecast for a Date in the Past"}),Object(G.jsxs)("form",{className:"card-forcast__select select-past",children:[Object(G.jsx)($,{}),Object(G.jsx)(ne,{})]}),e?Object(G.jsx)(B,{}):t.hourly?Object(G.jsx)(ae,{}):Object(G.jsx)(J,{})]})};function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,a=e.titleId,r=oe(e,["title","titleId"]);return d.createElement("svg",ce({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?d.createElement("title",{id:a},n):null,Y||(Y=d.createElement("path",{d:"M378.6,206.6C367.2,149.2,316.7,106,256,106c-24.6,0-47.5,7.2-66.8,19.5l24.3,24.3c12.8-6.6,27.2-10.5,42.5-10.5 c50.7,0,91.7,41,91.7,91.7v8.3h25c27.6,0,50,22.4,50,50c0,18.9-10.6,35.2-26.1,43.7l24.2,24.2c21.2-15.1,35.2-39.8,35.2-67.8 C456,245.3,421.8,209.7,378.6,206.6z M106,127.3l45.8,45.7c-53.2,2.2-95.8,46-95.8,99.7c0,55.3,44.7,100,100,100h195.4l33.3,33.3 l21.2-21.2L127.3,106L106,127.3z M184.8,206l133.3,133.3H156c-36.8,0-66.7-29.8-66.7-66.7S119.2,206,156,206H184.8z"})))}var se=d.forwardRef(ie),le=(n.p,n(63),function(){Object(d.useEffect)((function(){r(),window.addEventListener("online",r),window.addEventListener("offline",r)}),[]);var e=Object(d.useState)(!0),t=Object(j.a)(e,2),n=t[0],a=t[1],r=function(){navigator.onLine?a(!0):a(!1)};return Object(G.jsxs)("header",{className:"main-title",children:[!n&&Object(G.jsx)(se,{className:"status-icon",title:"offline"}),Object(G.jsx)("h2",{children:"Weather"}),Object(G.jsx)("h2",{children:"forecast"})]})}),ue=(n(64),n(65),function(){return Object(G.jsx)("footer",{className:"footer",children:Object(G.jsx)("p",{children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})}),de=function(){return Object(G.jsxs)("div",{className:"wrapper",children:[Object(G.jsx)(le,{}),Object(G.jsxs)("main",{className:"container",children:[Object(G.jsx)(X,{}),Object(G.jsx)(re,{})]}),Object(G.jsx)(ue,{})]})},fe=n(22),je=n(23),Oe={loading7DaysForecast:!1,loadingPastForecast:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SHOW_LOADER_FORECAST:return Object(b.a)(Object(b.a)({},e),{},{loading7DaysForecast:!0});case i.HIDE_LOADER_FORECAST:return Object(b.a)(Object(b.a)({},e),{},{loading7DaysForecast:!1});case i.SHOW_LOADER_PAST:return Object(b.a)(Object(b.a)({},e),{},{loadingPastForecast:!0});case i.HIDE_LOADER_PAST:return Object(b.a)(Object(b.a)({},e),{},{loadingPastForecast:!1});default:return e}},he={},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.FETCH_7DAYSFORECAST:return Object(b.a)(Object(b.a)({},e),t.data);default:return e}},ve={},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.FETCH_PAST_FORECAST:return t.data;default:return e}},me={unixDate:null,cityLocation:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.GET_DATE:return Object(b.a)(Object(b.a)({},e),{},{unixDate:t.unixDate});case s.GET_LOCATION:return Object(b.a)(Object(b.a)({},e),{},{cityLocation:t.cityLocation});default:return e}},xe=Object(h.combineReducers)({app:pe,forecastData:be,pastData:ge,pastCardInfo:_e}),we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}console.log(navigator);var Se=Object(h.createStore)(xe,Object(fe.composeWithDevTools)(Object(h.applyMiddleware)(je.a))),De=Object(G.jsx)(p.a,{store:Se,children:Object(G.jsx)(de,{})});u.a.render(De,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(console.log("works serviceWorker register"),new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Ee?(console.log("isLocalhost"),function(e,t){console.log("checkValidServiceWorker"),fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");console.log(a),404===n.status||null!=a&&-1===a.indexOf("javascript")?(console.log("No service worker found"),navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))}))):(ye(e,t),console.log("registerValidSW"))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ye(t,e)}))}}(),we()}},[[66,1,2]]]);
//# sourceMappingURL=main.c33596cf.chunk.js.map