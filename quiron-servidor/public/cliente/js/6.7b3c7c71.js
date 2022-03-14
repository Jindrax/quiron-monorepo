(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"9faf":function(t,a,e){},d209:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"column q-gutter-sm"},[e("q-stepper",{ref:"stepper",staticClass:"col",attrs:{"alternative-labels":"",animated:"",color:"primary"},model:{value:t.step,callback:function(a){t.step=a},expression:"step"}},[e("q-step",{staticClass:"column",attrs:{done:t.step>1,name:1,"active-icon":"format_list_bulleted",title:"Escoger plantilla o formulario"}},[e("div",{staticClass:"col-auto"},[e("buscador-unitario",{attrs:{buscador:t.buscadorOT,etiqueta:"OT"},on:{input:t.otSelected},model:{value:t.ot,callback:function(a){t.ot=a},expression:"ot"}})],1),t.plantillas.length>0?e("q-list",{staticClass:"col-auto column q-pa-sm",attrs:{separator:""}},[e("span",{staticClass:"col-auto"},[t._v("Plantillas")]),e("q-separator"),t._l(t.plantillas,(function(a){return e("q-item",{key:a.serial,staticClass:"col-auto"},[e("q-item-section",[e("q-item-label",[t._v(t._s(a.identificador))])],1),e("q-item-section",{attrs:{side:""}},[e("q-btn",{staticClass:"advance-btn",attrs:{label:"Llenar"},on:{click:function(e){return t.selectPlantilla(a)}}})],1)],1)}))],2):t._e(),t.ot.formularios.length>0?e("q-list",{staticClass:"col-auto column q-pa-sm",attrs:{separator:""}},[e("span",{staticClass:"col-auto"},[t._v("Formularios")]),e("q-separator"),t._l(t.ot.formularios,(function(a){return e("q-item",{key:a.id,staticClass:"col-auto"},[e("q-item-section",[e("q-item-label",[t._v(t._s(a.identificadorPlantilla))])],1),e("q-item-section",{attrs:{side:""}},[e("q-btn",{staticClass:"advance-btn",attrs:{label:"Visualizar"},on:{click:function(e){return t.visualizeFormulario(a)}}})],1)],1)}))],2):t._e()],1),e("q-step",{staticClass:"column q-gutter-sm",attrs:{done:t.step>2,name:2,icon:"mode",title:"Llenar plantilla"}},[t._l(t.formulario.plantilla.modelo.elementos,(function(a){return t.formulario.plantilla.modelo!=={}?e("campo",{key:"pc-"+a.etiqueta,staticClass:"col",attrs:{data:t.compendio,elemento:a,path:t.formulario.plantilla.identificador,printable:!1}}):t._e()})),e("div",{staticClass:"col-auto row items-end justify-end q-gutter-sm"},[e("q-btn",{staticClass:"col revert-btn",attrs:{label:"Cancelar"},on:{click:t.cancelPlantilla}}),e("q-btn",{staticClass:"col warn-btn",attrs:{label:"Borrador"}}),e("q-btn",{staticClass:"col advance-btn",attrs:{label:"Guardar"},on:{click:t.crear}})],1)],2),e("q-step",{staticClass:"col",attrs:{done:t.step>3,name:3,icon:"mode",title:"Visualizar plantilla"}},[t.formulario.plantilla.modelo!=={}?e("seccion-presentacion",{staticClass:"a4",attrs:{data:t.formulario.datos,elemento:t.formulario.plantilla.modelo,path:t.formulario.plantilla.identificador}}):t._e(),e("div",{staticClass:"col-auto row items-end justify-end q-gutter-sm"},[e("q-btn",{staticClass:"col revert-btn",attrs:{label:"Cancelar"},on:{click:t.cancelPlantilla}}),e("q-btn",{staticClass:"col advance-btn",attrs:{label:"Imprimir"},on:{click:function(a){return t.imprimir(t.formulario)}}})],1)],1)],1)],1)},o=[],l=e("95ad"),s=e("b1df"),r=e("378a"),n=e("75a0"),c=e("9990"),u=e("780f"),m=e("0da5"),d=e("dfbd"),p=e("5650"),f=e("ca03"),h=function(t,a,e,i){var o,l=arguments.length,s=l<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,e):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,a,e,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(l<3?o(s):l>3?o(a,e,s):o(a,e))||s);return l>3&&s&&Object.defineProperty(a,e,s),s},b=function(t,a,e,i){function o(t){return t instanceof e?t:new e((function(a){a(t)}))}return new(e||(e=Promise))((function(e,l){function s(t){try{n(i.next(t))}catch(a){l(a)}}function r(t){try{n(i["throw"](t))}catch(a){l(a)}}function n(t){t.done?e(t.value):o(t.value).then(s,r)}n((i=i.apply(t,a||[])).next())}))};let v=class extends l["e"]{constructor(){super(...arguments),this.buscadorOT=new u["a"](["id"]),this.ot=new r["OrdenTrabajo"]({}),this.step=1,this.formulario=new r["Formulario"]({}),this.store=Object(m["d"])(d["a"]),this.directorio={}}get compendio(){return this.store.compendio}get plantillas(){const t=this.ot.formularios.map((t=>t.serial));return this.ot.servicio.plantillas.filter((a=>!t.includes(a.serial)||(this.directorio[a.serial]=a,!1)))}otSelected(t){return b(this,void 0,void 0,(function*(){console.log(t),this.ot.servicio=(yield n["a"].get("servicios",{params:{filtro:{id:t.servicio.id},relaciones:["plantillas"]}}))[0]}))}selectPlantilla(t){this.store.nuevoCompendio(),this.formulario=new r["Formulario"]({plantilla:t,ot:this.ot}),this.step=2}cancelPlantilla(){this.formulario=new r["Formulario"]({}),this.step=1,this.store.nuevoCompendio()}visualizeFormulario(t){this.store.nuevoCompendio(),this.formulario=t,this.formulario.plantilla=this.directorio[t.serial],this.step=3,console.log(this.formulario)}crear(){return b(this,void 0,void 0,(function*(){this.formulario.datos=JSON.parse(JSON.stringify(this.compendio)),this.formulario.serial=this.formulario.plantilla.serial,this.formulario.identificadorPlantilla=this.formulario.plantilla.identificador;try{yield n["a"].post("formularios",{formulario:this.formulario},null,r["Formulario"]),this.$q.notify("Formulario guardado correctamente")}catch(t){console.log(t)}}))}imprimir(t){this.store.asignarImpresion(t),this.$router.push("/imprimir")}};v=h([Object(l["a"])({name:"llenar-ots-pagina",components:{SeccionPresentacion:f["a"],CampoPresentacion:p["default"],Campo:c["default"],BuscadorUnitario:s["a"]}})],v);var q=v,C=q,g=(e("e9e0"),e("a6c2")),w=e("505d"),y=e("dca8"),_=e("6f12"),P=e("692f"),k=e("3f5f"),O=e("e0e9"),j=e("6c44"),Q=e("dc7c"),S=e("ef9c"),F=e("63c1"),x=e.n(F),I=Object(g["a"])(C,i,o,!1,null,null,null);a["default"]=I.exports;x()(I,"components",{QPage:w["a"],QStepper:y["a"],QStep:_["a"],QList:P["a"],QSeparator:k["a"],QItem:O["a"],QItemSection:j["a"],QItemLabel:Q["a"],QBtn:S["a"]})},e9e0:function(t,a,e){"use strict";e("9faf")}}]);