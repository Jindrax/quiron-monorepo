import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';

@Module
export default class LayoutStoreModule extends VuexModule {
  public leftDrawerOpen = false;

  @Mutation
  public SET_LEFT_DRAWER_OPEN(value: boolean) {
    this.leftDrawerOpen = value;
  }

  @Action
  public setLeftDrawerOpen(value: boolean) {
    this.SET_LEFT_DRAWER_OPEN(value);
  }

  @Action
  public toggleLeftDrawer() {
    this.SET_LEFT_DRAWER_OPEN(!this.leftDrawerOpen);
  }
}
