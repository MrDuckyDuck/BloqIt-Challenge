import { Next } from "koa";

export default class ErrorHandlerMiddleware {
  constructor() {}

  public handle = async (ctx: any, next: Next) => {
    try {
      await next();
    } catch (error: any) {
      /**
       * @todo
       * Can implement custom error handling, like catching specific errors and returning a custom response
       */

      console.log("ERROR", error);

      ctx.status = error.status || 500;
      ctx.body = error.clientResponse || "Ooops, something went wrong.";
    }
  };
}
