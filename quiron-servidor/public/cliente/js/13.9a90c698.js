(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{a30e:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("mostrar-campo",{attrs:{etiqueta:"Serial"}},[o("q-input",{model:{value:e.nuevoEquipo.serial,callback:function(t){e.$set(e.nuevoEquipo,"serial",t)},expression:"nuevoEquipo.serial"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Marca"}},[o("q-input",{model:{value:e.nuevoEquipo.marca,callback:function(t){e.$set(e.nuevoEquipo,"marca",t)},expression:"nuevoEquipo.marca"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Modelo"}},[o("q-input",{model:{value:e.nuevoEquipo.modelo,callback:function(t){e.$set(e.nuevoEquipo,"modelo",t)},expression:"nuevoEquipo.modelo"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Serie"}},[o("q-input",{model:{value:e.nuevoEquipo.serie,callback:function(t){e.$set(e.nuevoEquipo,"serie",t)},expression:"nuevoEquipo.serie"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Codigo"}},[o("q-input",{model:{value:e.nuevoEquipo.codigo,callback:function(t){e.$set(e.nuevoEquipo,"codigo",t)},expression:"nuevoEquipo.codigo"}})],1),o("buscador-unitario",{attrs:{etiqueta:"Responsable",buscador:e.buscadorCliente},model:{value:e.nuevoEquipo.responsable,callback:function(t){e.$set(e.nuevoEquipo,"responsable",t)},expression:"nuevoEquipo.responsable"}}),o("buscador-unitario",{attrs:{etiqueta:"Sucursal",buscador:e.buscadorSucursal},model:{value:e.nuevoEquipo.institucion,callback:function(t){e.$set(e.nuevoEquipo,"institucion",t)},expression:"nuevoEquipo.institucion"}}),o("recolector-atributos",{attrs:{etiqueta:"Atributos"},model:{value:e.nuevoEquipo.atributos,callback:function(t){e.$set(e.nuevoEquipo,"atributos",t)},expression:"nuevoEquipo.atributos"}}),o("div",{staticClass:"q-my-xs bg-grey-2"},[o("q-btn",{staticClass:"bg-primary text-white full-width",attrs:{label:"Nuevo Equipo"},on:{click:e.crear}})],1)],1)},i=[],a=o("95ad"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",[o("q-card-section",[e._v("\n    "+e._s(e.etiqueta)+"\n  ")]),o("q-card-section",[o("presentador-por-tabla",{attrs:{esquema:e.buscador.esquema,datos:e.value},on:{selected:e.eliminarContacto}})],1),o("q-card-actions",[o("q-btn",{staticClass:"full-width",attrs:{label:"Añadir"},on:{click:e.buscar}})],1)],1)},r=[],s=o("ab99"),u=function(e,t,o,n){var i,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(a<3?i(c):a>3?i(t,o,c):i(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c},l=function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function c(e){try{s(n.next(e))}catch(t){a(t)}}function r(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):i(e.value).then(c,r)}s((n=n.apply(e,t||[])).next())}))};let p=class extends a["e"]{buscar(){return l(this,void 0,void 0,(function*(){try{const e=yield this.buscador.buscar();this.$set(this.value,this.value.length,e)}catch(e){console.log(e)}}))}eliminarContacto(e,t){this.$delete(this.value,t)}};u([Object(a["b"])()],p.prototype,"value",void 0),u([Object(a["b"])()],p.prototype,"etiqueta",void 0),u([Object(a["b"])()],p.prototype,"buscador",void 0),p=u([Object(a["a"])({name:"buscador-con-tabla",components:{PresentadorPorTabla:s["a"]}})],p);var d=p,b=d,v=o("a6c2"),f=o("5ce7"),q=o("7006"),m=o("84df"),h=o("ef9c"),y=o("63c1"),g=o.n(y),E=Object(v["a"])(b,c,r,!1,null,null,null),x=E.exports;g()(E,"components",{QCard:f["a"],QCardSection:q["a"],QCardActions:m["a"],QBtn:h["a"]});var w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mostrar-campo",{attrs:{etiqueta:e.etiqueta}},[o("q-list",[e._l(e.buscador.esquema,(function(t,n){return""!==e.value[t]?o("q-item",{key:"bu-"+n+"-"+t},[e._v("\n      "+e._s(t)+": "+e._s(e.value[t])+"\n    ")]):e._e()})),o("q-item",[o("q-item-section",[o("q-btn",{staticClass:"full-width bg-white",attrs:{label:"Añadir"},on:{click:e.buscar}})],1)],1)],2)],1)},O=[],j=o("691c"),_=function(e,t,o,n){var i,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(a<3?i(c):a>3?i(t,o,c):i(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c},k=function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function c(e){try{s(n.next(e))}catch(t){a(t)}}function r(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):i(e.value).then(c,r)}s((n=n.apply(e,t||[])).next())}))};let C=class extends a["e"]{buscar(){return k(this,void 0,void 0,(function*(){try{const e=yield this.buscador.buscar();this.$emit("input",e),this.$set(this.value,this.value.length,e),console.log(this.value)}catch(e){console.log(e)}}))}};_([Object(a["b"])()],C.prototype,"value",void 0),_([Object(a["b"])()],C.prototype,"etiqueta",void 0),_([Object(a["b"])()],C.prototype,"buscador",void 0),C=_([Object(a["a"])({name:"buscador-unitario",components:{MostrarCampo:j["a"]}})],C);var $=C,Q=$,P=o("692f"),R=o("e0e9"),A=o("6c44"),I=Object(v["a"])(Q,w,O,!1,null,null,null),S=I.exports;g()(I,"components",{QList:P["a"],QItem:R["a"],QItemSection:A["a"],QBtn:h["a"]});var D=o("378a"),B=o("b2bf"),M=o("e2c2");class N{constructor(e,t,o){this.esquema=e,this.opciones=t,this.clase=o}buscar(){return new Promise(((e,t)=>{B["a"].create({component:M["a"],endpoint:this.opciones.endpoint,clase:this.clase,opciones:this.opciones.opciones,persistent:!0}).onOk((t=>{e(t)})).onCancel((()=>{t()})).onDismiss((()=>{t()}))}))}}class T extends N{constructor(e){super(e,{endpoint:"clientes/instituciones",opciones:{campos_busqueda:[{etiqueta:"Identificacion",valor:"identificacion"},{etiqueta:"Direccion",valor:"direccion"}],campos_presentacion:[{etiqueta:"Identificacion",valor:"identificacion"},{etiqueta:"Direccion",valor:"direccion"}],opciones_busqueda:{}}},D["Institucion"])}}class J extends N{constructor(e){super(e,{endpoint:"clientes",opciones:{campos_busqueda:[{etiqueta:"Nombre",valor:"nombre"},{etiqueta:"Identificacion",valor:"identificacion"}],campos_presentacion:[{etiqueta:"Nombre",valor:"nombre"},{etiqueta:"Identificacion",valor:"identificacion"}],opciones_busqueda:{}}},D["Cliente"])}}var L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",{staticClass:"bg-grey-2 q-my-xs",attrs:{flat:""}},[o("q-card-section",[e._v("\n    "+e._s(e.etiqueta)+"\n  ")]),o("q-card-section",[o("q-markup-table",[o("thead",[o("tr",[o("th",[e._v("Atributo")]),o("th",[e._v("Valor")])])]),o("tbody",e._l(e.value,(function(t,n){return o("tr",{key:"attribute-"+n},[o("td",{staticClass:"q-chip--clickable",on:{click:function(t){return e.remove(n)}}},[e._v("\n          "+e._s(n)+"\n        ")]),o("td",[o("q-input",{model:{value:e.value[n],callback:function(t){e.$set(e.value,n,t)},expression:"value[atributo]"}})],1)])})),0)])],1),o("q-card-section",[o("q-item",[o("q-item-section",{attrs:{side:""}},[o("q-btn",{staticClass:"text-black bg-white",attrs:{label:"Nuevo atributo"},on:{click:e.nuevo}})],1),o("q-item-section",[o("q-select",{attrs:{options:e.opciones},model:{value:e.nuevoAtributo,callback:function(t){e.nuevoAtributo=t},expression:"nuevoAtributo"}})],1),o("q-item-section",{attrs:{side:""}},[o("q-btn",{staticClass:"text-black bg-white",attrs:{label:"Añadir atributo"},on:{click:e.add}})],1)],1)],1)],1)},U=[],V=function(e,t,o,n){var i,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(a<3?i(c):a>3?i(t,o,c):i(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let z=class extends a["e"]{constructor(){super(...arguments),this.opciones=[],this.nuevoAtributo=""}nuevo(){this.$q.dialog({message:"Ingrese el nombre del nuevo atributo",prompt:{model:""}}).onOk((e=>{this.$set(this.opciones,this.opciones.length,e)}))}add(){this.$set(this.value,this.nuevoAtributo,"")}remove(e){this.$delete(this.value,e)}};V([Object(a["b"])()],z.prototype,"etiqueta",void 0),V([Object(a["b"])()],z.prototype,"value",void 0),z=V([Object(a["a"])({name:"recolector-atributos",components:{}})],z);var F=z,G=F,H=o("c101"),K=o("837a"),W=o("a3be"),X=o("f636"),Y=Object(v["a"])(G,L,U,!1,null,null,null),Z=Y.exports;g()(Y,"components",{QCard:f["a"],QCardSection:q["a"],QMarkupTable:H["a"],QChip:K["a"],QInput:W["a"],QItem:R["a"],QItemSection:A["a"],QBtn:h["a"],QSelect:X["a"]});var ee=o("75a0"),te=function(e,t,o,n){var i,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(a<3?i(c):a>3?i(t,o,c):i(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c},oe=function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function c(e){try{s(n.next(e))}catch(t){a(t)}}function r(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):i(e.value).then(c,r)}s((n=n.apply(e,t||[])).next())}))};let ne=class extends a["e"]{constructor(){super(...arguments),this.buscadorCliente=new J(["nombre","identificacion"]),this.buscadorSucursal=new T(["identificacion","direccion","ciudad"]),this.nuevoEquipo=new D["Equipo"]({})}crear(){return oe(this,void 0,void 0,(function*(){try{yield ee["a"].post("equipos",{equipo:this.nuevoEquipo})}catch(e){console.log(e)}}))}};ne=te([Object(a["a"])({name:"crear-equipo",components:{BuscadorUnitario:S,BuscadorConTabla:x,RecolectorAtributos:Z}})],ne);var ie=ne,ae=ie,ce=o("505d"),re=Object(v["a"])(ae,n,i,!1,null,null,null);t["default"]=re.exports;g()(re,"components",{QPage:ce["a"],QInput:W["a"],QBtn:h["a"]})}}]);