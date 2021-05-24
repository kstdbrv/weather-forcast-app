(this["webpackJsonpcreate-react-app-ts"]=this["webpackJsonpcreate-react-app-ts"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),r=(a(27),a(1)),s=a.n(r),i=a(2),u=(a(34),a(35),a(6)),o=a.n(u),l=a(11),d=a(8),j=a.n(d),f=j.a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),b=j.a.CancelToken.source(),p=j.a.isCancel,O="APP/SHOW_LOADER_FORECAST",h="APP/SHOW_LOADER_PAST",m="APP/HIDE_LOADER_FORECAST",x="APP/HIDE_LOADER_PAST",v="FETCH_7DAYSFORECAST",_="FETCH_PAST_FORECAST",g="GET_DATE",y="GET_LOCATION";function N(){return{type:O}}function w(){return{type:m}}function D(){return{type:x}}var C="43970c1fd0eb1ec3e95ad78e5bda6745";function E(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var c=Object(l.a)(o.a.mark((function c(n){var r,s;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n(N()),r="/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=").concat(a,"&units=metric&appid=").concat(C),c.next=5,f.get(r,{cancelToken:b.token});case 5:s=c.sent,n({type:v,data:s.data}),n(w()),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),p(c.t0)?(console.log("Request canceled",c.t0.message),n(w())):n(w());case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}function T(){return function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c,n,r,s,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a(),n=c.pastCardInfo,r=n.unixDate,s=n.cityLocation,null!==r&&null!==s){e.next=5;break}return e.abrupt("return");case 5:return i=s.lat,u=s.lon,e.prev=6,t({type:h}),l="/onecall/timemachine?lat=".concat(i,"&lon=").concat(u,"&dt=").concat(r,"&units=metric&appid=").concat(C),e.next=11,f.get(l,{cancelToken:b.token});case 11:d=e.sent,t({type:_,data:d.data}),t(D()),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),p(e.t0)?(console.log("Request canceled",e.t0.message),t(D())):t(D());case 19:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t,a){return e.apply(this,arguments)}}()}var A=[{name:"Select city",disabled:!0,hidden:!0},{name:"\u0421\u0430\u043c\u0430\u0440\u0430",lat:"53.195873"},{name:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",lat:"53.507836"},{name:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",lat:"51.533557"},{name:"\u041a\u0430\u0437\u0430\u043d\u044c",lat:"55.796127"},{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",lat:"45.035470"}],F=a(0),P=function(e){var t=e.data,a=Object(i.b)(),c=["select-future__city",Object.keys(t).length?"select-future__city--active":null];return Object(F.jsx)("form",{className:"card-forcast__select select-future",children:Object(F.jsx)("select",{onChange:function(e){var t=e.target.value;switch(t){case"53.195873":return a(E(t,"50.100193"));case"53.507836":return a(E(t,"49.420393"));case"51.533557":return a(E(t,"46.034257"));case"55.796127":return a(E(t,"49.106405"));case"45.035470":return a(E(t,"38.975313"));default:return}},className:c.join(" "),defaultValue:"Select city",children:A.map((function(e){return Object(F.jsx)("option",{value:e.lat,disabled:e.disabled,hidden:e.hidden,children:e.name},e.name)}))})})},S=(a(56),function(){return Object(F.jsx)("div",{className:"loader-centre",children:Object(F.jsxs)("div",{className:"lds-roller",children:[Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{})]})})});function k(e){var t=new Date(1e3*e),a=t.getDate(),c=t.getFullYear();return a+" "+function(){switch(t.getMonth()+1){case 1:return"jan";case 2:return"feb";case 3:return"mar";case 4:return"apr";case 5:return"may";case 6:return"jun";case 7:return"jul";case 8:return"aug";case 9:return"sep";case 10:return"oct";case 11:return"nov";case 12:return"dec";default:return}}()+" "+c}function L(e){var t=Math.round(e);return t=function(){if(e>=0)return"+"+t.toString()}()}a(57);var R=function(){return Object(i.c)((function(e){return e.forecastData})).daily.map((function(e){var t=k(e.dt),a=L(e.temp.eve);return Object(F.jsxs)("div",{className:"unit-forecast",children:[Object(F.jsx)("p",{className:"unit-forecast__date",children:t}),e.weather.map((function(e){var t="http://openweathermap.org/img/wn/"+e.icon+"@2x.png";return Object(F.jsx)("img",{className:"unit-forecast__image",src:t,alt:e.description},e.id)})),Object(F.jsxs)("div",{className:"unit-forecast__tmp",children:[Object(F.jsx)("span",{className:"unit-forecast__num",children:a}),Object(F.jsx)("span",{children:"\xb0"})]})]},e.dt)}))},I=a.p+"static/media/placeholder.a6938fd6.svg",H=(a(58),function(){return Object(F.jsxs)(s.a.Fragment,{children:[Object(F.jsx)("img",{className:"card-forcast__placeholder",src:I,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0433\u043e\u0434\u044b"}),Object(F.jsx)("p",{className:"card-forcast__text",children:"Fill in all the fields and the weather will be displayed"})]})}),M=function(){var e=Object(i.c)((function(e){return e.app.loadingForecast})),t=Object(i.c)((function(e){return e.forecastData}));return Object(F.jsxs)("article",{className:"card-forcast card-forcast--future",children:[Object(F.jsx)("h3",{className:"card-forcast__title",children:"7 Days Forecast"}),Object(F.jsx)(P,{data:t}),e?Object(F.jsx)(S,{}):Object.keys(t).length?Object(F.jsx)("div",{className:"card-forcast__wrapper",children:Object(F.jsx)("div",{className:"card-forcast__overflow",children:Object(F.jsx)(R,{})})}):Object(F.jsx)(H,{})]})};a(59);function W(e,t){return function(a){a({type:y,cityLocation:{lat:e,lon:t}}),a(T())}}var q=function(e){var t=e.data,a=Object(i.b)(),c=["select-past__city",null===t?null:"select-past__city--active"];return Object(F.jsx)("select",{onChange:function(e){var t=e.target.value;switch(t){case"53.195873":return a(W(t,"50.100193"));case"53.507836":return a(W(t,"49.420393"));case"51.533557":return a(W(t,"46.034257"));case"55.796127":return a(W(t,"49.106405"));case"45.035470":return a(W(t,"38.975313"));default:return}},className:c.join(" "),defaultValue:"Select city",children:A.map((function(e){return Object(F.jsx)("option",{value:e.lat,disabled:e.disabled,hidden:e.hidden,children:e.name},e.name)}))})};a(60);var V=function(e){var t=e.data;Object(r.useEffect)((function(){document.querySelector(".select-past__date").setAttribute("onfocus","(this.type='date')")}),[]);var a=Object(i.b)(),c=["select-past__date",null===t?null:"select-past__date--active"];return Object(F.jsx)("input",{className:c.join(" "),type:"text",placeholder:"Select date",onChange:function(e){var t=e.target.value,c=new Date("".concat(t)).getTime()/1e3;a(function(e){return{type:g,unixDate:e}}(c)),a(T())}})},Y=(a(61),function(){var e=Object(i.c)((function(e){return e.pastData})),t=e.hourly[11],a=k(e.current.dt),c=L(t.temp);return Object(F.jsxs)("div",{className:"card-forcast__unit unit-past",children:[Object(F.jsx)("p",{className:"unit-past__date",children:a}),t.weather.map((function(e){var t="http://openweathermap.org/img/wn/"+e.icon+"@2x.png";return Object(F.jsx)("img",{className:"unit-past__image",src:t,alt:e.description},e.id)})),Object(F.jsxs)("div",{className:"unit-past__tmp",children:[Object(F.jsx)("span",{className:"unit-past__num",children:c}),Object(F.jsx)("span",{children:"\xb0"})]})]})}),B=function(){var e=Object(i.c)((function(e){return e.app.loadingPast})),t=Object(i.c)((function(e){return e.pastData})),a=Object(i.c)((function(e){return e.pastCardInfo})).cityLocation,c=Object(i.c)((function(e){return e.pastCardInfo})).unixDate;return Object(F.jsxs)("article",{className:"card-forcast card-forcast--past",children:[Object(F.jsx)("h3",{className:"card-forcast__title card-forcast__title--left",children:"Forecast for a Date in the Past"}),Object(F.jsxs)("form",{className:"card-forcast__select select-past",children:[Object(F.jsx)(q,{data:a}),Object(F.jsx)(V,{data:c})]}),e?Object(F.jsx)(S,{}):Object.keys(t).length?Object(F.jsx)(Y,{}):Object(F.jsx)(H,{})]})},G=(a(62),function(){return Object(F.jsxs)("header",{className:"main-title",children:[Object(F.jsx)("h2",{children:"Weather"}),Object(F.jsx)("h2",{children:"forecast"})]})}),J=(a(63),a(64),function(){return Object(F.jsx)("footer",{className:"footer",children:Object(F.jsx)("p",{children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})}),U=function(){return Object(F.jsxs)("div",{className:"wrapper",children:[Object(F.jsx)(G,{}),Object(F.jsxs)("main",{className:"container",children:[Object(F.jsx)(M,{}),Object(F.jsx)(B,{})]}),Object(F.jsx)(J,{})]})},z=a(5),K=a(21),Q=a(22),X=a(3),Z={loadingForecast:!1,loadingPast:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(X.a)(Object(X.a)({},e),{},{loadingForecast:!0});case m:return Object(X.a)(Object(X.a)({},e),{},{loadingForecast:!1});case h:return Object(X.a)(Object(X.a)({},e),{},{loadingPast:!0});case x:return Object(X.a)(Object(X.a)({},e),{},{loadingPast:!1});default:return e}},ee={},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.data;default:return e}},ae={},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.data;default:return e}},ne={unixDate:null,cityLocation:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(X.a)(Object(X.a)({},e),{},{unixDate:t.unixDate});case y:return Object(X.a)(Object(X.a)({},e),{},{cityLocation:t.cityLocation});default:return e}},se=Object(z.combineReducers)({app:$,forecastData:te,pastData:ce,pastCardInfo:re}),ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},ue=Object(z.createStore)(se,Object(K.composeWithDevTools)(Object(z.applyMiddleware)(Q.a))),oe=Object(F.jsx)(i.a,{store:ue,children:Object(F.jsx)(U,{})});n.a.render(oe,document.getElementById("root")),ie()}},[[65,1,2]]]);
//# sourceMappingURL=main.b0ebe261.chunk.js.map