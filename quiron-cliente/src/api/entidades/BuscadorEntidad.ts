import {OpcionesBuscador} from "components/Utils/Interfaces";

export const contactoOpcionesBuscador: OpcionesBuscador = {
  endpoint: "clientes/contactos",
  opciones: {
    campos_busqueda: [
      {etiqueta: 'Nombres', valor: 'nombres'},
      {etiqueta: 'Apellidos', valor: 'apellidos'}
    ],
    campos_presentacion: [],
    opciones_busqueda: {}
  }
}

export const sucursalOpcionesBuscador: OpcionesBuscador = {
  endpoint: "clientes/sucursales",
  opciones: {
    campos_busqueda: [
      {etiqueta: 'Identificacion', valor: 'identificacion'},
      {etiqueta: 'Direccion', valor: 'direccion'}
    ],
    campos_presentacion: [
      {etiqueta: 'Identificacion', valor: 'identificacion'},
      {etiqueta: 'Direccion', valor: 'direccion'}
    ],
    opciones_busqueda: {}
  }
}

export const clienteOpcionesBuscador: OpcionesBuscador = {
  endpoint: "clientes",
  opciones: {
    campos_busqueda: [
      {etiqueta: 'Nombres', valor: 'nombres'},
      {etiqueta: 'Identificacion', valor: 'identificacion'}
    ],
    campos_presentacion: [
      {etiqueta: 'Nombres', valor: 'nombres'},
      {etiqueta: 'Identificacion', valor: 'identificacion'}
    ],
    opciones_busqueda: {}
  }
}

export const equipoOpcionesBuscador: OpcionesBuscador = {
  endpoint: "equipos",
  opciones: {
    campos_busqueda: [
      {etiqueta: 'Serial', valor: 'serial'},
      {etiqueta: 'Marca', valor: 'marca'},
      {etiqueta: 'Serie', valor: 'serie'},
      {etiqueta: 'Codigo', valor: 'codigo'}
    ],
    campos_presentacion: [
      {etiqueta: 'Serial', valor: 'serial'},
      {etiqueta: 'Marca', valor: 'marca'},
      {etiqueta: 'Modelo', valor: 'modelo'},
      {etiqueta: 'Serie', valor: 'serie'},
      {etiqueta: 'Codigo', valor: 'codigo'}
    ],
    opciones_busqueda: {}
  }
}
