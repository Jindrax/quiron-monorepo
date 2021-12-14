import {RouteConfig} from 'vue-router';
import {LocalStorage} from "quasar";
import hub from "./UsuariosHub";

export interface ActionForHubPage {
  label: string,
  route: string
}

export interface HubForLayout {
  id: string,
  label: string,
  icon: string,
  actions: ActionForHubPage[],
  route: string
}

export class HubActionClass {
  private readonly route: string;
  private readonly label: string;
  private readonly pageComponent: any;

  constructor(root: string, route: string, label: string, pageComponent: any) {
    this.route = `${root}/${route}`;
    this.label = label;
    this.pageComponent = pageComponent;
  }

  get ActionForHubPage(): ActionForHubPage {
    return {
      label: this.label,
      route: this.route
    }
  }

  get ActionForVueRouter(): RouteConfig {
    return {
      path: this.route,
      component: this.pageComponent
    };
  }
}

export class HubClass {
  private readonly root: string = "";
  private readonly label: string = "";
  private actions: HubActionClass[] = [];
  private readonly hubComponent: any = () => import("pages/HubPagina.vue");
  private readonly icon: string = "";

  constructor(root: string, label: string, icon: string, hubComponent: any = () => import("pages/HubPagina.vue")) {
    this.root = root;
    this.label = label;
    this.actions = [];
    this.hubComponent = hubComponent;
    this.icon = icon;
  }

  public addAction(route: string, label: string, pageComponent: any, permission?: string) {
    if (permission) {
      const usuario: any = LocalStorage.getItem("usuario");
      if (usuario.permisos[permission]) {
        this.actions.push(new HubActionClass(`/${this.root}`, route, label, pageComponent));
      }
    } else {
      this.actions.push(new HubActionClass(`/${this.root}`, route, label, pageComponent));
    }
  }

  public isUserAuthorized() {
    return this.actions.length > 0;
  }

  private getActionsForHubPage(): ActionForHubPage[] {
    return this.actions.map(value => {
      return value.ActionForHubPage;
    });
  }

  private getActionsForVueRouter(): RouteConfig[] {
    return this.actions.map(value => {
      return value.ActionForVueRouter;
    });
  }

  get VueRouterConfig(): RouteConfig {
    return {
      path: this.root,
      component: this.hubComponent,
      props: {
        actions: this.getActionsForHubPage()
      },
      children: this.getActionsForVueRouter()
    }
  }

  get HubForLayout(): HubForLayout {
    return {
      id: this.root,
      label: this.label,
      icon: this.icon,
      actions: this.getActionsForHubPage(),
      route: `/${this.root}`
    }
  }
}

export class HubCollection {
  hubs: HubClass[] = [];

  constructor() {
    this.hubs = [];
  }

  public addHub(hub: HubClass) {
    if (hub.isUserAuthorized()) {
      this.hubs.push(hub);
    }
  }

  public getHubsForVueRouter(): RouteConfig[] {
    return this.hubs.map(value => {
      return value.VueRouterConfig
    });
  }

  public getHubsForLayout(): HubForLayout[] {
    return this.hubs.map(value => {
      return value.HubForLayout
    });
  }
}
