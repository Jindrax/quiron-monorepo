export default interface IConexionBackend{
  conectar(url:string, opciones:any):void;
  desconectar():void;
  suscribir(canal:string, listener:Function):void;
  desuscribir(canal:string):void;
  rpc(procedimiento:string, data:any[]):Promise<any>;
  autenticar(usuario:string, password:string):Promise<any>;
  desautenticar(usuario:string):Promise<any>;
}
