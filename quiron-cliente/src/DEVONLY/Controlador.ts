import axios, {AxiosRequestConfig} from 'axios';
import {plainToClass} from 'class-transformer';

export default class Controlador {

  static url: string = process.env.DEV ? "http://localhost:4558" : window.location.origin;

  static async posteo<T>(recurso: string, data: any, config?: AxiosRequestConfig, tipo?: any): Promise<T | T[]> {
    try {
      const respuesta = await axios.post(`${this.url}/${recurso}`, data, config);
      if (tipo) {
        return this.procesarRespuesta<T>(tipo, respuesta.data);
      } else {
        return <T><unknown>respuesta.data;
      }
    } catch (e) {
      this.procesarError(e);
    }
  }

  static async actualizar<T>(recurso: string, data: any, config?: AxiosRequestConfig, tipo?: any): Promise<T | T[]> {
    try {
      const respuesta = await axios.patch(`${this.url}/${recurso}`, data, config);
      if (tipo) {
        return this.procesarRespuesta<T>(tipo, respuesta.data);
      } else {
        return <T><unknown>respuesta.data;
      }
    } catch (e) {
      this.procesarError(e);
    }
  }

  private static procesarError(e: any): any {
    console.log(e.response.data);
    throw e.response.data;
  }

  private static procesarRespuesta<T>(tipo: any, respuesta: any): T | T[] {
    return plainToClass(tipo, respuesta);
  }
}
