(function(e){function t(t){for(var n,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={3:0},a={3:0},i=[];function c(e){return s.p+"js/"+({0:"chunk-common"}[e]||e)+"."+{0:"696c3155",2:"cda5f40a",4:"d08a847b",5:"a1d197e7",6:"958abbc4",7:"231b5ca6",8:"2a60b856",9:"a48ec3e6",10:"b9d254b2",11:"679f451b",12:"76792aba",13:"b40ace2b",14:"01950c45",15:"45e2fef7",16:"49ad09c3"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o={0:1,4:1,5:1,6:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({0:"chunk-common"}[e]||e)+"."+{0:"9e143f3b",2:"31d6cfe0",4:"0a9b360e",5:"31986d34",6:"a7ddc526",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],h.parentNode.removeChild(h),o(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}a[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cliente/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;i.push([0,1]),o()})({0:function(e,t,o){e.exports=o("2f39")},"0047":function(e,t,o){},"0613":function(e,t,o){"use strict";var n=o("2f62"),r=o("2b0e");r["a"].use(n["a"]);const a=new n["a"].Store({state:{},actions:{},mutations:{}});t["a"]=a},"2f39":function(e,t,o){"use strict";o.r(t);o("ac1f"),o("5319"),o("35fc"),o("7d6e"),o("e54f"),o("985d"),o("0047");var n=o("2b0e"),r=o("1f91"),a=o("42d2"),i=o("b05d"),c=o("515f"),s=o("436b"),u=o("2a19"),l=o("18d6");n["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"],plugins:{Cookies:c["a"],Dialog:s["a"],Notify:u["a"],LocalStorage:l["a"]}});var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},h=[],f=o("60a3"),p=(o("98db"),function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i});let b=class extends f["e"]{};b=p([f["a"]],b);var m=b,g=m,v=o("2877"),y=Object(v["a"])(g,d,h,!1,null,null,null),w=y.exports,P=o("0613"),C=o("4bde"),A=o("8c4f"),O=o("edd6");const j=[{path:"/",component:()=>Promise.all([o.e(1),o.e(8)]).then(o.bind(null,"713b")),children:[{path:"",redirect:"/home"},...O["a"].getHubsForVueRouter()]},{path:"*",component:()=>Promise.all([o.e(1),o.e(14)]).then(o.bind(null,"e51e"))}];var H=j,F=Object(C["route"])((function({Vue:e}){e.use(A["a"]);const t=new A["a"]({scrollBehavior:()=>({x:0,y:0}),routes:H,mode:"hash",base:"/cliente/"});return t})),R=async function(){const e="function"===typeof P["a"]?await Object(P["a"])({Vue:n["a"]}):P["a"],t="function"===typeof F?await F({Vue:n["a"],store:e}):F;e.$router=t;const o={router:t,store:e,render:e=>e(w),el:"#q-app"};return{app:o,store:e,router:t}},E=o("bc3a"),S=o.n(E),V=Object(C["boot"])((({Vue:e})=>{e.prototype.$axios=S.a}));const x="/cliente/",k=/\/\//,_=e=>(x+e).replace(k,"/");async function L(){const{app:e,store:t,router:o}=await R();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?_(o.resolve(e).route.fullPath):e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),c=[V];for(let u=0;!1===r&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:o,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:x})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new n["a"](e)}L()},edd6:function(e,t,o){"use strict";var n=o("18d6");class r{constructor(e,t,o,n){this.route=`${e}/${t}`,this.label=o,this.pageComponent=n}get ActionForHubPage(){return{label:this.label,route:this.route}}get ActionForVueRouter(){return{path:this.route,component:this.pageComponent}}}class a{constructor(e,t,n,r=(()=>Promise.all([o.e(1),o.e(2)]).then(o.bind(null,"6c5d")))){this.root="",this.label="",this.actions=[],this.hubComponent=()=>Promise.all([o.e(1),o.e(2)]).then(o.bind(null,"6c5d")),this.icon="",this.root=e,this.label=t,this.actions=[],this.hubComponent=r,this.icon=n}addAction(e,t,o,a){if(a){const i=n["a"].getItem("usuario");i.permisos[a]&&this.actions.push(new r(`/${this.root}`,e,t,o))}else this.actions.push(new r(`/${this.root}`,e,t,o))}isUserAuthorized(){return this.actions.length>0}getActionsForHubPage(){return this.actions.map((e=>e.ActionForHubPage))}getActionsForVueRouter(){return this.actions.map((e=>e.ActionForVueRouter))}get VueRouterConfig(){return{path:this.root,component:this.hubComponent,props:{actions:this.getActionsForHubPage()},children:this.getActionsForVueRouter()}}get HubForLayout(){return{id:this.root,label:this.label,icon:this.icon,actions:this.getActionsForHubPage(),route:`/${this.root}`}}}class i{constructor(){this.hubs=[],this.hubs=[]}addHub(e){e.isUserAuthorized()&&this.hubs.push(e)}getHubsForVueRouter(){return this.hubs.map((e=>e.VueRouterConfig))}getHubsForLayout(){return this.hubs.map((e=>e.HubForLayout))}}const c=new a("usuarios","Usuarios","ion-people");c.addAction("crear","Crear",(()=>Promise.all([o.e(1),o.e(0),o.e(6)]).then(o.bind(null,"d099"))),"Crear@Usuario"),c.addAction("crearRol","Crear Rol",(()=>Promise.all([o.e(1),o.e(0),o.e(16)]).then(o.bind(null,"f489"))),"Crear@Rol");var s=c;const u=new a("home","BlockHome","ion-home");u.addAction("notificaciones","Notificaciones",(()=>Promise.all([o.e(1),o.e(9)]).then(o.bind(null,"7277"))));var l=u;const d=new a("servicios","Servicios","ion-document");d.addAction("crear","Crear Plantilla",(()=>Promise.all([o.e(1),o.e(0),o.e(4)]).then(o.bind(null,"364e"))),"Crear@Plantilla"),d.addAction("llenar","Llenar Plantilla",(()=>Promise.all([o.e(1),o.e(0),o.e(15)]).then(o.bind(null,"5844"))),"Crear@Plantilla");var h=d;const f=new a("clientes","Clientes","ion-business");f.addAction("contacto","Añadir Contacto",(()=>Promise.all([o.e(1),o.e(0),o.e(11)]).then(o.bind(null,"2fc7"))),"Crear@Contacto"),f.addAction("sucursal","Añadir Institucion",(()=>Promise.all([o.e(1),o.e(0),o.e(12)]).then(o.bind(null,"1c39"))),"Crear@Institucion"),f.addAction("crear","Crear Cliente",(()=>Promise.all([o.e(1),o.e(0),o.e(10)]).then(o.bind(null,"6f2a"))),"Crear@Cliente");var p=f;const b=new a("equipos","Equipos","ion-laptop");b.addAction("crear","Añadir Equipo",(()=>Promise.all([o.e(1),o.e(0),o.e(13)]).then(o.bind(null,"a30e"))),"Crear@Equipo");var m=b;const g=new i;g.addHub(l),g.addHub(s),g.addHub(h),g.addHub(p),g.addHub(m);t["a"]=g}});