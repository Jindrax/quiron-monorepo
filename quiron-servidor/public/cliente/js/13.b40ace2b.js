(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{a30e:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("mostrar-campo",{attrs:{etiqueta:"Serial"}},[o("q-input",{model:{value:e.nuevoEquipo.serial,callback:function(t){e.$set(e.nuevoEquipo,"serial",t)},expression:"nuevoEquipo.serial"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Marca"}},[o("q-input",{model:{value:e.nuevoEquipo.marca,callback:function(t){e.$set(e.nuevoEquipo,"marca",t)},expression:"nuevoEquipo.marca"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Modelo"}},[o("q-input",{model:{value:e.nuevoEquipo.modelo,callback:function(t){e.$set(e.nuevoEquipo,"modelo",t)},expression:"nuevoEquipo.modelo"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Serie"}},[o("q-input",{model:{value:e.nuevoEquipo.serie,callback:function(t){e.$set(e.nuevoEquipo,"serie",t)},expression:"nuevoEquipo.serie"}})],1),o("mostrar-campo",{attrs:{etiqueta:"Codigo"}},[o("q-input",{model:{value:e.nuevoEquipo.codigo,callback:function(t){e.$set(e.nuevoEquipo,"codigo",t)},expression:"nuevoEquipo.codigo"}})],1),o("buscador-unitario",{attrs:{etiqueta:"Responsable",buscador:e.buscadorCliente},model:{value:e.nuevoEquipo.responsable,callback:function(t){e.$set(e.nuevoEquipo,"responsable",t)},expression:"nuevoEquipo.responsable"}}),o("buscador-unitario",{attrs:{etiqueta:"Sucursal",buscador:e.buscadorSucursal},model:{value:e.nuevoEquipo.institucion,callback:function(t){e.$set(e.nuevoEquipo,"institucion",t)},expression:"nuevoEquipo.institucion"}}),o("recolector-atributos",{attrs:{etiqueta:"Atributos"},model:{value:e.nuevoEquipo.atributos,callback:function(t){e.$set(e.nuevoEquipo,"atributos",t)},expression:"nuevoEquipo.atributos"}}),o("div",{staticClass:"q-my-xs bg-grey-2"},[o("q-btn",{staticClass:"bg-primary text-white full-width",attrs:{label:"Nuevo Equipo"},on:{click:e.crear}})],1)],1)},a=[],i=o("60a3"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",[o("q-card-section",[e._v("\n    "+e._s(e.etiqueta)+"\n  ")]),o("q-card-section",[o("presentador-por-tabla",{attrs:{esquema:e.buscador.esquema,datos:e.value},on:{selected:e.eliminarContacto}})],1),o("q-card-actions",[o("q-btn",{staticClass:"full-width",attrs:{label:"Añadir"},on:{click:e.buscar}})],1)],1)},r=[],u=o("ab99"),s=function(e,t,o,n){var a,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(c=(i<3?a(c):i>3?a(t,o,c):a(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},l=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function c(e){try{u(n.next(e))}catch(t){i(t)}}function r(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?o(e.value):a(e.value).then(c,r)}u((n=n.apply(e,t||[])).next())}))};let p=class extends i["e"]{buscar(){return l(this,void 0,void 0,(function*(){try{const e=yield this.buscador.buscar();this.$set(this.value,this.value.length,e)}catch(e){console.log(e)}}))}eliminarContacto(e,t){this.$delete(this.value,t)}};s([Object(i["b"])()],p.prototype,"value",void 0),s([Object(i["b"])()],p.prototype,"etiqueta",void 0),s([Object(i["b"])()],p.prototype,"buscador",void 0),p=s([Object(i["a"])({name:"buscador-con-tabla",components:{PresentadorPorTabla:u["a"]}})],p);var b=p,d=b,v=o("2877"),f=o("f09f"),q=o("a370"),m=o("4b7e"),h=o("9c40"),y=o("eebe"),g=o.n(y),E=Object(v["a"])(d,c,r,!1,null,null,null),w=E.exports;g()(E,"components",{QCard:f["a"],QCardSection:q["a"],QCardActions:m["a"],QBtn:h["a"]});var x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mostrar-campo",{attrs:{etiqueta:e.etiqueta}},[o("q-list",[e._l(e.buscador.esquema,(function(t,n){return""!==e.value[t]?o("q-item",{key:"bu-"+n+"-"+t},[e._v("\n      "+e._s(t)+": "+e._s(e.value[t])+"\n    ")]):e._e()})),o("q-item",[o("q-item-section",[o("q-btn",{staticClass:"full-width bg-white",attrs:{label:"Añadir"},on:{click:e.buscar}})],1)],1)],2)],1)},O=[],j=o("691c"),k=function(e,t,o,n){var a,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(c=(i<3?a(c):i>3?a(t,o,c):a(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},_=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function c(e){try{u(n.next(e))}catch(t){i(t)}}function r(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?o(e.value):a(e.value).then(c,r)}u((n=n.apply(e,t||[])).next())}))};let C=class extends i["e"]{buscar(){return _(this,void 0,void 0,(function*(){try{const e=yield this.buscador.buscar();this.$emit("input",e),this.$set(this.value,this.value.length,e),console.log(this.value)}catch(e){console.log(e)}}))}};k([Object(i["b"])()],C.prototype,"value",void 0),k([Object(i["b"])()],C.prototype,"etiqueta",void 0),k([Object(i["b"])()],C.prototype,"buscador",void 0),C=k([Object(i["a"])({name:"buscador-unitario",components:{MostrarCampo:j["a"]}})],C);var $=C,Q=$,P=o("1c1c"),R=o("66e5"),A=o("4074"),S=Object(v["a"])(Q,x,O,!1,null,null,null),I=S.exports;g()(S,"components",{QList:P["a"],QItem:R["a"],QItemSection:A["a"],QBtn:h["a"]});var B=o("764a"),D=o("c50a"),M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",{staticClass:"bg-grey-2 q-my-xs",attrs:{flat:""}},[o("q-card-section",[e._v("\n    "+e._s(e.etiqueta)+"\n  ")]),o("q-card-section",[o("q-markup-table",[o("thead",[o("tr",[o("th",[e._v("Atributo")]),o("th",[e._v("Valor")])])]),o("tbody",e._l(e.value,(function(t,n){return o("tr",{key:"attribute-"+n},[o("td",{staticClass:"q-chip--clickable",on:{click:function(t){return e.remove(n)}}},[e._v("\n          "+e._s(n)+"\n        ")]),o("td",[o("q-input",{model:{value:e.value[n],callback:function(t){e.$set(e.value,n,t)},expression:"value[atributo]"}})],1)])})),0)])],1),o("q-card-section",[o("q-item",[o("q-item-section",{attrs:{side:""}},[o("q-btn",{staticClass:"text-black bg-white",attrs:{label:"Nuevo atributo"},on:{click:e.nuevo}})],1),o("q-item-section",[o("q-select",{attrs:{options:e.opciones},model:{value:e.nuevoAtributo,callback:function(t){e.nuevoAtributo=t},expression:"nuevoAtributo"}})],1),o("q-item-section",{attrs:{side:""}},[o("q-btn",{staticClass:"text-black bg-white",attrs:{label:"Añadir atributo"},on:{click:e.add}})],1)],1)],1)],1)},T=[],J=function(e,t,o,n){var a,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(c=(i<3?a(c):i>3?a(t,o,c):a(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};let N=class extends i["e"]{constructor(){super(...arguments),this.opciones=[],this.nuevoAtributo=""}nuevo(){this.$q.dialog({message:"Ingrese el nombre del nuevo atributo",prompt:{model:""}}).onOk((e=>{this.$set(this.opciones,this.opciones.length,e)}))}add(){this.$set(this.value,this.nuevoAtributo,"")}remove(e){this.$delete(this.value,e)}};J([Object(i["b"])()],N.prototype,"etiqueta",void 0),J([Object(i["b"])()],N.prototype,"value",void 0),N=J([Object(i["a"])({name:"recolector-atributos",components:{}})],N);var L=N,U=L,V=o("2bb1"),z=o("b047"),F=o("27f9"),G=o("ddd8"),H=Object(v["a"])(U,M,T,!1,null,null,null),K=H.exports;g()(H,"components",{QCard:f["a"],QCardSection:q["a"],QMarkupTable:V["a"],QChip:z["a"],QInput:F["a"],QItem:R["a"],QItemSection:A["a"],QBtn:h["a"],QSelect:G["a"]});var W=o("75a0"),X=function(e,t,o,n){var a,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(c=(i<3?a(c):i>3?a(t,o,c):a(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},Y=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function c(e){try{u(n.next(e))}catch(t){i(t)}}function r(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?o(e.value):a(e.value).then(c,r)}u((n=n.apply(e,t||[])).next())}))};let Z=class extends i["e"]{constructor(){super(...arguments),this.buscadorCliente=new D["b"](["nombre","identificacion"]),this.buscadorSucursal=new D["c"](["identificacion","direccion","ciudad"]),this.nuevoEquipo=new B["Equipo"]({})}crear(){return Y(this,void 0,void 0,(function*(){try{yield W["a"].post("equipos",{equipo:this.nuevoEquipo})}catch(e){console.log(e)}}))}};Z=X([Object(i["a"])({name:"crear-equipo",components:{BuscadorUnitario:I,BuscadorConTabla:w,RecolectorAtributos:K}})],Z);var ee=Z,te=ee,oe=o("9989"),ne=Object(v["a"])(te,n,a,!1,null,null,null);t["default"]=ne.exports;g()(ne,"components",{QPage:oe["a"],QInput:F["a"],QBtn:h["a"]})}}]);