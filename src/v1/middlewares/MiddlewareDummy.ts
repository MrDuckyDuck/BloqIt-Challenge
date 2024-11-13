import { Next } from "koa";
import { CustomError } from "v1/utils";

export default class MiddlewareDummy {
  constructor() {}

  public handle = async (ctx: any, next: Next) => {
    try {
      console.log("Welcome to the Dummy Middleware.. Add your logic here!");
      await next();
    } catch (error: any) {
      throw new CustomError(500, { data: "Oh no! Dummy middleware failed!" });
    }
  };
}
