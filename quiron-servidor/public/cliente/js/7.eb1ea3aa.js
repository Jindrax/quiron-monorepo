(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"364e":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"column q-gutter-y-sm"},[e("div",{staticClass:"col-auto row q-gutter-sm"},[e("q-btn",{staticClass:"col advance-btn",attrs:{label:"Buscar plantilla a editar"},on:{click:a.buscarPlantilla}}),e("q-btn",{staticClass:"col warn-btn",attrs:{label:"Buscar plantilla a copiar"},on:{click:a.clonarPlantilla}})],1),e("div",{staticClass:"col-auto column"},[e("mostrar-campo",{attrs:{etiqueta:"Identificador"}},[e("q-input",{attrs:{debounce:"1000",placeholder:"Identificador"},model:{value:a.plantilla.identificador,callback:function(t){a.$set(a.plantilla,"identificador",t)},expression:"plantilla.identificador"}})],1),e("mostrar-campo",{attrs:{etiqueta:"Serial"}},[a._v("\n      "+a._s(a.plantilla.serial)+"\n    ")]),e("mostrar-campo",{attrs:{etiqueta:"Version"}},[e("q-input",{attrs:{debounce:"1000",placeholder:"Version",type:"number"},model:{value:a.plantilla.version,callback:function(t){a.$set(a.plantilla,"version",t)},expression:"plantilla.version"}})],1)],1),e("div",{staticClass:"col-auto"},[e("q-card",[e("q-card-section",[e("p",[a._v("Plantillas relacionadas")]),e("q-list",{attrs:{bordered:"",separator:""}},a._l(a.plantilla.relacionadas,(function(t,i){return e("q-item",{key:"rel-"+t.identificador,attrs:{clickable:""},on:{click:function(t){return a.quitarPlantillasRelacionada(i)}}},[e("q-item-label",[a._v(a._s(t.identificador+"::"+t.version))])],1)})),1)],1),e("q-card-actions",[e("q-btn",{staticClass:"full-width advance-btn",attrs:{label:"Añadir plantilla relacionada"},on:{click:a.sumarPlantillaRelacionada}})],1)],1)],1),e("q-list",{staticClass:"col-auto",attrs:{bordered:"",padding:"",separator:""}},[e("q-expansion-item",{attrs:{"expand-separator":"","header-class":"collapsible",label:"Diseño","switch-toggle-side":""}},[e("seccion",{key:a.plantilla.serial+"raiz",attrs:{elemento:a.plantilla.modelo,indice:0,path:""}})],1),e("q-expansion-item",{attrs:{"expand-separator":"","header-class":"collapsible",label:"Previsualizacion","switch-toggle-side":""}},a._l(a.contexto,(function(t){return e("q-expansion-item",{key:a.obtenerKey(t),attrs:{label:t.identificador,"expand-separator":"","switch-toggle-side":""}},[e("q-card",{attrs:{bordered:""}},[e("q-card-section",[e("previsualizador",{attrs:{plantilla:t}})],1)],1)],1)})),1)],1),e("div",{staticClass:"col-auto row q-gutter-sm"},[e("q-btn",{class:a.unsavedChanges?["col","warn-btn"]:["col"],attrs:{label:"Cache"},on:{click:a.cache}}),e("q-btn",{staticClass:"col revert-btn",attrs:{label:"Descartar"},on:{click:a.discard}}),"crear"===a.accion?e("q-btn",{staticClass:"col advance-btn",attrs:{label:"Crear Plantilla"},on:{click:a.crearPlantilla}}):a._e(),"actualizar"===a.accion?e("q-btn",{staticClass:"col advance-btn",attrs:{label:"Actualizar Plantilla"},on:{click:a.actualizarPlantilla}}):a._e()],1),e("q-inner-loading",{attrs:{showing:a.cargando}},[e("q-spinner-facebook",{attrs:{color:"primary",size:"50px"}}),a._v("\n    Cargando cache/plantilla\n  ")],1)],1)},n=[],l=e("95ad"),o=e("5bfb"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.plantilla.modelo!=={}?e("q-card",[e("q-card-section",{staticClass:"q-px-none"},a._l(a.plantilla.modelo.elementos,(function(t,i){return e("campo",{key:"pc-prev-"+t.etiqueta,attrs:{data:a.compendio,elemento:t,path:a.plantilla.identificador,printable:!1}})})),1)],1):a._e()},c=[],s=e("9990"),d=e("0da5"),u=e("dfbd"),h=function(a,t,e,i){var n,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(o=(l<3?n(o):l>3?n(t,e,o):n(t,e))||o);return l>3&&o&&Object.defineProperty(t,e,o),o};let p=class extends l["e"]{constructor(){super(...arguments),this.data={},this.plantillaStore=Object(d["d"])(u["a"])}get compendio(){return this.plantillaStore.compendio}};h([Object(l["b"])()],p.prototype,"plantilla",void 0),p=h([Object(l["a"])({name:"previsualizador",components:{Campo:s["default"]}})],p);var f=p,v=f,b=e("a6c2"),g=e("5ce7"),y=e("7006"),m=e("63c1"),q=e.n(m),C=Object(b["a"])(v,r,c,!1,null,null,null),P=C.exports;q()(C,"components",{QCard:g["a"],QCardSection:y["a"]});var w=e("e2c2"),$=e("2548"),k=e.n($),O=e("75a0"),x=function(a,t,e,i){function n(a){return a instanceof e?a:new e((function(t){t(a)}))}return new(e||(e=Promise))((function(e,l){function o(a){try{c(i.next(a))}catch(t){l(t)}}function r(a){try{c(i["throw"](a))}catch(t){l(t)}}function c(a){a.done?e(a.value):n(a.value).then(o,r)}c((i=i.apply(a,t||[])).next())}))};class S{constructor(a,t){this.history=null,this.window=0,this.cacheType=a,this.cacheClass=t}isArray(a){return Array.isArray(a)}static isObject(a){return!Array.isArray(a)}syncToServer(){return x(this,void 0,void 0,(function*(){try{const a=yield O["a"].get(`cache/${this.cacheType}`,void 0,this.cacheClass);return this.isArray(a)&&(this.history=a,this.window=a.length),!0}catch(a){return console.log(a),!1}}))}getValue(){return x(this,void 0,void 0,(function*(){return null==this.history&&(yield this.syncToServer()),this.history.length>0?this.history[this.history.length-1]:new this.cacheClass({})}))}cache(a){return x(this,void 0,void 0,(function*(){try{this.history.push(Object.assign(new this.cacheClass({}),a)),yield this.saveToServer(a)}catch(t){throw t}}))}saveToServer(a){return x(this,void 0,void 0,(function*(){try{const t={elemento:a};yield O["a"].post(`cache/${this.cacheType}`,t,void 0,this.cacheClass)}catch(t){throw t}}))}discardCache(){return x(this,void 0,void 0,(function*(){try{yield O["a"].delete(`cache/${this.cacheType}`,void 0)}catch(a){console.log(a)}}))}materializeCache(){return x(this,void 0,void 0,(function*(){try{const a=yield this.getValue();if(a)switch(this.cacheType){case"plantilla":return yield O["a"].post("plantilla",{plantilla:a})}}catch(a){console.log(a)}}))}}var _=e("868b"),z=e("0462"),j=e("9ad4"),I=function(a,t,e,i){var n,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(o=(l<3?n(o):l>3?n(t,e,o):n(t,e))||o);return l>3&&o&&Object.defineProperty(t,e,o),o},Q=function(a,t,e,i){function n(a){return a instanceof e?a:new e((function(t){t(a)}))}return new(e||(e=Promise))((function(e,l){function o(a){try{c(i.next(a))}catch(t){l(t)}}function r(a){try{c(i["throw"](a))}catch(t){l(t)}}function c(a){a.done?e(a.value):n(a.value).then(o,r)}c((i=i.apply(a,t||[])).next())}))};let T=class extends l["e"]{constructor(){super(...arguments),this.plantilla=new k.a({}),this.plantillaUnica={},this.cargando=!1,this.unsavedChanges=!1,this.controladorPlantilla=new S("plantilla",k.a),this.editorStore=Object(d["d"])(_["a"])}get accion(){return""!=this.plantilla.serial?"actualizar":"crear"}get contexto(){return this.editorStore.contexto}crearCache(){return Q(this,void 0,void 0,(function*(){yield this.controladorPlantilla.saveToServer(this.plantilla)}))}onRaizChanged(){return Q(this,void 0,void 0,(function*(){""!=this.plantilla.identificador&&(this.unsavedChanges=!0);const a=[...this.plantilla.relacionadas,this.plantilla];this.editorStore.setContexto(a)}))}saveCache(){return Q(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador)try{yield this.controladorPlantilla.cache(this.plantilla),this.$q.notify({message:"Cache actualizada.",timeout:700,closeBtn:"Cerrar"}),this.unsavedChanges=!1}catch(a){}else this.$q.notify("No se puede guardar una plantilla en cache sin identificador.")}))}cache(){return Q(this,void 0,void 0,(function*(){yield this.saveCache()}))}reiniciarDatos(){this.plantilla=new k.a({}),this.plantillaUnica={"\\raiz":"seccion"},this.unsavedChanges=!1}sumarPlantillaRelacionada(){let a={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:w["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:a,persistent:!0}).onOk((a=>{this.plantilla.relacionadas.push(a)})).onCancel((a=>{console.log(a)}))}quitarPlantillasRelacionada(a){this.$delete(this.plantilla.relacionadas,a)}buscarPlantilla(){let a={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:w["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:a,persistent:!0}).onOk((a=>{this.plantilla=a})).onCancel((a=>{console.log(a)}))}actualizarClonacion(a,t){console.log(t);for(const e of t.elementos)if(e.elemento==j["TiposElementos"].seccion)this.actualizarClonacion(a,e);else{if(e.referencia.activated){const t=e.referencia.identificador.indexOf("/");e.referencia.identificador=a+e.referencia.identificador.substring(t)}if(e.dependiente.activated)for(const t of e.dependiente.conditions){const e=t.parent.indexOf("/");t.parent=a+t.parent.substring(e)}}}clonarPlantilla(){let a={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:w["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:a,persistent:!0}).onOk((a=>{a.serial="",this.$q.dialog({message:"Nuevo nombre de la plantilla",prompt:{model:a.identificador,type:"text",isValid:a=>""!==a}}).onOk((t=>{a.identificador;a.identificador=t,this.actualizarClonacion(t,a.modelo),this.plantilla=a}))})).onCancel((a=>{console.log(a)}))}crearPlantilla(){return Q(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador&&void 0!=this.plantilla.identificador)try{this.$q.dialog({title:"Crear Plantilla",message:"¿Esta seguro que desea crear la plantilla actual?",cancel:"Cancelar",persistent:!0}).onOk((()=>Q(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.cache(this.plantilla);let a=yield this.controladorPlantilla.materializeCache();this.$q.dialog({title:"Confirmacion de creacion",message:`<p>Identificador: ${a.object.identificador}</p><p>Serial: ${a.object.serial}</p><p>Version: ${a.object.version}</p><h5>Codigo confirmacion: ${a.logID}</h5>`,html:!0,persistent:!0,dark:!0}).onOk((()=>{})),this.reiniciarDatos()}catch(a){this.$q.notify(a.toString()),console.log(a)}}))))}catch(a){console.log(a)}else this.$q.notify("Toda plantilla debe tener un identificador")}))}actualizarPlantilla(){return Q(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador&&void 0!=this.plantilla.identificador)try{this.$q.dialog({title:"Actualizar Plantilla",message:"¿Esta seguro que desea actualizar la plantilla actual?",cancel:"Cancelar",persistent:!0}).onOk((()=>Q(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.cache(this.plantilla);let a=yield this.controladorPlantilla.materializeCache();console.log(a),this.$q.dialog({title:"Confirmacion de actualizacion",message:`<p>Identificador: ${a.object.identificador}</p><p>Serial: ${a.object.serial}</p><p>Version: ${a.object.version}</p><h5>Codigo confirmacion: ${a.logID}</h5>`,html:!0,persistent:!0,dark:!0}).onOk((()=>{})),this.reiniciarDatos()}catch(a){this.$q.notify(a.toString()),console.log(a)}}))))}catch(a){console.log(a)}else this.$q.notify("Toda plantilla debe tener un identificador")}))}discard(){this.$q.dialog({title:"Descartar Plantilla",message:"¿Esta seguro que desea eliminar la plantilla actual? esta accion no se puede deshacer.",cancel:"Cancelar",persistent:!0}).onOk((()=>Q(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.discardCache(),this.reiniciarDatos(),this.$q.notify("Plantilla descartada correctamente")}catch(a){this.$q.notify("Ocurrio un error en el servidor.")}}))))}mounted(){return Q(this,void 0,void 0,(function*(){try{let a=yield this.controladorPlantilla.getValue();a?this.plantilla=a:0!=this.id&&(this.plantilla=yield this.controladorPlantilla.getValue())}catch(a){console.log(a),this.$q.notify("Ocurrio un error en el servidor.")}this.cargando=!1}))}obtenerKey(a){return"preview"+Date.now()+a.serial}focusIn(a){console.log("Focus",a)}};I([Object(l["b"])()],T.prototype,"id",void 0),I([Object(l["f"])("plantilla",{deep:!0})],T.prototype,"onRaizChanged",null),T=I([Object(l["a"])({components:{Previsualizador:P,MostrarCampo:o["a"],Seccion:z["c"]}})],T);var D=T,R=D,V=(e("3863"),e("505d")),A=e("ef9c"),E=e("a3be"),B=e("692f"),L=e("e0e9"),F=e("dc7c"),J=e("84df"),K=e("953d"),N=e("7dc4"),U=e("ed9e"),M=Object(b["a"])(R,i,n,!1,null,null,null);t["default"]=M.exports;q()(M,"components",{QPage:V["a"],QBtn:A["a"],QInput:E["a"],QCard:g["a"],QCardSection:y["a"],QList:B["a"],QItem:L["a"],QItemLabel:F["a"],QCardActions:J["a"],QExpansionItem:K["a"],QInnerLoading:N["a"],QSpinnerFacebook:U["a"]})},3863:function(a,t,e){"use strict";e("99c6")},"99c6":function(a,t,e){}}]);