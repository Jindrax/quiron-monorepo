(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"2fc7":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("crear-contacto",{on:{creado:e.nuevoContacto}})],1)},c=[],a=n("95ad"),r=n("5bfb"),i=n("ae1d"),s=n("8e85"),l=n("ab99"),f=n("c9bd"),u=n("75a0"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",e._l(Object.getOwnPropertyNames(e.entidad).filter((function(e){return!e.startsWith("_")})),(function(t){return n("q-item",{key:t},[n("q-item-section",[e._v(e._s(t))]),n("q-item-section",[e._v(e._s(e.entidad[t]))])],1)})),1)},p=[],b=function(e,t,n,o){var c,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(r=(a<3?c(r):a>3?c(t,n,r):c(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let m=class extends a["e"]{mounted(){console.log(this.entidad),console.log("Me estan cargando")}};b([Object(a["b"])()],m.prototype,"entidad",void 0),m=b([Object(a["a"])({name:"presentador-por-entidad",components:{}})],m);var v=m,y=v,h=n("a6c2"),g=n("692f"),O=n("e0e9"),j=n("6c44"),w=n("63c1"),P=n.n(w),_=Object(h["a"])(y,d,p,!1,null,null,null),q=_.exports;P()(_,"components",{QList:g["a"],QItem:O["a"],QItemSection:j["a"]});var C=function(e,t,n,o){var c,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(r=(a<3?c(r):a>3?c(t,n,r):c(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},x=function(e,t,n,o){function c(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function r(e){try{s(o.next(e))}catch(t){a(t)}}function i(e){try{s(o["throw"](e))}catch(t){a(t)}}function s(e){e.done?n(e.value):c(e.value).then(r,i)}s((o=o.apply(e,t||[])).next())}))};let R=class extends a["e"]{nuevoContacto(e){return x(this,void 0,void 0,(function*(){try{yield u["a"].post("clientes/contactos",{contacto:e}),this.$q.notify(`EL contacto ${e.nombres} ha sido creado correctamente`)}catch(t){this.$q.notify(JSON.stringify(t))}}))}};R=C([Object(a["a"])({name:"crear-contacto-pagina",components:{PresentadorPorEntidad:q,EditarContacto:f["a"],PresentadorPorTabla:l["a"],CrearContacto:s["a"],CrearInstitucion:i["a"],MostrarCampo:r["a"]}})],R);var E=R,$=E,Q=n("505d"),k=Object(h["a"])($,o,c,!1,null,null,null);t["default"]=k.exports;P()(k,"components",{QPage:Q["a"]})}}]);