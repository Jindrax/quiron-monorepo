import Plantilla from '@quiron/classes/dist/entities/Plantilla';
import Controller from 'api/Controller';

export default class ControladorCache<T extends Plantilla> {
  private history: T[];
  private window: number;
  private readonly cacheType: string;
  private readonly cacheClass: any;

  constructor(cacheType: string, cacheClass: any) {
    this.history = null;
    this.window = 0;
    this.cacheType = cacheType;
    this.cacheClass = cacheClass;
  }

  private isArray(cache: any): cache is T[] {
    return Array.isArray(cache);
  }

  private static isObject<Q>(object: any): object is Q {
    return !Array.isArray(object);
  }

  public async syncToServer(): Promise<boolean> {
    try {
      const response = await Controller.get<T>(`cache/${this.cacheType}`, undefined, this.cacheClass);
      if (this.isArray(response)) {
        this.history = response;
        this.window = response.length;
      }
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public async getValue(): Promise<T | null> {
    if (this.history == null) {
      await this.syncToServer();
    }
    if (this.history.length > 0) {
      return this.history[this.history.length - 1];
    }
    return new this.cacheClass({});
  }

  public async cache(data: T) {
    try {
      this.history.push(Object.assign(new this.cacheClass({}), data));
      await this.saveToServer(data);
    } catch (e) {
      throw e;
    }
  }

  public async saveToServer(data: T) {
    try {
      const wrapper = {
        elemento: data
      }
      await Controller.post(`cache/${this.cacheType}`, wrapper, undefined, this.cacheClass);
    } catch (e) {
      throw e;
    }
  }

  public async discardCache() {
    try {
      await Controller.delete<boolean>(`cache/${this.cacheType}`, undefined);
    } catch (e) {
      console.log(e);
    }
  }

  public async materializeCache(): Promise<any> {
    try {
      const valueToMaterialize = await this.getValue();
      if (valueToMaterialize) {
        switch (this.cacheType) {
          case "plantilla":
            return await Controller.post("plantilla", {plantilla: valueToMaterialize});
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
