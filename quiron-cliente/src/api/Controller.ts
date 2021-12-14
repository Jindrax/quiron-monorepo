import axios, {AxiosRequestConfig} from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;
export default class Controller {
  private static url: string = process.env.DEV ? "http://localhost:4558" : window.location.origin;

  private static hydrate<T>(response: any, classType: any) {
    if (classType) {
      if (Array.isArray(response)) {
        return response.map((element: any) => {
          return new classType(element);
        });
      } else {
        return new classType(response);
      }
      // return plainToClass<T, any>(classType, response);
    } else {
      return <T><unknown>response;
    }
  }

  static async get<T>(endpoint: string, config?: AxiosRequestConfig, classType?: any): Promise<T | T[]> {
    try {
      const response = await axios.get(`${this.url}/${endpoint}`, config);
      return Controller.hydrate<T>(response.data, classType);
    } catch (e) {
      return this.processError(e);
    }
  }

  static async post<T>(endpoint: string, data: any, config?: AxiosRequestConfig, classType?: any): Promise<T | T[]> {
    try {
      const response = await axios.post(`${this.url}/${endpoint}`, data, config);
      return Controller.hydrate<T>(response.data, classType);
    } catch (e) {
      return this.processError(e);
    }
  }

  static async patch<T>(endpoint: string, data: any, config?: AxiosRequestConfig, classType?: any): Promise<T | T[]> {
    try {
      const response = await axios.patch(`${this.url}/${endpoint}`, data, config);
      return Controller.hydrate<T>(response.data, classType);
    } catch (e) {
      return this.processError(e);
    }
  }

  static async delete<T>(endpoint: string, config?: AxiosRequestConfig, classType?: any): Promise<T | T[]> {
    try {
      const response = await axios.delete(`${this.url}/${endpoint}`, config);
      return Controller.hydrate<T>(response.data, classType);
    } catch (e) {
      return this.processError(e);
    }
  }

  private static processError(e: any): any {
    console.log(e);
    throw e.response.data;
  }
}
