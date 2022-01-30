import ControladorCache from 'clases/Plantillas/Campos/Editores/ControladorCache';
import Controller from 'api/Controller';
import Plantilla from '@quiron/classes/dist/entities/Plantilla';

export default class ControladorPlantilla {
  public plantillaCreada: string;
  private controladorCache: ControladorCache<Plantilla>;

  constructor() {
    this.controladorCache = new ControladorCache<Plantilla>('plantilla', Plantilla);
    this.plantillaCreada = '';
  }

  public async hayCache() {
    return await this.controladorCache.syncToServer();
  }

  // public async recuperarCache(): Promise<Plantilla> {
  //   try {
  //     let cache = await Controlador.rpc(
  //       'plantilla.getCachePlantilla',
  //       [this.idUsuario]
  //     );
  //     if (cache) {
  //       if (cache.plantilla_id) {
  //         this.controladorCache = new ControladorCache(this.idUsuario, cache.plantilla_id);
  //         this.plantillaCreada = cache.plantilla_id;
  //       }
  //       return new Plantilla({
  //         _id: '',
  //         identificador: '',
  //         modelo: undefined,
  //         serial: '',
  //         version: 0
  //       }).fabricarDesdeJSON(cache);
  //     } else {
  //       return null;
  //     }
  //   } catch (e) {
  //     throw new Error(JSON.stringify(e));
  //   }
  // }
  //
  // public async recuperarPlantilla(id: string) {
  //   try {
  //     let editable: any[] = await Controlador.rpc(
  //       'plantilla.obtenerPlantilla',
  //       [
  //         {
  //           identificador: id
  //         },
  //         {}
  //       ]
  //     );
  //     this.controladorCache = new ControladorCache(this.idUsuario, editable[0]._id);
  //     this.plantillaCreada = editable[0]._id;
  //     return new Plantilla({
  //       _id: '',
  //       identificador: '',
  //       modelo: undefined,
  //       serial: '',
  //       version: 0
  //     }).fabricarDesdeJSON(editable[0]);
  //   } catch (e) {
  //     throw new Error(JSON.stringify(e));
  //   }
  // }
  //
  // public async descartarPlantilla() {
  //   await Controlador.rpc(
  //     'plantilla.deleteCachePlantilla',
  //     [this.idUsuario]
  //   );
  // }
  //
  // public async actualizarPlantilla(plantilla: Plantilla): Promise<any> {
  //   let response = await Controlador.rpc(
  //     'plantilla.updatePlantilla',
  //     [
  //       this.plantillaCreada,
  //       this.idUsuario,
  //       plantilla
  //     ]
  //   );
  //   await Controlador.rpc(
  //     'plantilla.deleteCachePlantilla',
  //     [this.idUsuario]
  //   );
  //   return response;
  // }
  //
  // public async crearPlantilla(plantilla: Plantilla) {
  //   let response = await Controlador.rpc(
  //     'plantilla.crearPlantilla',
  //     [
  //       this.idUsuario,
  //       plantilla
  //     ]
  //   );
  //   await Controlador.rpc(
  //     'plantilla.deleteCachePlantilla',
  //     [this.idUsuario]
  //   );
  //   return response;
  // }
  //
  // public async cache(plantilla: Plantilla) {
  //   try {
  //     await this.controladorCache.cache(plantilla);
  //   } catch (e) {
  //     throw e;
  //   }
  // }

}
