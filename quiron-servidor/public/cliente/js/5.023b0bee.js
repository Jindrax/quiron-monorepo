(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6f2a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",[n("mostrar-campo",{attrs:{etiqueta:"Nombre"}},[n("q-input",{model:{value:e.nuevoCliente.nombre,callback:function(t){e.$set(e.nuevoCliente,"nombre",t)},expression:"nuevoCliente.nombre"}})],1),n("mostrar-campo",{attrs:{etiqueta:"Identificacion"}},[n("q-input",{model:{value:e.nuevoCliente.identificacion,callback:function(t){e.$set(e.nuevoCliente,"identificacion",t)},expression:"nuevoCliente.identificacion"}})],1),n("mostrar-campo",{attrs:{etiqueta:"Direccion"}},[n("q-input",{model:{value:e.nuevoCliente.direccion,callback:function(t){e.$set(e.nuevoCliente,"direccion",t)},expression:"nuevoCliente.direccion"}})],1),n("mostrar-campo",{attrs:{etiqueta:"Telefono"}},[n("q-input",{model:{value:e.nuevoCliente.telefono,callback:function(t){e.$set(e.nuevoCliente,"telefono",t)},expression:"nuevoCliente.telefono"}})],1),n("mostrar-campo",{attrs:{etiqueta:"Contrato"}},[n("q-input",{model:{value:e.nuevoCliente.contrato,callback:function(t){e.$set(e.nuevoCliente,"contrato",t)},expression:"nuevoCliente.contrato"}})],1),n("mostrar-campo",{attrs:{etiqueta:"Contacto"}},[n("div",[e.nuevoCliente.contacto.id?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("img",{attrs:{alt:"avatar_img",src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),n("q-item-section",[e._v("\n            "+e._s(e.nuevoCliente.contacto.nombres+" "+e.nuevoCliente.contacto.apellidos)+"\n          ")]),n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{color:"red",icon:"cancel"},on:{click:e.eliminarContactoPrincipal}})],1)],1):n("q-btn",{staticClass:"full-width",attrs:{label:"Buscar contacto"},on:{click:e.buscarContactoPrincipal}})],1)]),n("q-separator"),n("q-card",[n("q-card-section",[e._v("Contactos")]),n("q-card-section",[n("presentador-por-tabla",{attrs:{datos:e.nuevoCliente.contactos,esquema:["nombres","apellidos"]},on:{selected:e.eliminarContacto}})],1),n("q-card-actions",[n("q-btn",{staticClass:"full-width",attrs:{label:"Añadir Contacto"},on:{click:e.buscarContactos}})],1)],1),n("q-btn",{staticClass:"full-width",attrs:{label:"Crear Cliente"},on:{click:e.crearCliente}})],1),n("q-btn",{staticClass:"full-width",attrs:{label:"Test"},on:{click:e.test}})],1)},a=[],i=n("95ad"),c=n("5bfb"),s=n("378a"),l=n("ae1d"),r=n("8e85"),u=n("ab99"),d=n("75a0");const p={endpoint:"clientes/contactos",opciones:{campos_busqueda:[{etiqueta:"Nombres",valor:"nombres"},{etiqueta:"Apellidos",valor:"apellidos"}],campos_presentacion:[],opciones_busqueda:{}}};var f=n("e2c2"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[n("q-card",{class:e.cardClasses},[n("q-stepper",{ref:"stepper",attrs:{animated:"",color:"primary"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("q-step",{attrs:{name:1,title:"Elegir Cliente"}},[n("q-card",[n("q-card-section",{staticClass:"q-px-none"},[n("q-list",{staticClass:"q-px-none"},[n("q-item-label",{staticClass:"seccion",attrs:{header:""}},[e._v("Campos de busqueda")]),n("q-item",[n("q-item-section",e._l(e.opcionesCliente.campos_busqueda,(function(t,o){return n("q-input",{key:"campo_busqueda_"+t.etiqueta,attrs:{placeholder:t.etiqueta},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.buscarCliente.apply(null,arguments)}},model:{value:e.valoresBusquedaCliente[o],callback:function(t){e.$set(e.valoresBusquedaCliente,o,t)},expression:"valoresBusquedaCliente[indice_busqueda]"}})})),1)],1),n("q-item",[n("q-item-section",[n("q-btn",{staticClass:"full-width",attrs:{label:"Buscar"},on:{click:e.buscarCliente}})],1)],1)],1),n("q-list",{staticClass:"q-px-none",attrs:{bordered:"",separator:""}},[n("q-item-label",{staticClass:"seccion",attrs:{header:""}},[e._v("Resultados")]),e._l(e.resultadosCliente,(function(t){return n("q-item",{key:"resultado_"+t[e.opcionesCliente.campos_busqueda[0].valor],staticClass:"clickable",attrs:{clickable:""},on:{click:function(n){return e.seleccionarCliente(t)}}},[n("q-item-section",[n("q-list",e._l(e.opcionesCliente.campos_presentacion,(function(o){return n("q-item",{key:"attributo_"+t[e.opcionesCliente.campos_busqueda[0].valor]+"_"+o.etiqueta},[n("q-item-section",[e._v("\n                        "+e._s(o.etiqueta)+": "+e._s(t[o.valor])+"\n                      ")])],1)})),1)],1)],1)}))],2)],1)],1)],1),n("q-step",{attrs:{name:2,title:"Elegir Contacto"}},[n("q-table",{attrs:{columns:e.contactoColumns,data:e.resultadosContacto,filter:e.contactosFilter,"row-key":"id",title:"Contactos",selection:"single"},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",debounce:"300",dense:"",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.contactosFilter,callback:function(t){e.contactosFilter=t},expression:"contactosFilter"}})]},proxy:!0},{key:"body-cell-emails",fn:function(t){return[n("q-td",{attrs:{props:t}},e._l(t.value,(function(t){return n("div",{key:t+"-email",staticClass:"row"},[n("q-chip",[e._v("\n                  "+e._s(t)+"\n                ")])],1)})),0)]}},{key:"body-cell-telefonos",fn:function(t){return[n("q-td",{attrs:{props:t}},e._l(t.value,(function(t){return n("div",{key:t+"-telefono",staticClass:"row"},[n("q-chip",[e._v("\n                  "+e._s(t)+"\n                ")])],1)})),0)]}}]),model:{value:e.contactoSeleccionado,callback:function(t){e.contactoSeleccionado=t},expression:"contactoSeleccionado"}})],1)],1)],1)],1)},C=[],b=function(e,t,n,o){var a,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(c=(i<3?a(c):i>3?a(t,n,c):a(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},q=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(c,s)}l((o=o.apply(e,t||[])).next())}))};let v=class extends i["e"]{constructor(){super(...arguments),this.step=1,this.contactosFilter="",this.opcionesCliente={campos_busqueda:[{etiqueta:"Nombre",valor:"nombre"},{etiqueta:"Identificacion",valor:"identificacion"}],campos_presentacion:[{etiqueta:"Nombre",valor:"nombre"},{etiqueta:"Identificacion",valor:"identificacion"}],opciones_busqueda:[]},this.valoresBusquedaCliente=[],this.resultadosCliente=[],this.clienteSeleccionado=new s["Cliente"]({}),this.contactoColumns=[{name:"nombres",label:"Nombres",field:"nombres",sortable:!0,align:"left"},{name:"apellidos",label:"Apellidos",field:"apellidos",sortable:!0,align:"left"},{name:"emails",label:"E-Mails",field:"emails",align:"left"},{name:"telefonos",label:"Telefonos",field:"telefonos",align:"left"}],this.valoresBusquedaContacto=[],this.resultadosContacto=[],this.contactoSeleccionado=""}get cardClasses(){return 1==this.step?["growAnimation","firstSearch"]:["growAnimation","secondSearch"]}get objetoBusquedaCliente(){let e={},t=0;for(let n of this.valoresBusquedaCliente)""!=n&&(e[this.opcionesCliente.campos_busqueda[t].valor]=n),t++;return e}mounted(){for(let e of this.opcionesCliente.campos_busqueda)this.valoresBusquedaCliente.push("")}buscarCliente(){d["a"].get("clientes",{params:{filtro:this.objetoBusquedaCliente,opciones:[]}},s["Cliente"]).then((e=>{this.resultadosCliente=e})).catch((e=>{console.log(e),this.$q.notify("Ocurrio un error en el servidor")}))}buscarContactosCliente(){return q(this,void 0,void 0,(function*(){yield d["a"].get("clientes",{params:{filtro:{identificacion:this.clienteSeleccionado.identificacion},opciones:["contactos"]}},s["Cliente"]).then((e=>{this.resultadosContacto=e[0].contactos})).catch((e=>{console.log(e),this.$q.notify("Ocurrio un error en el servidor")}))}))}seleccionarCliente(e){return q(this,void 0,void 0,(function*(){this.clienteSeleccionado=e,yield this.buscarContactosCliente(),this.dialogWidth=80,this.step++}))}show(){this.dialog_element.show()}hide(){this.dialog_element.hide()}onDialogHide(){this.$emit("hide")}};b([Object(i["d"])("dialog")],v.prototype,"dialog_element",void 0),v=b([i["a"]],v);var h=v,_=h,g=(n("c064"),n("a6c2")),y=n("ec6d"),k=n("5ce7"),w=n("dca8"),Q=n("6f12"),x=n("7006"),S=n("692f"),$=n("dc7c"),O=n("e0e9"),B=n("6c44"),P=n("a3be"),j=n("ef9c"),I=n("3846"),A=n("19dc"),R=n("7b08"),D=n("837a"),E=n("63c1"),T=n.n(E),F=Object(g["a"])(_,m,C,!1,null,"5fb787b1",null),N=F.exports;function H(e,t,n,o,a,i){let c={opciones_busqueda:n.opciones.opciones_busqueda,campos_busqueda:n.opciones.campos_busqueda,campos_presentacion:[...n.opciones.campos_busqueda,...n.opciones.campos_presentacion]};o.dialog({component:f["a"],parent:e,endpoint:n.endpoint,clase:t,opciones:c,persistent:!0}).onOk(a).onCancel(i)}function J(e,t,n,o){t.dialog({component:N,parent:e,persistent:!1}).onOk(n).onCancel(o)}T()(F,"components",{QDialog:y["a"],QCard:k["a"],QStepper:w["a"],QStep:Q["a"],QCardSection:x["a"],QList:S["a"],QItemLabel:$["a"],QItem:O["a"],QItemSection:B["a"],QInput:P["a"],QBtn:j["a"],QTable:I["a"],QIcon:A["a"],QTd:R["a"],QChip:D["a"]});var L=function(e,t,n,o){var a,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(c=(i<3?a(c):i>3?a(t,n,c):a(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},M=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(c,s)}l((o=o.apply(e,t||[])).next())}))};let W=class extends i["e"]{constructor(){super(...arguments),this.nuevoCliente=new s["Cliente"]({})}buscarContactoPrincipal(){H(this,s["Contacto"],p,this.$q,(e=>{this.$set(this.nuevoCliente,"contacto",e)}),(e=>{console.log(e)}))}eliminarContactoPrincipal(){this.$set(this.nuevoCliente,"contacto",new s["Contacto"]({}))}buscarContactos(){H(this,s["Contacto"],p,this.$q,(e=>{this.$set(this.nuevoCliente.contactos,this.nuevoCliente.contactos.length,e)}),(e=>{console.log(e)}))}eliminarContacto(e,t){this.$delete(this.nuevoCliente.contactos,t)}crearCliente(){return M(this,void 0,void 0,(function*(){yield d["a"].post("clientes",{cliente:this.nuevoCliente})}))}test(){J(this,this.$q,(e=>{console.log(e)}),(e=>{console.log(e)}))}};W=L([Object(i["a"])({name:"crear-cliente-pagina",components:{PresentadorPorTabla:u["a"],CrearContacto:r["a"],CrearInstitucion:l["a"],MostrarCampo:c["a"]}})],W);var z=W,G=z,K=n("505d"),U=n("d6e3"),V=n("3f5f"),X=n("84df"),Y=Object(g["a"])(G,o,a,!1,null,null,null);t["default"]=Y.exports;T()(Y,"components",{QPage:K["a"],QInput:P["a"],QItem:O["a"],QItemSection:B["a"],QAvatar:U["a"],QBtn:j["a"],QSeparator:V["a"],QCard:k["a"],QCardSection:x["a"],QCardActions:X["a"]})},"79c1":function(e,t,n){},c064:function(e,t,n){"use strict";n("79c1")}}]);