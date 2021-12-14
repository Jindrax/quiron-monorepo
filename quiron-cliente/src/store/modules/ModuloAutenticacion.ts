import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {Cookies} from 'quasar';

@Module
export default class ModuloAutenticacion extends VuexModule {
  public autenticado: boolean = Cookies.get('nombreUsuario') != null;
  public token: string = '';
  public estadoDrawer: boolean = false;

  @Mutation
  public setAutenticado(estado: boolean) {
    this.estadoDrawer = estado;
    this.autenticado = estado;
  }

  @Mutation
  public setToken(token: string) {
    this.token = token;
  }

  @Mutation
  public setEstadoDrawer(estado: boolean) {
    this.estadoDrawer = estado;
  }

}
