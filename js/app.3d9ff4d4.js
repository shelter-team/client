(function(e){function n(n){for(var r,a,i=n[0],u=n[1],s=n[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"58db8936"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},b7e3:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=t("5530"),i=t("2f62"),u=r["a"].extend({name:"App",mounted:function(){this.init()},methods:Object(a["a"])({},Object(i["b"])(["init"]))}),s=u,l=t("2877"),p=Object(l["a"])(s,o,c,!1,null,null,null),f=p.exports,d=t("9483");Object(d["a"])("".concat("/","sw.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var m=t("8c4f"),b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"game container"},[t("Block",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v("Сценарий: "+e._s(e.sess.scenario))]},proxy:!0}])}),t("Block",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v("- Бункер -")]},proxy:!0}])}),t("Block",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v("- Профиль -")]},proxy:!0}])}),t("Block",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v("- Особ. условия -")]},proxy:!0}])}),t("Block",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v("- Кандидаты -")]},proxy:!0}])})],1)},v=[],h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"block"},[e._t("content",[e.title?t("span",[e._v("Title")]):e._e()])],2)},g=[],y=r["a"].extend({name:"Home",components:{},props:{title:{type:String,default:"",required:!1}}}),w=y,k=Object(l["a"])(w,h,g,!1,null,null,null),_=k.exports,j=r["a"].extend({name:"Game",components:{Block:_},computed:Object(a["a"])({},Object(i["c"])(["sess"]))}),x=j,O=Object(l["a"])(x,b,v,!1,null,null,null),S=O.exports;r["a"].use(m["a"]);var P=[{path:"/",name:"home",component:S},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],B=new m["a"]({mode:"history",base:"/",routes:P}),E=B,A=(t("ddb0"),t("96cf"),t("1da1")),T=function(){return{appId:null}},C=T(),R={},M={},$={namespaced:!0,state:C,mutations:M,actions:R},q=function(){return{scenario:"Чума",bunker:{capacity:6},profile:{},people:[]}},N=q(),F={init:function(){return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},J={},L={namespaced:!0,state:N,mutations:J,actions:F};r["a"].use(i["a"]);var G=function(){return{}},H={app:$,sess:L},I=(G(),{init:function(e){return Object(A["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.dispatch,n.t0=regeneratorRuntime.keys(H);case 2:if((n.t1=n.t0()).done){n.next=8;break}return r=n.t1.value,n.next=6,t("".concat(r,"/init"));case 6:n.next=2;break;case 8:case"end":return n.stop()}}),n)})))()}}),z={},D=new i["a"].Store({mutations:z,actions:I,modules:H});t("b7e3");r["a"].config.productionTip=!1,new r["a"]({router:E,store:D,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.3d9ff4d4.js.map