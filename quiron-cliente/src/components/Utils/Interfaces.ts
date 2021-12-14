interface CampoBusqueda {
  etiqueta: string;
  valor: string;
  opcional?: boolean;
}

interface CampoPresentacion {
  etiqueta: string;
  valor: string;
}

interface CampoCreacion {
  etiqueta: string;
  valor: string;
}

export interface OpcionesDialogo {
  campos_busqueda: CampoBusqueda[],
  campos_presentacion: CampoPresentacion[],
  opciones_busqueda: any,
  seleccion_multiple?: boolean,
  creacion?: boolean,
  campos_creacion?: CampoCreacion[]
}

export interface OpcionesBuscador {
  opciones: OpcionesDialogo,
  endpoint: string
}

export interface OpcionesTabla {
  esquema: string[],
  datos: Record<string, any>
}
