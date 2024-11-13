import { Context, Next } from "koa";
import { CustomErrorInterface } from "v1/interfaces";

/**
 * @class PageNotFoundMiddleware
 * @description
 * Middleware to handle 404 errors
 */
export default class PageNotFoundMiddleware {
  CustomErrorClass: CustomErrorInterface.CustomErrorNewInstance;
  constructor(CustomErrorClass: CustomErrorInterface.CustomErrorNewInstance) {
    this.CustomErrorClass = CustomErrorClass;
    this.handle = this.handle.bind(this);
  }

  async handle(ctx: Context, next: Next) {
    console.log(ctx.request);
    if (ctx.status === 404) {
      throw new this.CustomErrorClass(404, {
        data: "Page not found. Please try again.",
      });
    }
    await next();
  }
}
