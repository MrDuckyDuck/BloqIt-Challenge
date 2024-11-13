import { Next } from "koa";
import { CustomError } from "v1/utils";

export default class AnotherMiddlewareDummy {
  constructor() {}

  public handle = async (ctx: any, next: Next) => {
    try {
      console.log(
        "Welcome to the Another Dummy Middleware.. Add your logic here!"
      );
      await next();
    } catch (error: any) {
      throw new CustomError(500, {
        data: "Oh no! Another Dummy middleware failed!",
      });
    }
  };
}
