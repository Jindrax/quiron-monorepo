(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"364e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-list",{attrs:{bordered:"",padding:"",separator:""}},[e("q-item",[e("q-item-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-btn",{staticClass:"full-width q-px-xs",attrs:{label:"Buscar plantilla a editar",outline:""},on:{click:t.buscarPlantilla}})],1),e("div",{staticClass:"col"},[e("q-btn",{staticClass:"full-width q-px-xs",attrs:{label:"Buscar plantilla a copiar",outline:""},on:{click:t.clonarPlantilla}})],1)])])],1),e("q-item",[e("q-item-section",[e("mostrar-campo",{attrs:{etiqueta:"Identificador"}},[e("q-input",{attrs:{debounce:"1000",placeholder:"Identificador"},model:{value:t.plantilla.identificador,callback:function(a){t.$set(t.plantilla,"identificador",a)},expression:"plantilla.identificador"}})],1),e("mostrar-campo",{attrs:{etiqueta:"Serial"}},[t._v("\n          "+t._s(t.plantilla.serial)+"\n        ")]),e("mostrar-campo",{attrs:{etiqueta:"Version"}},[e("q-input",{attrs:{debounce:"1000",placeholder:"Version",type:"number"},model:{value:t.plantilla.version,callback:function(a){t.$set(t.plantilla,"version",a)},expression:"plantilla.version"}})],1)],1)],1),e("q-card",{staticClass:"q-ma-sm",staticStyle:{"{border-color":"#1D1D1D}"}},[e("q-card-section",[e("p",[t._v("Plantillas relacionadas")]),e("q-list",{attrs:{bordered:"",separator:""}},t._l(t.plantilla.relacionadas,(function(a,i){return e("q-item",{key:"rel-"+a.identificador,attrs:{clickable:""},on:{click:function(a){return t.quitarPlantillasRelacionada(i)}}},[e("q-item-label",[t._v(t._s(a.identificador+"::"+a.version))])],1)})),1)],1),e("q-card-actions",[e("q-btn",{staticClass:"full-width",attrs:{label:"Añadir plantilla relacionada",outline:""},on:{click:t.sumarPlantillaRelacionada}})],1)],1),e("q-expansion-item",{attrs:{"expand-separator":"","header-class":"collapsible",label:"Diseño","switch-toggle-side":""}},[e("seccion",{key:t.plantilla.serial+"raiz",attrs:{elemento:t.plantilla.modelo,indice:0,path:""}})],1),e("q-expansion-item",{attrs:{"expand-separator":"","header-class":"collapsible",label:"Previsualizacion","switch-toggle-side":""}},t._l(t.contexto,(function(a){return e("q-expansion-item",{key:t.obtenerKey(a),attrs:{"expand-separator":"",label:a.identificador,"switch-toggle-side":""}},[e("q-card",{attrs:{bordered:""}},[e("q-card-section",[e("previsualizador",{attrs:{plantilla:a}})],1)],1)],1)})),1),e("q-item",[e("q-item-section",[e("div",{staticClass:"row"},[e("q-btn",{class:t.unsavedChanges?["col","full-width","unsaved_changes"]:["col","full-width"],attrs:{label:"Cache"},on:{click:t.cache}}),e("q-btn",{staticClass:"col full-width",attrs:{label:"Descartar"},on:{click:t.discard}}),"crear"===t.accion?e("q-btn",{staticClass:"col full-width",attrs:{label:"Crear Plantilla"},on:{click:t.crearPlantilla}}):t._e(),"actualizar"===t.accion?e("q-btn",{staticClass:"col full-width",attrs:{label:"Actualizar Plantilla"},on:{click:t.actualizarPlantilla}}):t._e()],1)])],1)],1),e("q-inner-loading",{attrs:{showing:t.cargando}},[e("q-spinner-facebook",{attrs:{color:"primary",size:"50px"}}),t._v("\n    Cargando cache/plantilla\n  ")],1)],1)},l=[],n=e("95ad"),o=e("5bfb"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.plantilla.modelo!=={}?e("q-card",[e("q-card-section",{staticClass:"q-px-none"},t._l(t.plantilla.modelo.elementos,(function(a,i){return e("campo",{key:"pc-prev-"+a.etiqueta,attrs:{data:t.compendio,elemento:a,path:t.plantilla.identificador,printable:!1}})})),1)],1):t._e()},c=[],s=e("9990"),d=e("0da5"),h=e("dfbd"),u=function(t,a,e,i){var l,n=arguments.length,o=n<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,e):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,a,e,i);else for(var r=t.length-1;r>=0;r--)(l=t[r])&&(o=(n<3?l(o):n>3?l(a,e,o):l(a,e))||o);return n>3&&o&&Object.defineProperty(a,e,o),o};let p=class extends n["e"]{constructor(){super(...arguments),this.data={},this.plantillaStore=Object(d["d"])(h["a"])}get compendio(){return this.plantillaStore.compendio}};u([Object(n["b"])()],p.prototype,"plantilla",void 0),p=u([Object(n["a"])({name:"previsualizador",components:{Campo:s["default"]}})],p);var f=p,v=f,m=e("a6c2"),y=e("5ce7"),q=e("7006"),g=e("63c1"),b=e.n(g),C=Object(m["a"])(v,r,c,!1,null,null,null),w=C.exports;b()(C,"components",{QCard:y["a"],QCardSection:q["a"]});var P=e("e2c2"),$=e("2548"),k=e.n($),x=e("75a0"),O=function(t,a,e,i){function l(t){return t instanceof e?t:new e((function(a){a(t)}))}return new(e||(e=Promise))((function(e,n){function o(t){try{c(i.next(t))}catch(a){n(a)}}function r(t){try{c(i["throw"](t))}catch(a){n(a)}}function c(t){t.done?e(t.value):l(t.value).then(o,r)}c((i=i.apply(t,a||[])).next())}))};class S{constructor(t,a){this.history=null,this.window=0,this.cacheType=t,this.cacheClass=a}isArray(t){return Array.isArray(t)}static isObject(t){return!Array.isArray(t)}syncToServer(){return O(this,void 0,void 0,(function*(){try{const t=yield x["a"].get(`cache/${this.cacheType}`,void 0,this.cacheClass);return this.isArray(t)&&(this.history=t,this.window=t.length),!0}catch(t){return console.log(t),!1}}))}getValue(){return O(this,void 0,void 0,(function*(){return null==this.history&&(yield this.syncToServer()),this.history.length>0?this.history[this.history.length-1]:new this.cacheClass({})}))}cache(t){return O(this,void 0,void 0,(function*(){try{this.history.push(Object.assign(new this.cacheClass({}),t)),yield this.saveToServer(t)}catch(a){throw a}}))}saveToServer(t){return O(this,void 0,void 0,(function*(){try{const a={elemento:t};yield x["a"].post(`cache/${this.cacheType}`,a,void 0,this.cacheClass)}catch(a){throw a}}))}discardCache(){return O(this,void 0,void 0,(function*(){try{yield x["a"].delete(`cache/${this.cacheType}`,void 0)}catch(t){console.log(t)}}))}materializeCache(){return O(this,void 0,void 0,(function*(){try{const t=yield this.getValue();if(t)switch(this.cacheType){case"plantilla":return yield x["a"].post("plantilla",{plantilla:t})}}catch(t){console.log(t)}}))}}var _=e("868b"),z=e("0462"),j=e("9ad4"),I=function(t,a,e,i){var l,n=arguments.length,o=n<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,e):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,a,e,i);else for(var r=t.length-1;r>=0;r--)(l=t[r])&&(o=(n<3?l(o):n>3?l(a,e,o):l(a,e))||o);return n>3&&o&&Object.defineProperty(a,e,o),o},D=function(t,a,e,i){function l(t){return t instanceof e?t:new e((function(a){a(t)}))}return new(e||(e=Promise))((function(e,n){function o(t){try{c(i.next(t))}catch(a){n(a)}}function r(t){try{c(i["throw"](t))}catch(a){n(a)}}function c(t){t.done?e(t.value):l(t.value).then(o,r)}c((i=i.apply(t,a||[])).next())}))};let Q=class extends n["e"]{constructor(){super(...arguments),this.plantilla=new k.a({}),this.plantillaUnica={},this.cargando=!1,this.unsavedChanges=!1,this.controladorPlantilla=new S("plantilla",k.a),this.editorStore=Object(d["d"])(_["a"])}crearCache(){return D(this,void 0,void 0,(function*(){yield this.controladorPlantilla.saveToServer(this.plantilla)}))}get accion(){return""!=this.plantilla.serial?"actualizar":"crear"}get contexto(){return this.editorStore.contexto}onRaizChanged(){return D(this,void 0,void 0,(function*(){""!=this.plantilla.identificador&&(this.unsavedChanges=!0);const t=[...this.plantilla.relacionadas,this.plantilla];this.editorStore.setContexto(t)}))}saveCache(){return D(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador)try{yield this.controladorPlantilla.cache(this.plantilla),this.$q.notify({message:"Cache actualizada.",timeout:700,closeBtn:"Cerrar"}),this.unsavedChanges=!1}catch(t){}else this.$q.notify("No se puede guardar una plantilla en cache sin identificador.")}))}cache(){return D(this,void 0,void 0,(function*(){yield this.saveCache()}))}reiniciarDatos(){this.plantilla=new k.a({}),this.plantillaUnica={"\\raiz":"seccion"},this.unsavedChanges=!1}sumarPlantillaRelacionada(){let t={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:P["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:t,persistent:!0}).onOk((t=>{this.plantilla.relacionadas.push(t)})).onCancel((t=>{console.log(t)}))}quitarPlantillasRelacionada(t){this.$delete(this.plantilla.relacionadas,t)}buscarPlantilla(){let t={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:P["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:t,persistent:!0}).onOk((t=>{this.plantilla=t})).onCancel((t=>{console.log(t)}))}actualizarClonacion(t,a){console.log(a);for(const e of a.elementos)if(e.elemento==j["TiposElementos"].seccion)this.actualizarClonacion(t,e);else{if(e.referencia.activated){const a=e.referencia.identificador.indexOf("/");e.referencia.identificador=t+e.referencia.identificador.substring(a)}if(e.dependiente.activated)for(const a of e.dependiente.conditions){const e=a.parent.indexOf("/");a.parent=t+a.parent.substring(e)}}}clonarPlantilla(){let t={campos_busqueda:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"}],campos_presentacion:[{etiqueta:"Identificador",valor:"identificador"},{etiqueta:"Serial",valor:"serial"},{etiqueta:"Version",valor:"version"}],opciones_busqueda:{}};this.$q.dialog({component:P["a"],parent:this,endpoint:"plantilla",clase:k.a,opciones:t,persistent:!0}).onOk((t=>{t.serial="",this.$q.dialog({message:"Nuevo nombre de la plantilla",prompt:{model:t.identificador,type:"text",isValid:t=>""!==t}}).onOk((a=>{t.identificador;t.identificador=a,this.actualizarClonacion(a,t.modelo),this.plantilla=t}))})).onCancel((t=>{console.log(t)}))}crearPlantilla(){return D(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador&&void 0!=this.plantilla.identificador)try{this.$q.dialog({title:"Crear Plantilla",message:"¿Esta seguro que desea crear la plantilla actual?",cancel:"Cancelar",persistent:!0}).onOk((()=>D(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.cache(this.plantilla);let t=yield this.controladorPlantilla.materializeCache();this.$q.dialog({title:"Confirmacion de creacion",message:`<p>Identificador: ${t.object.identificador}</p><p>Serial: ${t.object.serial}</p><p>Version: ${t.object.version}</p><h5>Codigo confirmacion: ${t.logID}</h5>`,html:!0,persistent:!0,dark:!0}).onOk((()=>{})),this.reiniciarDatos()}catch(t){this.$q.notify(t.toString()),console.log(t)}}))))}catch(t){console.log(t)}else this.$q.notify("Toda plantilla debe tener un identificador")}))}actualizarPlantilla(){return D(this,void 0,void 0,(function*(){if(""!=this.plantilla.identificador&&void 0!=this.plantilla.identificador)try{this.$q.dialog({title:"Actualizar Plantilla",message:"¿Esta seguro que desea actualizar la plantilla actual?",cancel:"Cancelar",persistent:!0}).onOk((()=>D(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.cache(this.plantilla);let t=yield this.controladorPlantilla.materializeCache();console.log(t),this.$q.dialog({title:"Confirmacion de actualizacion",message:`<p>Identificador: ${t.object.identificador}</p><p>Serial: ${t.object.serial}</p><p>Version: ${t.object.version}</p><h5>Codigo confirmacion: ${t.logID}</h5>`,html:!0,persistent:!0,dark:!0}).onOk((()=>{})),this.reiniciarDatos()}catch(t){this.$q.notify(t.toString()),console.log(t)}}))))}catch(t){console.log(t)}else this.$q.notify("Toda plantilla debe tener un identificador")}))}discard(){this.$q.dialog({title:"Descartar Plantilla",message:"¿Esta seguro que desea eliminar la plantilla actual? esta accion no se puede deshacer.",cancel:"Cancelar",persistent:!0}).onOk((()=>D(this,void 0,void 0,(function*(){try{yield this.controladorPlantilla.discardCache(),this.reiniciarDatos(),this.$q.notify("Plantilla descartada correctamente")}catch(t){this.$q.notify("Ocurrio un error en el servidor.")}}))))}mounted(){return D(this,void 0,void 0,(function*(){try{let t=yield this.controladorPlantilla.getValue();t?this.plantilla=t:0!=this.id&&(this.plantilla=yield this.controladorPlantilla.getValue())}catch(t){console.log(t),this.$q.notify("Ocurrio un error en el servidor.")}this.cargando=!1}))}obtenerKey(t){return"preview"+Date.now()+t.serial}};I([Object(n["b"])()],Q.prototype,"id",void 0),I([Object(n["f"])("plantilla",{deep:!0})],Q.prototype,"onRaizChanged",null),Q=I([Object(n["a"])({components:{Previsualizador:w,MostrarCampo:o["a"],Seccion:z["c"]}})],Q);var T=Q,R=T,V=(e("3863"),e("505d")),A=e("692f"),E=e("e0e9"),B=e("6c44"),L=e("ef9c"),J=e("a3be"),K=e("dc7c"),N=e("84df"),U=e("953d"),F=e("7dc4"),M=e("ed9e"),G=Object(m["a"])(R,i,l,!1,null,null,null);a["default"]=G.exports;b()(G,"components",{QPage:V["a"],QList:A["a"],QItem:E["a"],QItemSection:B["a"],QBtn:L["a"],QInput:J["a"],QCard:y["a"],QCardSection:q["a"],QItemLabel:K["a"],QCardActions:N["a"],QExpansionItem:U["a"],QInnerLoading:F["a"],QSpinnerFacebook:M["a"]})},3863:function(t,a,e){"use strict";e("99c6")},"99c6":function(t,a,e){}}]);