(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{8049:function(e,t,o){"use strict";o("bc2e")},bc2e:function(e,t,o){},bf39:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.dependiente.activated?o("q-expansion-item",{attrs:{"switch-toggle-side":"","header-class":e.dependiente.activated?"bg-blue-grey-10 text-white":""},scopedSlots:e._u([{key:"header",fn:function(){return[o("q-item-section",[e._v("\n      Dependiente\n    ")]),o("q-item-section",{attrs:{side:""}},[o("q-toggle",{model:{value:e.dependiente.activated,callback:function(t){e.$set(e.dependiente,"activated",t)},expression:"dependiente.activated"}})],1)]},proxy:!0}],null,!1,1957867482)},[o("q-card",{staticClass:"bg-blue-grey-1",attrs:{bordered:""}},[o("q-card-section",[o("selector-por-capas",{attrs:{arbol:e.contexto},on:{elemento:e.processParent},model:{value:e.parent,callback:function(t){e.parent=t},expression:"parent"}}),o("q-separator"),o("mostrar-campo",{attrs:{etiqueta:"Valor esperado"}},[null!==e.value_options?o("q-select",{attrs:{options:e.value_options},model:{value:e.expected_value,callback:function(t){e.expected_value=t},expression:"expected_value"}}):o("q-input",{model:{value:e.expected_value,callback:function(t){e.expected_value=t},expression:"expected_value"}})],1),o("q-separator"),o("mostrar-campo",{attrs:{etiqueta:"Operador condicional"}},[o("q-select",{attrs:{options:e.boolean_options,color:"primary",inline:""},model:{value:e.boolean_component,callback:function(t){e.boolean_component=t},expression:"boolean_component"}})],1),o("q-separator"),o("mostrar-campo",{attrs:{etiqueta:"Operador comparativo"}},[o("q-select",{attrs:{options:e.boolean_comparators,color:"primary",inline:""},model:{value:e.boolean_comparator,callback:function(t){e.boolean_comparator=t},expression:"boolean_comparator"}})],1),o("q-separator"),o("q-btn",{staticClass:"full-width",attrs:{label:"Añadir"},on:{click:e.addCondition}})],1),o("q-card-section",[o("q-table",{attrs:{columns:e.conditions_columns,data:e.table_data,title:"Condiciones",grid:e.$q.screen.xs,"table-header-class":"cabecera","title-class":"cabecera"},on:{"row-click":e.clickTabla}})],1)],1)],1):o("q-item",[o("q-item-section",[e._v("\n    Dependiente\n  ")]),o("q-item-section",{attrs:{side:""}},[o("q-toggle",{model:{value:e.dependiente.activated,callback:function(t){e.$set(e.dependiente,"activated",t)},expression:"dependiente.activated"}})],1)],1)},n=[],r=o("60a3"),i=o("5bfb"),c=o("c332"),l=o("6fc5"),s=o("868b"),d=o("22ed"),p=o("23b6"),u=o("ba3f"),b=o("6631"),m=function(e,t,o,a){var n,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let h=class extends r["e"]{constructor(){super(...arguments),this.parent="",this.value_options=null,this.expected_value="",this.boolean_component="",this.boolean_options=Object.getOwnPropertyNames(u["a"]),this.boolean_comparator="",this.boolean_comparators=Object.getOwnPropertyNames(p["a"]),this.conditions_columns=[{name:"parent",required:!0,label:"Padre",align:"left",field:e=>e.parent,format:e=>`${e}`,sortable:!0},{name:"expected_value",required:!0,label:"Valor esperado",align:"left",field:e=>e.expected_value,format:e=>`${e}`,sortable:!0},{name:"operator",required:!0,label:"Operador",align:"left",field:e=>e.operator,format:e=>`${e}`,sortable:!0},{name:"comparator",required:!0,label:"Comparador",align:"left",field:e=>e.comparator,format:e=>`${e}`,sortable:!0}],this.editorStore=Object(l["d"])(s["a"])}processParent(e){switch(e.elemento){case b["TiposElementos"].seleccion:case b["TiposElementos"].chequeo:this.value_options=e.opciones;break;default:this.value_options=null}}showContext(){console.log(this.contexto)}get contexto(){return this.editorStore.contexto}get table_data(){let e=[];return this.dependiente.conditions.forEach(((t,o)=>{e.push({parent:t.parent,expected_value:t.expected_value,operator:t.operator,comparator:t.comparator,locator:o})})),e}parents(){let e=[];if(this.banco_datos)for(let t of Object.keys(this.banco_datos))switch(this.banco_datos[t]){case"entrada-texto":case"entrada-numerica":case"seleccion":case"chequeo":e.push({label:`${t} : ${this.banco_datos[t]}`,value:t});break}else for(let t of Object.keys(this.editorStore.plantilaUnicaEditor))switch(this.editorStore.plantilaUnicaEditor[t]){case"entrada-texto":case"entrada-numerica":case"seleccion":case"chequeo":e.push({label:`${t} : ${this.editorStore.plantilaUnicaEditor[t]}`,value:t});break}return e}dependienteChanged(e,t){}addCondition(){""!=this.boolean_component?(console.log("Padre elemento",this.editorStore.elementoContexto(this.parent)),this.dependiente.conditions.push(new c["CondicionDependiente"](this.parent,this.editorStore.elementoContexto(this.parent).elemento,this.expected_value,this.boolean_component,this.boolean_comparator)),this.parent="",this.expected_value="",this.boolean_component="",this.boolean_comparator=""):this.$q.notify("Debe seleccionar un operador condicional")}clickTabla(e,t){this.$delete(this.dependiente.conditions,Number(t.locator))}};m([Object(r["c"])("dep")],h.prototype,"dependiente",void 0),m([Object(r["b"])()],h.prototype,"banco_datos",void 0),m([Object(r["f"])("dependiente",{deep:!0})],h.prototype,"dependienteChanged",null),h=m([Object(r["a"])({components:{MostrarCampo:i["a"],SelectorPorCapas:d["a"]}})],h);var f=h,_=f,v=(o("8049"),o("2877")),x=o("3b73"),q=o("4074"),g=o("9564"),k=o("f09f"),w=o("a370"),y=o("9c40"),O=o("eb85"),C=o("ddd8"),$=o("27f9"),j=o("eaac"),S=o("66e5"),Q=o("eebe"),P=o.n(Q),E=Object(v["a"])(_,a,n,!1,null,null,null);t["default"]=E.exports;P()(E,"components",{QExpansionItem:x["a"],QItemSection:q["a"],QToggle:g["a"],QCard:k["a"],QCardSection:w["a"],QBtn:y["a"],QSeparator:O["a"],QSelect:C["a"],QInput:$["a"],QTable:j["a"],QItem:S["a"]})}}]);