(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4ef1":"4e890f25","chunk-2d0e91cd":"165d7907","chunk-2d22c6a4":"58e8b635","chunk-98f00c96":"8a8255b0"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-98f00c96":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0a4ef1":"31d6cfe0","chunk-2d0e91cd":"31d6cfe0","chunk-2d22c6a4":"31d6cfe0","chunk-98f00c96":"49d5de88"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e),s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,l.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d2c":function(e,t,n){"use strict";var r=n("3201"),a=n.n(r);a.a},"24f4":function(e,t,n){"use strict";n.r(t),t["default"]={base:{test:"测试"}}},3201:function(e,t,n){},"326a":function(e,t,n){var r={"./cn":["24f4"],"./cn.js":["24f4"],"./en":["090b","chunk-2d0a4ef1"],"./en.js":["090b","chunk-2d0a4ef1"]};function a(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id="326a",e.exports=a},"3fbb":function(e,t,n){"use strict";var r=n("4c44"),a=n.n(r);a.a},"4c44":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("7faf"),n("2877")),i={},u=Object(c["a"])(i,a,o,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"layout"},[n("sider-bar"),n("div",{staticClass:"layout__main"},[n("sh-header"),n("sh-breadcrumb",{attrs:{breadcrumbList:e.currentPathLevel}}),n("main-content")],1)],1)},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sider",{staticClass:"layout__sider-bar",attrs:{collapsible:"",collapsed:e.collapsed,trigger:!1,"collapsed-width":64}},[n("div",{staticClass:"logo"},[e._v("LOGO")]),n("v-menu",{attrs:{theme:"dark",mode:"inline",data:e.sideMenuRoutes,"inline-collapsed":e.collapsed},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return[n("router-link",{attrs:{to:r.href}},[r.icon?n("i",{class:"anticon anticon-"+r.icon}):e._e(),n("span",{staticClass:"nav-text"},[e._v(e._s(r.name))])])]}}])})],1)},p=[],m={name:"SiderBar",props:{currentPath:{type:String}},data:function(){return{sideMenuRoutes:[]}},computed:{collapsed:function(){return this.$store.state.collapsed}},mounted:function(){this.generateSideRoutes()},methods:{generateSideRoutes:function(){var e=this,t=function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.filter(function(e){return!e.hidden}).map(function(n){n.href="".concat(r).concat(r?"/":"").concat(n.path);var a=e.$route.matched[0].path===n.href,o=e.$route.fullPath===n.href,c={name:n.meta.title,icon:n.meta.icon,href:n.href,expand:a,selected:o,children:n.children?t(n.children,n.href):null};return c})};this.sideMenuRoutes=t(z),console.log("this.sideMenuRoutes: ",this.sideMenuRoutes)}}},v=m,g=(n("edb3"),Object(c["a"])(v,h,p,!1,null,null,null));g.options.__file="SiderBar.vue";var b=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"layout__header"},[n("div",{staticClass:"header-content"},[n("v-icon",{staticClass:"header-trigger",attrs:{type:this.collapsed?"menu-unfold":"menu-fold"},nativeOn:{click:function(t){return e.handlerToggle(t)}}})],1)])},$=[],S="update_collapse",_={name:"ShHeader",computed:{collapsed:function(){return this.$store.state.collapsed}},methods:{handlerToggle:function(){this.$store.commit(S)}}},w=_,M=(n("0d2c"),Object(c["a"])(w,y,$,!1,null,null,null));M.options.__file="ShHeader.vue";var k=M.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout__breadcrumb"},[n("v-breadcrumb",e._l(e.breadcrumbList,function(t){return n("v-breadcrumb-item",{key:t.name},[e._v(e._s(t.name))])}))],1)},j=[],C={name:"ShBreadcrumb",props:{breadcrumbList:{type:Array,default:function(){}}}},P=C,D=(n("cfe6"),Object(c["a"])(P,O,j,!1,null,"f2ca17d8",null));D.options.__file="ShBreadcrumb.vue";var x=D.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout__main-content"},[n("router-view")],1)},L=[],T=(n("c5ac"),{}),H=Object(c["a"])(T,E,L,!1,null,null,null);H.options.__file="MainContent.vue";var Y=H.exports,A={name:"Layout",components:{SiderBar:b,ShHeader:k,ShBreadcrumb:x,MainContent:Y},computed:{currentPathLevel:function(){return this.generatePathLevel(this.$route)}},methods:{generatePathLevel:function(e){return e.matched.map(function(e){return{name:e.meta.title}})}}},N=A,B=(n("3fbb"),Object(c["a"])(N,d,f,!1,null,null,null));B.options.__file="Layout.vue";var R=B.exports;r["default"].use(l["a"]);var J,z=[{path:"/one",name:"nav-1",meta:{title:"nav-1",icon:"tag"},component:R,children:[{path:"a",name:"a",meta:{title:"1-1",icon:"dot-chart"},component:function(){return n.e("chunk-2d0e91cd").then(n.bind(null,"8bc0"))}},{path:"b",name:"b",meta:{title:"1-2",icon:"pie-chart"},component:function(){return n.e("chunk-2d22c6a4").then(n.bind(null,"f2ac"))}},{path:"c",name:"c",meta:{title:"1-3",icon:"link"},hidden:!0,component:function(){return n.e("chunk-2d0e91cd").then(n.bind(null,"8bc0"))}}]},{path:"/two",name:"nav-2",meta:{title:"nav-2",icon:"paper-clip"},component:R,children:[{path:"aa",name:"bb",meta:{title:"2-1",icon:"link"},component:function(){return n.e("chunk-2d0e91cd").then(n.bind(null,"8bc0"))}}]},{path:"/",redirect:"/one/a",hidden:!0},{path:"*",name:"NotFound",hidden:!0,component:function(){return n.e("chunk-98f00c96").then(n.bind(null,"aa4b"))}}],F=new l["a"]({mode:"history",base:"/",routes:z}),I=n("2f62"),W={},q=n("ade3"),U=(J={},Object(q["a"])(J,S,function(e){e.collapsed=!e.collapsed}),Object(q["a"])(J,"increment",function(e){e.count++}),J),Z={state:{count:100},mutations:{updateTodo:function(e){e.count++}}};r["default"].use(I["a"]);var G=new I["a"].Store({state:{stateRoot:"root",collapsed:!1,count:0},actions:W,mutations:U,modules:{todo:Z}}),K=(n("6762"),n("a925"));n("a481");n("53ca");n("f576"),n("4917");function Q(e){this.$d=this.parseConfig(e),this.init()}Q.prototype={parseConfig:function(e){var t;return e?e instanceof Date?e:(t=String(e).match(/^(\d{4})-?(\d{2})-?(\d{1,2})$/))?new Date(t[1],t[2]-1,t[3]):new Date(e):new Date},padStart:function(e,t,n){return!e||e.length>=t?e:"".concat(Array(t+1-e.length).join(n)).concat(e)},init:function(){this.$zone=this.$d.getTimezoneOffset()/60,this.$zoneStr=this.padStart(String(-1*this.$zone).replace(/^(.)?(\d)/,"$10$200"),5,"+"),this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds()},format:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cn",r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],o="en"===n?r:a,c=["January","February","March","April","May","June","July","August","September","October","November","December"],i=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],u="en"===n?c:i;return t.replace(/Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g,function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return e.padStart(String(e.$M+1),2,"0");case"MMM":return u[e.$M].slice(0,3);case"MMMM":return u[e.$M];case"D":return String(e.$D);case"DD":return e.padStart(String(e.$D),2,"0");case"d":return String(e.$W);case"dddd":return o[e.$W];case"H":return String(e.$H);case"HH":return e.padStart(String(e.$H),2,"0");case"m":return String(e.$m);case"mm":return e.padStart(String(e.$m),2,"0");case"s":return String(e.$s);case"ss":return e.padStart(String(e.$s),2,"0");case"Z":return"".concat(e.$zoneStr.slice(0,-2),":00");default:return e.$zoneStr}})}};n("6b54");function V(e){var t=Object.prototype.toString,n=t.call(e);return n=n.replace(/.*\s(\w+)\]/g,"$1"),n.toLowerCase()}n("ac6a"),n("456d");n("3835"),n("28a5");n("3b2b");function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",t=e;return{get:function(e){var n=window[t].getItem(e);if(!n)return null;try{return JSON.parse(n)}catch(r){return n}},set:function(e,n){n&&"object"===V(n)&&(n=JSON.stringify(n)),window[t].setItem(e,n)},clearAll:function(){window[t].clear()},clearItem:function(e){window[t].removeItem(e)}}}var ee=n("24f4");r["default"].use(K["a"]);var te=new K["a"]({locale:"cn",fallbackLocale:"cn",messages:{cn:ee["default"]}}),ne=["cn"];function re(e,t){return te.locale=e,X().set("pos_language",e),document.querySelector("html").setAttribute("lang",e),e}function ae(e,t){return te.locale!==e?ne.includes(e)?Promise.resolve(re(e,t)):n("326a")("./".concat(e)).then(function(n){return te.setLocaleMessage(e,n.default),ne.push(e),re(e,t)}):Promise.resolve(e)}var oe=te,ce=n("9012"),ie=n.n(ce),ue=(n("96cf"),n("1da1")),se=function(){var e=X().get("pos_language");return e||(e="cn",X().set("pos_language",e)),e};F.beforeEach(function(){var e=Object(ue["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=se(),ae(a).then(function(){return r()});case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}());n("e16a"),n("76fe");r["default"].use(ie.a),r["default"].config.productionTip=!1,new r["default"]({router:F,store:G,i18n:oe,render:function(e){return e(s)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var r=n("8fba"),a=n.n(r);a.a},"8fba":function(e,t,n){},bb4a:function(e,t,n){},c5ac:function(e,t,n){"use strict";var r=n("fa47"),a=n.n(r);a.a},cfe6:function(e,t,n){"use strict";var r=n("f29d"),a=n.n(r);a.a},e16a:function(e,t,n){},edb3:function(e,t,n){"use strict";var r=n("bb4a"),a=n.n(r);a.a},f29d:function(e,t,n){},fa47:function(e,t,n){}});
//# sourceMappingURL=app.56093461.js.map