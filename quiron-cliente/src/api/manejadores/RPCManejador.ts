import { resolverError } from '../Errores';

export class RPCManejador{
  public manejador:Function | undefined = undefined;
  public constructor(manejador:Function){
    this.manejador = manejador;
  }
  public async resolver(args:any[], kwargs:Record<string, any>){
    if(args[0]=="Error"){
      throw resolverError(args[1]);
    }
    return await this.manejador(args, kwargs);
  }
}
