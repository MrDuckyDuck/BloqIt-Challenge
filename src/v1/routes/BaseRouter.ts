import KoaRouter, { Middleware } from "@koa/router";
import { BaseControllerInterface } from "v1/interfaces";

/**
 * @description Base router class implements the routes and enforces the provided middlewares into the routes
 * Responsible to hold the common routes for CRUD
 */
export default class BaseRouter<T> {
  private router: KoaRouter;
  private controller: BaseControllerInterface.Functions<T>;
  private basePath: string;

  /**
   * @param path The base path for the router
   * @param controller The controller to run on the router
   */
  constructor(path: string, controller: BaseControllerInterface.Functions<T>) {
    this.basePath = path;
    this.router = new KoaRouter({
      prefix: `${process.env.APPLICATION_ROUTE_PREFIX}${this.basePath}`,
    });
    this.basePath = path;
    this.controller = controller;
    this.customCrudRoutes(path);
  }

  /**
   *
   * @description Sets up custom get by id default route
   */
  withDefaultGetById(middlewares: Middleware[] = []) {
    this.router.get(
      `/:id`,
      ...middlewares,
      this.controller.getById.bind(this.controller)
    );
  }

  /**
   *
   * @description Sets up custom get all default route
   */
  withDefaultGetAll(middlewares: Middleware[] = []) {
    this.router.get(
      "/",
      ...middlewares,
      this.controller.getAll.bind(this.controller)
    );
  }

  /**
   *
   * @description Sets up custom create default route
   */
  withDefaultCreate(middlewares: Middleware[] = []) {
    this.router.post(
      "/",
      ...middlewares,
      this.controller.create.bind(this.controller)
    );
  }

  /**
   *
   * @description Sets up custom update by id default route
   */
  withDefaultUpdateById(middlewares: Middleware[] = []) {
    this.router.put(
      `/:id`,
      ...middlewares,
      this.controller.updateById.bind(this.controller)
    );
  }

  /**
   *
   * @description Sets up custom delete by id default route
   */
  withDefaultDeleteById(middlewares: Middleware[] = []) {
    this.router.delete(
      `/:id`,
      ...middlewares,
      this.controller.deleteById.bind(this.controller)
    );
  }

  private customCrudRoutes(path: string) {
    /** Add custom crud routes here **/
  }

  public getRouter() {
    return this.router;
  }
}
