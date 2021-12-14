import EventEmitter from "events";
import IConexionBackend from 'api/IConexionBackend';

export enum ESTADO {
  "DESCONECTADO",
  "CONECTADO"
}

export default abstract class ConexionCliente extends EventEmitter implements IConexionBackend{
  public estado: ESTADO = ESTADO.DESCONECTADO;

  conectar(url: string, opciones: any): void {
  }

  desconectar(): void {
  }

  desuscribir(canal: string): void {
  }

  async rpc(procedimiento: string, data: any[]): Promise<any> {
    return undefined;
  }

  suscribir(canal: string, listener: Function): void {
  }

  autenticar(usuario: string, password: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  desautenticar(usuario: string): Promise<any> {
    return Promise.resolve(undefined);
  }

}
